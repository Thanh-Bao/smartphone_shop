// To run project:
// denon run --allow-env --allow-net index.js

import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
import { Client } from "https://deno.land/x/mysql/mod.ts";
import { decode } from "https://deno.land/std/encoding/base64.ts"

import { access_token, SAP_Endpoint, convertURL, MySQL_config } from './config.js';
import { formatDateTime, fetchNewToken } from './helper.js';

const GMT_7 = 25200;

const MySQL_client = await new Client().connect(MySQL_config);

await fetchNewToken();

serve(async req => {
  const url = new URL(req.url);
  const pathname = url.pathname;

  switch (pathname) {
    case "/renew_access_token":
      try {
        const currentTimestamp = Math.floor(Date.now() / 1000) + GMT_7;
        const json = await fetchNewToken();
        //. get time expried token
        const JWT = json.access_token.split(".");
        const JWT_payload = JSON.parse(new TextDecoder().decode(decode(JWT[1])));
        const JWT_expired = JWT_payload.exp + GMT_7;
        //. Insert log
        const SQL_result = await MySQL_client.execute(`INSERT INTO Token_Log(timestamp,	Access_Token,	Expired_time,isSuccess,isCronJob,Error_message) values(?,?,?,?,?,?)`, [
          currentTimestamp, access_token, JWT_expired, true, false, null
        ]);
        //. Finish
        console.log(json, SQL_result);
        return new Response(JSON.stringify({ ...json, __________the_token_after_decode__________: JWT_payload }));
      } catch (error) {
        const SQL_result = await MySQL_client.execute(`INSERT INTO Token_Log(timestamp,	Access_Token,	Expired_time,isSuccess,isCronJob,Error_message) values(?,?,?,?,?,?)`, [
          currentTimestamp, null, null, false, false, error.message
        ]);
        console.log(error.message, SQL_result);
        return new Response(JSON.stringify(error.message)).status == 401;
      }
    case "/":
      const token_Log = await MySQL_client.query(`select * from Token_Log ORDER BY timestamp DESC LIMIT 1`);
      const isSuccess = await MySQL_client.query(`select count(*) from Token_Log where isSuccess = 1`);
      const isFail = await MySQL_client.query(`select count(*) from Token_Log where isSuccess = 0`);

      return new Response(JSON.stringify({
        ____________________________________SAP_Trial_Entity_List____________________________________: [{
          Service_binding: "ZBUI_PHONE_INFO",
          Entity: ["ZC_PHONE_INFO"],
          Path: "/ZBUI_PHONE_INFO3/ZC_PHONE_INFO3"
        }],
        ____________________________________site_map____________________________________: {
          renew_access_token: "/renew_access_token",
        },
        ____________________________________current_token____________________________________: {
          ...token_Log["0"]
          , timestamp: formatDateTime(token_Log["0"].timestamp), Expired_time: formatDateTime(token_Log["0"].Expired_time)
        },
        ____________________________________statistical____________________________________: {
          total_Success: isSuccess[0]["count(*)"],
          total_Fail: isFail[0]["count(*)"]
        }
      }));
    default:
      try {
        const SAPresponse = await fetch(convertURL(pathname), {
          method: req.method,
          headers: { "Authorization": `Bearer ${access_token}` }
        });
        const json = await SAPresponse.json();
        const result = JSON.stringify(json).replaceAll(SAP_Endpoint, url.origin);
        return new Response(result);
      } catch (error) {
        return new Response(JSON.stringify(error.message)).status == 500;
      }
  }

});


