[![](https://img.shields.io/appveyor/build/gruntjs/grunt)](https://shop.bao.name.vn)
[![](https://img.shields.io/cirrus/github/flutter/flutter)](https://shop.bao.name.vn)
[![](https://img.shields.io/badge/tests-100%25-brightgreen)](https://shop.bao.name.vn)
[![](https://img.shields.io/badge/docs-passing-brightgreen)](https://shop.bao.name.vn)
[![](https://img.shields.io/badge/style-plastic-green.svg?longCache=true&style=plastic)](https://shop.bao.name.vn)
[![](https://img.shields.io/github/stars/badges/shields.svg?style=social)](https://shop.bao.name.vn)

| Instance name | domain /IP                                                                                                                                   | Infrastructur                           | Description                                | Note                        | status  |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ------------------------------------------ | --------------------------- | ------- |
| SAP           | [6654aaf7-905f-48ea-b013-3811c03fcba8.abap.us10.hana.ondemand.com](https://6654aaf7-905f-48ea-b013-3811c03fcba8.abap.us10.hana.ondemand.com) | BTP Trial                               |                                            | Domain not contain "_-web_" | Online  |
| Oak           | [oak.bao.name.vn](https://oak.bao.name.vn)                                                                                                   | [deno.land](https://deno.land)          | Bypass CORS, Authorization (JWT)           |                             | Online  |
| NextJS        | [shop.bao.name.vn](https://shop.bao.name.vn)                                                                                                 | on premise (nginx)                      | Home page, Product detail.                 |                             | Offline |
| ReactJS       | [shop.bao.name.vn](https://shop.bao.name.vn)                                                                                                 | on premise (nginx)                      | Profile page, order page, login page, etc. |                             | Offline |
| MySQL         | 45.252.250.6                                                                                                                                 | [azdigi.com](https://azdigi.com)        | logger for Oak                             |                             | Online  |
| Angular       | [angular-sapui5.web.app](https://angular-sapui5.web.app)                                                                                     | [firebase](https://firebase.google.com) | beta phase                                 |                             | Online  |

---

| Service name                               | Target      | Description                                                  |
| ------------------------------------------ | ----------- | ------------------------------------------------------------ |
| [cron-job.org](https://cron-job.org)       | oak server  | renew token, monitor, email alert                            |
| [uptimerobot.com](https://uptimerobot.com) | oak, nextJS | monitor, email alert                                         |
| [checklyhq.com](https://checklyhq.com)     | oak, nextJS | monitor, email alert, speed test in many different countries |
| [discord.com](https://discord.com)         | SAP         | new order notifications                                      |

---

![img](https://github.com/Thanh-Bao/smartphone_shop/blob/e2222f3b29a3d8b5890258e8d1ae66154ae70959/design_system.jpg)

---

# SAP

- Account: SAP BTP trial: 18130017@st.hcmuaf.edu.vn
- Package: ZSMARTPHONE_SHOP

| Transport request | Owner        | User UUID                           | Target | Description     |
| ----------------- | ------------ | ----------------------------------- | ------ | --------------- |
| TRLK912520        | CB9980007210 |8593f739-10e6-47e4-a4d1-d3020b21ac88 |        | Smartphone Shop |

To get JWT: <authen_domain>/oauth/token?grant_type=password&username=18130017@st.hcmuaf.edu.vn&password=< password >

# Oak (deno framwork)

```javascript
app.get("/p/:abc/:xyz", function (req, res) {
  res.send("path is " + req.params.abc, req.params.xyz);
}); // ExpressJS controller
```

On Vercel PaaS service, can not get abc, xyz value. But it works at localhost.

# VPS for reactJS & NextJS

- account: bao
- password: Admin123@#AAA

# Link reference:

- Enable JWT SAP RAP BTP: https://www.youtube.com/watch?v=0jKsN2z_0XE
- To use refresh_token: https://help.sap.com/docs/IDENTITY_AUTHENTICATION/6d6d63354d1242d185ab4830fc04feb1/c62c09e058884f6ca49f7158e2b41321.html

# Tutorial

- https://blogs.sap.com/2019/05/09/sap-cloud-platform-backend-service-tutorial-15-security-using-authorization-code-grant/
