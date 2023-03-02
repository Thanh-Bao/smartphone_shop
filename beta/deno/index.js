// To run project:
// denon run --allow-env --allow-net index.js

import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
import { cron } from 'https://deno.land/x/deno_cron/cron.ts';

import { access_token, SAP_Endpoint, convertURL } from './config.js';
import { fetchNewToken, getJWTpayload } from './helper.js';

await fetchNewToken();
cron('0 0 */2 ? * *', () => {
  // https://www.freeformatter.com/cron-expression-generator-quartz.html
  fetchNewToken();
});

serve(async req => {

  const url = new URL(req.url);
  const pathname = url.pathname;

  switch (pathname) {
    case "/renew_token":
      try {
        const _access_token = await fetchNewToken();
        return new Response(JSON.stringify({ _access_token, __________the_token_after_decode__________: getJWTpayload(_access_token) }));
      } catch (error) {
        console.log(error.message);
        return new Response(JSON.stringify(error.message)).status == 401;
      }
    case "/":
      return new Response(JSON.stringify({
        "____________________________________SAP_Trial_Entity_List____________________________________": [{
          "Service_binding": "ZBUI_PHONE_INFO3",
          "Entity": ["ZC_PHONE_INFO3"],
          "Path": "/ZBUI_PHONE_INFO3/ZC_PHONE_INFO3"
        }],
        "____________________________________site_map____________________________________": {
          "renew_token": "/renew_token",
        },
        "____________________________________current_access_token____________________________________": {
          "access_token": access_token
          , "Expired_time": getJWTpayload(access_token).exp
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

