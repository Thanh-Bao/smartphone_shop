// To run project:

// denon run --allow-env --allow-net index.js

import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { encode, decode } from "https://deno.land/std/encoding/base64.ts"
import { Client } from "https://deno.land/x/mysql/mod.ts";

import { access_token, refresh_token, accountAuthen, authenURL, getNewAccessTokenURL, baseURL, setAccess_token, setRefresh_token, MySQL_config } from './config.js';

const router = new Router();

const MySQL_client = await new Client().connect(MySQL_config);


const getNewAccessToken = async () => {
  const basic_auth = encode(`${accountAuthen.username}:${accountAuthen.password}`);
  const SAPresponse = await fetch(getNewAccessTokenURL, {
    headers: { "Authorization": `Basic ${basic_auth}` }
  });
  const json = await SAPresponse.json();
  setAccess_token(json.access_token);
  setRefresh_token(json.refresh_token);
  return json;
}

await getNewAccessToken();

// For Cronb Job servie: /renew_access_token?isCronJob=true
router.get("/renew_access_token", async (ctx) => {

  const isCronJob = Boolean(ctx.request.url.searchParams.get('isCronJob'));
  const currentTimestamp = Math.floor(Date.now() / 1000);

  //🤩🤩 Imperative Programming : 🤩🤩
  try {
    const json = await getNewAccessToken();
    const JWT = json.access_token.split(".");
    const JWT_payload = JSON.parse(new TextDecoder().decode(decode(JWT[1])));
    const JWT_expired = JWT_payload.exp;
    const SQL_result = await MySQL_client.execute(`INSERT INTO Token_Log(timestamp,	Access_Token,Refresh_Token,	Expired_time,isSuccess,isCronJob,Error_message) values(?,?,?,?,?,?,?)`, [
      currentTimestamp, access_token, refresh_token, JWT_expired, true, isCronJob, null
    ]);
    console.log(...json, SQL_result);
    // 4. Finish
    ctx.response.body = { ...json, __________token_after_decode__________: JWT_payload };
  } catch (error) {
    const SQL_result = await MySQL_client.execute(`INSERT INTO Token_Log(timestamp,	Access_Token,Refresh_Token,	Expired_time,isSuccess,isCronJob,Error_message) values(?,?,?,?,?,?,?)`, [
      currentTimestamp, null, null, null, false, isCronJob, error.message
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

router.get("/", (ctx) => {
  ctx.response.body = {
    SAP: [{
      Service_binding: "ZBUI_PHONE_INFO",
      Entity: ["ZC_PHONE_INFO"],
      Path: "/ZBUI_PHONE_INFO/ZC_PHONE_INFO"
    }],
    site_map: {
      new_token_manual: "/renew_access_token",
      CronJob_renew_token: "/renew_access_token?isCronJob=true"
    }
  };
});


const app = new Application();
app.use(oakCors())
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });