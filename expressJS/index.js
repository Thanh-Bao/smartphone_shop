import express from "express";
import cors from 'cors';

import { access_token, SAP_Endpoint, convertURL } from './config.js';
import { fetchNewToken, getJWTpayload } from './helper.js';

const app = express();
app.listen(80);
app.use(cors());


app.all('*', async (req, res) => {
    const pathname = req.path;
    switch (pathname) {
        case "/renew_access_token":
            // res.send("Hello");
            try {
                const _access_token = await fetchNewToken();
                res.send(JSON.stringify({ _access_token, __________the_token_after_decode__________: getJWTpayload(_access_token) }));
            } catch (error) {
                // console.log(error.message);
                // res.send(JSON.stringify(error.message)).status == 401;
            }
        case "/":
        // res.send(JSON.stringify({
        //     ____________________________________SAP_Trial_Entity_List____________________________________: [{
        //         Service_binding: "ZBUI_PHONE_INFO3",
        //         Entity: ["ZC_PHONE_INFO3"],
        //         Path: "/ZBUI_PHONE_INFO3/ZC_PHONE_INFO3"
        //     }],
        //     ____________________________________site_map____________________________________: {
        //         renew_access_token: "/renew_access_token",
        //     },
        //     ____________________________________current_access_token____________________________________: {
        //         access_token: access_token
        //         , Expired_time: getJWTpayload(access_token).exp
        //     }
        // }));
        default:
        // try {
        //     const SAPresponse = await fetch(convertURL(pathname), {
        //         method: req.method,
        //         headers: { "Authorization": `Bearer ${access_token}` }
        //     });
        //     const json = await SAPresponse.json();
        //     const result = JSON.stringify(json).replaceAll(SAP_Endpoint, req.hostname);
        //     res.send(result);
        // } catch (error) {
        //     res.send(JSON.stringify(error.message)).status == 500;
        // }
    }
})