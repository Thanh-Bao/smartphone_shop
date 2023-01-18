[![](https://img.shields.io/appveyor/build/gruntjs/grunt)](https://github.com/Thanh-Bao/FrontEnd-real-estate-news-website)
[![](https://img.shields.io/cirrus/github/flutter/flutter)](https://github.com/Thanh-Bao/FrontEnd-real-estate-news-website)
[![](https://img.shields.io/badge/tests-100%25-brightgreen)](https://github.com/Thanh-Bao/FrontEnd-real-estate-news-website)
[![](https://img.shields.io/badge/docs-passing-brightgreen)](https://github.com/Thanh-Bao/FrontEnd-real-estate-news-website)
[![](https://img.shields.io/badge/style-plastic-green.svg?longCache=true&style=plastic)](https://github.com/Thanh-Bao/FrontEnd-real-estate-news-website)
[![](https://img.shields.io/github/stars/badges/shields.svg?style=social)](https://github.com/Thanh-Bao/FrontEnd-real-estate-news-website)

| Instance name | domain /IP                                                                                                                                   | Infrastructur                    | Description                                | Note                        |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------ | --------------------------- |
| SAP           | [6654aaf7-905f-48ea-b013-3811c03fcba8.abap.us10.hana.ondemand.com](https://6654aaf7-905f-48ea-b013-3811c03fcba8.abap.us10.hana.ondemand.com) | BTP Trial                        |                                            | Domain not contain "_-web_" |
| Oak           | [oak.bao.name.vn](https://oak.bao.name.vn)                                                                                                   | [deno.land](https://deno.land)   | Bypass CORS, Authorization (JWT)           |                             |
| NextJS        | [shop.bao.name.vn](https://shop.bao.name.vn) 52.185.190.227                                                                                  | on premise (nginx)               | Home page, Product detail.                 |                             |
| ReactJS       | [shop.bao.name.vn](https://shop.bao.name.vn) 52.185.190.227                                                                                  | on premise (nginx)               | Profile page, order page, login page, etc. |                             |
| MySQL         | 45.252.250.6                                                                                                                                 | [azdigi.com](https://azdigi.com) | logger for Oak                             |                             |

---

| Service name                       | Target      | Description                       |
| ---------------------------------- | ----------- | --------------------------------- |
| [cron-job.org](cron-job.org)       | oak server  | renew token, monitor, email alert |
| [uptimerobot.com](uptimerobot.com) | oak, nextJS | monitor, discord notify           |
| [discord.com](discord.com)         | SAP         | new order notifications           |

---

# SAP

- Account: SAP BTP trial: 18130017@st.hcmuaf.edu.vn
- Package: ZSMARTPHONE_SHOP

| Transport request | Owner        | Target | Description     |
| ----------------- | ------------ | ------ | --------------- |
| TRLK912520        | CB9980007210 |        | Smartphone Shop |

To get JWT: <authen_domain>/oauth/token?grant_type=password&username=18130017@st.hcmuaf.edu.vn&password=< password >

# VPS for reactJS & NextJS

Ubuntu -> docker -> nginx

- account: bao
- password: Admin123@#AAA

# Link reference:

- Enable JWT SAP RAP BTP: https://www.youtube.com/watch?v=0jKsN2z_0XE
- To use refresh_token: https://help.sap.com/docs/IDENTITY_AUTHENTICATION/6d6d63354d1242d185ab4830fc04feb1/c62c09e058884f6ca49f7158e2b41321.html

# Tutorial

- https://blogs.sap.com/2019/05/09/sap-cloud-platform-backend-service-tutorial-15-security-using-authorization-code-grant/
