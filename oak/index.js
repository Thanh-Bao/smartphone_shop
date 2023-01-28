// To run project:
// denon run --allow-env --allow-net index.js

import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { Client } from "https://deno.land/x/mysql/mod.ts";
import { decode } from "https://deno.land/std/encoding/base64.ts"

import { access_token, baseURL, MySQL_config } from './config.js';
import { formatDateTime, fetchNewToken } from './helper.js';

const GMT_7 = 25200;

const router = new Router();

const MySQL_client = await new Client().connect(MySQL_config);

await fetchNewToken();

// For Cronb Job servie: /renew_access_token?isCronJob=true
router.get("/renew_access_token", async (ctx) => {

  const isCronJob = Boolean(ctx.request.url.searchParams.get('isCronJob'));
  const currentTimestamp = Math.floor(Date.now() / 1000) + GMT_7;

  try {
    const json = await fetchNewToken();
    // 3. get time expried token
    const JWT = json.access_token.split(".");
    const JWT_payload = JSON.parse(new TextDecoder().decode(decode(JWT[1])));
    const JWT_expired = JWT_payload.exp + GMT_7;
    // 4. Insert log 
    const SQL_result = await MySQL_client.execute(`INSERT INTO Token_Log(timestamp,	Access_Token,	Expired_time,isSuccess,isCronJob,Error_message) values(?,?,?,?,?,?)`, [
      currentTimestamp, access_token, JWT_expired, true, isCronJob, null
    ]);
    console.log(json, SQL_result);
    // 5. Finish
    ctx.response.body = { ...json, __________token_after_decode__________: JWT_payload };
  } catch (error) {
    const SQL_result = await MySQL_client.execute(`INSERT INTO Token_Log(timestamp,	Access_Token,	Expired_time,isSuccess,isCronJob,Error_message) values(?,?,?,?,?,?)`, [
      currentTimestamp, null, null, false, isCronJob, error.message
    ]);
    console.log(error.message, SQL_result);
    ctx.response.body = error.message;
    ctx.response.status = 401;
  }
});


router.all("/:ZBUI/:Entity", async (ctx) => {
  const { ZBUI, Entity } = ctx.params;

  try {
    const SAPresponse = await fetch(baseURL(ZBUI, Entity), {
      method: ctx.request.menthod,
      headers: { "Authorization": `Bearer ${access_token}` }
    });
    const json = await SAPresponse.json();
    ctx.response.body = json.d.results.map(phone => {
      delete phone.__metadata;
      return phone;
    });
  } catch (error) {
    ctx.response.body = error.message;
    ctx.response.status = 500;
  }

});

router.get("/", async (ctx) => {

  const token_Log = await MySQL_client.query(`select * from Token_Log ORDER BY timestamp DESC LIMIT 1`);
  const isSuccess = await MySQL_client.query(`select count(*) from Token_Log where isSuccess = 1`);
  const isFail = await MySQL_client.query(`select count(*) from Token_Log where isSuccess = 0`);

  ctx.response.body = {
    ____________________________________SAP_Trial_Entity_List____________________________________: [{
      Service_binding: "ZBUI_PHONE_INFO",
      Entity: ["ZC_PHONE_INFO"],
      Path: "/ZBUI_PHONE_INFO/ZC_PHONE_INFO"
    }],
    ____________________________________site_map____________________________________: {
      new_token_manual: "/renew_access_token",
      CronJob_renew_token: "/renew_access_token?isCronJob=true"
    },
    ____________________________________current_token____________________________________: {
      ...token_Log["0"]
      , timestamp: formatDateTime(token_Log["0"].timestamp), Expired_time: formatDateTime(token_Log["0"].Expired_time)
    },
    ____________________________________statistical____________________________________: {
      total_Success: isSuccess[0]["count(*)"],
      total_Fail: isFail[0]["count(*)"]
    }
  };
});

const app = new Application();
app.use(oakCors())
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });