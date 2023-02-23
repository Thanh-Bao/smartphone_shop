export let access_token = "";

// 1.http Authorization headers type: Basic Auth (username and password encode to base64)
export const authenURL = "https://ac2d1efetrial.authentication.us10.hana.ondemand.com/oauth/token?grant_type=password&username=18130017@st.hcmuaf.edu.vn&password=thanhpao01@@AAA";
export const accountAuthen = {
    //ClientID
    username: "sb-na-d47ab147-3ebd-4748-919f-8b22be025ad4!a128387",
    //Client Serect
    password: "6065f9ec-2ca4-4b68-8a7e-7b097ffe7647$8G2gbEVRrvNMoEHGmOPMW09tuhcEMvfMrasykHEwIVQ="
}

// 2. Odata 
export const SAP_Endpoint = "https://6654aaf7-905f-48ea-b013-3811c03fcba8.abap.us10.hana.ondemand.com/sap/opu/odata/sap";

export const convertURL = path =>
    `${SAP_Endpoint + path}?$format=json`

// **********************************************************************************************************************************************
export const setAccess_token = (new_token) => access_token = new_token;


