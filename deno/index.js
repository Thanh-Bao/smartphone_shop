// To run project:
// denon run --allow-env --allow-net index.js

import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
import { decode } from "https://deno.land/std/encoding/base64.ts"

import { access_token, SAP_Endpoint, convertURL } from './config.js';
import { formatDateTime, fetchNewToken } from './helper.js';

const GMT_7 = 25200;

await fetchNewToken();

serve(async req => {
  const url = new URL(req.url);
  const pathname = url.pathname;

  switch (pathname) {
    case "/renew_access_token":
      try {
        const json = await fetchNewToken();
        //. get time expried token
        const JWT = json.access_token.split(".");
        const JWT_payload = JSON.parse(new TextDecoder().decode(decode(JWT[1])));
        JWT_payload.exp = JWT_payload.exp + GMT_7;

        console.log(json);
        return new Response(JSON.stringify({ ...json, __________the_token_after_decode__________: JWT_payload }));
      } catch (error) {
        console.log(error.message);
        return new Response(JSON.stringify(error.message)).status == 401;
      }
    case "/":
      return new Response(JSON.stringify({
        ____________________________________SAP_Trial_Entity_List____________________________________: [{
          Service_binding: "ZBUI_PHONE_INFO3",
          Entity: ["ZC_PHONE_INFO3"],
          Path: "/ZBUI_PHONE_INFO3/ZC_PHONE_INFO3"
        }],
        ____________________________________site_map____________________________________: {
          renew_access_token: "/renew_access_token",
        },
        ____________________________________current_access_token____________________________________: {
          access_token: access_token
          , Expired_time: formatDateTime(token_Log["0"].Expired_time)
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


