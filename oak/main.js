// *****************************************************************************************

const baseURL = (ZBUI, Entity) =>
  `https://6654aaf7-905f-48ea-b013-3811c03fcba8.abap.us10.hana.ondemand.com/sap/opu/odata/sap/${ZBUI}/${Entity}?$format=json`

const refresh_toke = "4a4beb6554eb40878cd77480e4f02a9a-r";
let access_token = "eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYWMyZDFlZmV0cmlhbC5hdXRoZW50aWNhdGlvbi51czEwLmhhbmEub25kZW1hbmQuY29tL3Rva2VuX2tleXMiLCJraWQiOiJkZWZhdWx0LWp3dC1rZXktLTE5NjkwNjgwODYiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJhZjE2NWU3NWM2YTc0ODVmYTQ0YTFlODk2MzFkMTU0NyIsImV4dF9hdHRyIjp7ImVuaGFuY2VyIjoiWFNVQUEiLCJzdWJhY2NvdW50aWQiOiI4NTkzZjczOS0xMGU2LTQ3ZTQtYTRkMS1kMzAyMGIyMWFjODgiLCJ6ZG4iOiJhYzJkMWVmZXRyaWFsIn0sInhzLnN5c3RlbS5hdHRyaWJ1dGVzIjp7InhzLnJvbGVjb2xsZWN0aW9ucyI6WyJCdXNpbmVzc19BcHBsaWNhdGlvbl9TdHVkaW9fRGV2ZWxvcGVyIiwiQnVzaW5lc3NfQXBwbGljYXRpb25fU3R1ZGlvX0FkbWluaXN0cmF0b3IiLCJTdWJhY2NvdW50IEFkbWluaXN0cmF0b3IiXX0sImdpdmVuX25hbWUiOiJCYW8iLCJ4cy51c2VyLmF0dHJpYnV0ZXMiOnt9LCJmYW1pbHlfbmFtZSI6IkJhbyIsInN1YiI6IjE5YjhlMDdiLWI4MDEtNDA0ZS1hODc5LWVmNjM4ZDBkODU4NyIsInNjb3BlIjpbIm9wZW5pZCJdLCJjbGllbnRfaWQiOiJzYi1uYS1kNDdhYjE0Ny0zZWJkLTQ3NDgtOTE5Zi04YjIyYmUwMjVhZDQhYTEyODM4NyIsImNpZCI6InNiLW5hLWQ0N2FiMTQ3LTNlYmQtNDc0OC05MTlmLThiMjJiZTAyNWFkNCFhMTI4Mzg3IiwiYXpwIjoic2ItbmEtZDQ3YWIxNDctM2ViZC00NzQ4LTkxOWYtOGIyMmJlMDI1YWQ0IWExMjgzODciLCJncmFudF90eXBlIjoicGFzc3dvcmQiLCJ1c2VyX2lkIjoiMTliOGUwN2ItYjgwMS00MDRlLWE4NzktZWY2MzhkMGQ4NTg3Iiwib3JpZ2luIjoic2FwLmRlZmF1bHQiLCJ1c2VyX25hbWUiOiIxODEzMDAxN0BzdC5oY211YWYuZWR1LnZuIiwiZW1haWwiOiIxODEzMDAxN0BzdC5oY211YWYuZWR1LnZuIiwiYXV0aF90aW1lIjoxNjczNzY2NjU2LCJyZXZfc2lnIjoiYTcxY2Q4N2IiLCJpYXQiOjE2NzM3NjY2NTYsImV4cCI6MTY3MzgwOTg1NiwiaXNzIjoiaHR0cHM6Ly9hYzJkMWVmZXRyaWFsLmF1dGhlbnRpY2F0aW9uLnVzMTAuaGFuYS5vbmRlbWFuZC5jb20vb2F1dGgvdG9rZW4iLCJ6aWQiOiI4NTkzZjczOS0xMGU2LTQ3ZTQtYTRkMS1kMzAyMGIyMWFjODgiLCJhdWQiOlsic2ItbmEtZDQ3YWIxNDctM2ViZC00NzQ4LTkxOWYtOGIyMmJlMDI1YWQ0IWExMjgzODciLCJvcGVuaWQiXX0.E5aNYnpxCCsk63-n5e6mqEH97FXXM4PRZM6XQxjJWIppNEZS1wpTyEBYBeTgc4Y_jg3CGpnD7-i2oTIFVFlmZVJVf8o-VgM1lEEbm5dp-pluwKM8xcY1g9bi7cywtnijGogO-sEDNmnoUttdOvtYg-PU8B6C7pdI8w6FGwlzecQQf4J3f8dS0GszolekQrNSve_AdIGmP_EouK2kXlgNWEg5xHA-5mDFT-OQNzl2QdnvfWOBYdJvy2Gnhrtwpco0NKPfTjaTF7bUnLYpBn-ke1SQZBEAg0ZiRC0_4tNAEiqH_JEsoWY2CntOqPqat6QqPgDvkTmvJilJKuMV5Dn4QA";

// *****************************************************************************************

import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import axios from "https://deno.land/x/axiod/mod.ts";

const router = new Router();


router.all("/:ZBUI/:Entity", (ctx) => {
  const { ZBUI, Entity } = ctx.params;

  // axios({
  //   method: ctx.request.method,
  //   url: baseURL(ZBUI, Entity),
  //   headers: {
  //     'Authorization': 'Bearer ' + access_token
  //   },
  //   data: {}
  // });

  axios.get(baseURL(ZBUI, Entity), {
    //...data
  }, {
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  }).then(console.log).catch(console.log);


  ctx.response.body = ctx;
});

router.get("/", (ctx) => {
  ctx.response.body = "OK";
});




const app = new Application();
app.use(oakCors())
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });