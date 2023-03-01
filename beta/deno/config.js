export let access_token = "";

//http Authorization headers type: Basic Auth (username and password encode to base64)
export const authenURL = "https://ac2d1efetrial.authentication.us10.hana.ondemand.com/oauth/token?grant_type=password&username=18130017@st.hcmuaf.edu.vn&password=thanhpao01@@AAA";
export const accountAuthen = {
    //ClientID
    username: "sb-na-d47ab147-3ebd-4748-919f-8b22be025ad4!a128387",
    //Client Serect
    password: "6065f9ec-2ca4-4b68-8a7e-7b097ffe7647$8G2gbEVRrvNMoEHGmOPMW09tuhcEMvfMrasykHEwIVQ="
}

//  Odata URI
export const SAP_Endpoint = "https://6654aaf7-905f-48ea-b013-3811c03fcba8.abap.us10.hana.ondemand.com/sap/opu/odata/sap";

export const convertURL = path =>
    `${SAP_Endpoint + path}?$format=json`

// **********************************************************************************************************************************************
export const setAccess_token = (new_token) => access_token = new_token;

export const HOME_PAGE = JSON.stringify({
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
})


