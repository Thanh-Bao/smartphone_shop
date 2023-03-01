[![](https://img.shields.io/appveyor/build/gruntjs/grunt)](https://shop.bao.name.vn)
[![](https://img.shields.io/cirrus/github/flutter/flutter)](https://shop.bao.name.vn)
[![](https://img.shields.io/badge/tests-100%25-brightgreen)](https://shop.bao.name.vn)
[![](https://img.shields.io/badge/docs-passing-brightgreen)](https://shop.bao.name.vn)
[![](https://img.shields.io/badge/style-plastic-green.svg?longCache=true&style=plastic)](https://shop.bao.name.vn)
[![](https://img.shields.io/github/stars/badges/shields.svg?style=social)](https://shop.bao.name.vn)

| Instance name | domain /IP                                                                                                                                   | Infrastructur                           | Description                      | Note                        | status  |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | -------------------------------- | --------------------------- | ------- |
| SAP           | [6654aaf7-905f-48ea-b013-3811c03fcba8.abap.us10.hana.ondemand.com](https://6654aaf7-905f-48ea-b013-3811c03fcba8.abap.us10.hana.ondemand.com) | BTP Trial                               |                                  | Domain not contain "_-web_" | Online  |
| Oak           | [oak.bao.name.vn](https://oak.bao.name.vn)                                                                                                   | [deno.land](https://deno.land)          | Bypass CORS, Authorization (JWT) |                             | Online  |
| ReactJS       | [shop.bao.name.vn](https://shop.bao.name.vn)                                                                                                 | firebase or vercel                      |                                  |                             | Offline |
| Angular       | [angular-sapui5.web.app](https://angular-sapui5.web.app)                                                                                     | [firebase](https://firebase.google.com) | beta phase                       |                             | Online  |

---

| Service name                               | Target      | Description                                                  |
| ------------------------------------------ | ----------- | ------------------------------------------------------------ |
| [uptimerobot.com](https://uptimerobot.com) | oak, nextJS | monitor, email alert                                         |
| [checklyhq.com](https://checklyhq.com)     | oak, nextJS | monitor, email alert, speed test in many different countries |
| [discord.com](https://discord.com)         | SAP         | new order notifications                                      |

---

![img](https://github.com/Thanh-Bao/smartphone_shop/blob/main/oak.bao.name.vn.drawio%20(1).png)

---

# SAP

- Account: SAP BTP trial: 18130017@st.hcmuaf.edu.vn
- Package: ZSMARTPHONE_SHOP3

| Transport request | Owner        | User UUID                            | Target | Description     |
| ----------------- | ------------ | ------------------------------------ | ------ | --------------- |
| TRLK912520        | CB9980007210 | 8593f739-10e6-47e4-a4d1-d3020b21ac88 |        | Smartphone Shop |

To get JWT: <authen_domain>/oauth/token?grant_type=password&username=18130017@st.hcmuaf.edu.vn&password=< password >

# Link reference:

- Enable JWT SAP RAP BTP: https://www.youtube.com/watch?v=0jKsN2z_0XE
- To use refresh_token: https://help.sap.com/docs/IDENTITY_AUTHENTICATION/6d6d63354d1242d185ab4830fc04feb1/c62c09e058884f6ca49f7158e2b41321.html

# Tutorial

- https://blogs.sap.com/2019/05/09/sap-cloud-platform-backend-service-tutorial-15-security-using-authorization-code-grant/

# Note

http POST example:

```javascript
 {
  method : 'POST',
  url: "https://6654aaf7-905f-48ea-b013-3811c03fcba8.abap.us10.hana.ondemand.com/sap/opu/odata/sap/ZBUI_PHONE_INFO3/ZC_PHONE_INFO3" ,
  responseType:'json',
  resolveBodyOnly:true ,
  headers: {
        Accept : 'application/json',
        Content-Type: 'application/json',
        Authorization : 'Bearer eyJhbGciOiJSUzI1N................iIsImprdSIsyQ' ,
        x-csrf-token : 'RzYQ_UyfwIE0IZWR4N1E1A==',
        Cookie: "SAP_SESSIONID_TRL_100=v9OWXFl4YMmAWeDKbzHiB71t3vWxxBHtpUVOpgiOAq8%3d; sap-usercontext=sap-client=100"
     },
  body: JSON.stringify({
     id: 999777,
     name: "Samsung 999" })
}
```
