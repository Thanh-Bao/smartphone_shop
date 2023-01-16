export let access_token = "";
export let refresh_token = "f553a1ff861e40e292b63f20d8e0dbc7-r";

// 1.http Authorization headers type: Basic Auth (username and password encode to base64)
export const authenDomain = "https://ac2d1efetrial.authentication.us10.hana.ondemand.com";
export const authenURL = `${authenDomain}/oauth/token?grant_type=password&username=18130017@st.hcmuaf.edu.vn&password=thanhpao01@@AAA`;
export const accountAuthen = {
    //ClientID
    username: "sb-na-d47ab147-3ebd-4748-919f-8b22be025ad4!a128387",
    //Client Serect
    password: "6065f9ec-2ca4-4b68-8a7e-7b097ffe7647$8G2gbEVRrvNMoEHGmOPMW09tuhcEMvfMrasykHEwIVQ="
}

// 2.
export const getNewAccessTokenURL = `${authenDomain}/oauth/token?grant_type=refresh_token&refresh_token=${refresh_token}`;

// 3. Odata 
export const baseURL = (ZBUI, Entity) =>
    `https://6654aaf7-905f-48ea-b013-3811c03fcba8.abap.us10.hana.ondemand.com/sap/opu/odata/sap/${ZBUI}/${Entity}?$format=json`

// **********************************************************************************************************************************************


export const setAccess_token = (new_token) => access_token = new_token;
export const setRefresh_token = (new_token) => refresh_token = new_token;


// **********************************************************************************************************************************************

export const MySQL_config = {
    hostname: "45.252.250.6",
    username: "elhnhxqj_oak",
    db: "elhnhxqj_oak",
    poolSize: 3, // connection pool limit
    password: "Admin123@#AAA",
}

