| Instance name | domain                                                                                                                                       | Infrastructur                  |                                            | Note                        |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------------------------------------ | --------------------------- |
| SAP           | [6654aaf7-905f-48ea-b013-3811c03fcba8.abap.us10.hana.ondemand.com](https://6654aaf7-905f-48ea-b013-3811c03fcba8.abap.us10.hana.ondemand.com) | BTP Trial                      |                                            | Domain not contain "_-web_" |
| Oak           | [oak.bao.name.vn](https://oak.bao.name.vn)                                                                                                   | [deno.land](https://deno.land) | Bypass CORS, Authorization (JWT)           |                             |
| NextJS        | [shop.bao.name.vn](https://shop.bao.name.vn)                                                                                                 | on premise (nginx)             | Home page, Product detail.                 |                             |
| ReactJS       | [shop.bao.name.vn](https://shop.bao.name.vn)                                                                                                 | on premise (nginx)             | Profile page, order page, login page, etc. |                             |

---

# SAP

Account: SAP BTP trial: 18130017@st.hcmuaf.edu.vn

| Transport request | Owner        | Target | Description     |
| ----------------- | ------------ | ------ | --------------- |
| TRLK912520        | CB9980007210 |        | Smartphone Shop |

To get JWT: <authen_domain>/oauth/token?grant_type=password&username=18130017@st.hcmuaf.edu.vn&password=< password >

# Link reference:

- Enable JWT SAP RAP BTP: https://www.youtube.com/watch?v=0jKsN2z_0XE
- To use refresh_token: https://help.sap.com/docs/IDENTITY_AUTHENTICATION/6d6d63354d1242d185ab4830fc04feb1/c62c09e058884f6ca49f7158e2b41321.html
- Deploy expressJS on Vercel: https://www.youtube.com/watch?v=OoI87qhiFlQ

# Tutorial

- https://blogs.sap.com/2019/05/09/sap-cloud-platform-backend-service-tutorial-15-security-using-authorization-code-grant/
