// To run project:

// denon run --allow-env --allow-net main.js

import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

import { renewAccessToken } from './helper.js';
import { access_token, refresh_toke, accountAuthen, authenURL, getNewAccessTokenURL, baseURL, setAccess_token, setRefresh_token } from './config.js';

const router = new Router();

router.get("/renew_access_token", (ctx) => {

  try {

  } catch (error) {

  }

  // console.log(access_token);
  // ctx.response.body = renewAccessToken("hê");
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
    console.log(error);
    ctx.response.body = "Can not fetch data from SAP BTP cockpit, Please check your token!";
    ctx.response.status = 500;
  }

});

router.get("/", (ctx) => {
  ctx.response.body = [{
    Service_binding: "ZBUI_PHONE_INFO",
    Entity: ["ZC_PHONE_INFO"],
    Path: "/ZBUI_PHONE_INFO/ZC_PHONE_INFO"
  }];
});




const app = new Application();
app.use(oakCors())
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });