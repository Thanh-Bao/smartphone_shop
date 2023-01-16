// To run project:

// denon run --allow-env --allow-net index.js

import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { encode, decode } from "https://deno.land/std/encoding/base64.ts"
import { Client } from "https://deno.land/x/mysql/mod.ts";

import { access_token, refresh_toke, accountAuthen, authenURL, getNewAccessTokenURL, baseURL, setAccess_token, setRefresh_token } from './config.js';

const router = new Router();

router.get("/renew_access_token", async (ctx) => {
  //🤩🤩 Imperative Programming : 🤩🤩
  try {
    const basic_auth = encode(`${accountAuthen.username}:${accountAuthen.password}`);
    const SAPresponse = await fetch(getNewAccessTokenURL, {
      headers: { "Authorization": `Basic ${basic_auth}` }
    });
    // 1. get new token from SAP server
    const json = await SAPresponse.json();
    // 2. set new token on this Oak server
    setAccess_token(json.access_token);
    // 3. get time expried token
    const JWT = json.access_token.split(".");
    const JWT_payload = JSON.parse(new TextDecoder().decode(decode(JWT[1])));
    const JWT_expired = JWT_payload.exp;
    // 4. Insert log 
    ctx.response.body = { ...json, __________token_after_decode__________: JWT_payload };
  } catch (error) {
    console.log(error);
    ctx.response.body = "handle BASIC AUTH fail !";
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
    ctx.response.body = "Can not fetch data from SAP BTP cockpit, Please check your token!";
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
      new_token: "/renew_access_token"
    }
  };
});




const app = new Application();
app.use(oakCors())
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });