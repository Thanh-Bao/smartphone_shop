export let access_token = "eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYWMyZDFlZmV0cmlhbC5hdXRoZW50aWNhdGlvbi51czEwLmhhbmEub25kZW1hbmQuY29tL3Rva2VuX2tleXMiLCJraWQiOiJkZWZhdWx0LWp3dC1rZXktLTE5NjkwNjgwODYiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJkOWJlNDJkMzdjZjA0MTQ5ODY0NjA0MTRmZGFmZDU3MyIsImV4dF9hdHRyIjp7ImVuaGFuY2VyIjoiWFNVQUEiLCJzdWJhY2NvdW50aWQiOiI4NTkzZjczOS0xMGU2LTQ3ZTQtYTRkMS1kMzAyMGIyMWFjODgiLCJ6ZG4iOiJhYzJkMWVmZXRyaWFsIn0sInhzLnN5c3RlbS5hdHRyaWJ1dGVzIjp7InhzLnJvbGVjb2xsZWN0aW9ucyI6WyJCdXNpbmVzc19BcHBsaWNhdGlvbl9TdHVkaW9fRGV2ZWxvcGVyIiwiQnVzaW5lc3NfQXBwbGljYXRpb25fU3R1ZGlvX0FkbWluaXN0cmF0b3IiLCJTdWJhY2NvdW50IEFkbWluaXN0cmF0b3IiXX0sImdpdmVuX25hbWUiOiJCYW8iLCJ4cy51c2VyLmF0dHJpYnV0ZXMiOnt9LCJmYW1pbHlfbmFtZSI6IkJhbyIsInN1YiI6IjE5YjhlMDdiLWI4MDEtNDA0ZS1hODc5LWVmNjM4ZDBkODU4NyIsInNjb3BlIjpbIm9wZW5pZCJdLCJjbGllbnRfaWQiOiJzYi1uYS1kNDdhYjE0Ny0zZWJkLTQ3NDgtOTE5Zi04YjIyYmUwMjVhZDQhYTEyODM4NyIsImNpZCI6InNiLW5hLWQ0N2FiMTQ3LTNlYmQtNDc0OC05MTlmLThiMjJiZTAyNWFkNCFhMTI4Mzg3IiwiYXpwIjoic2ItbmEtZDQ3YWIxNDctM2ViZC00NzQ4LTkxOWYtOGIyMmJlMDI1YWQ0IWExMjgzODciLCJncmFudF90eXBlIjoicGFzc3dvcmQiLCJ1c2VyX2lkIjoiMTliOGUwN2ItYjgwMS00MDRlLWE4NzktZWY2MzhkMGQ4NTg3Iiwib3JpZ2luIjoic2FwLmRlZmF1bHQiLCJ1c2VyX25hbWUiOiIxODEzMDAxN0BzdC5oY211YWYuZWR1LnZuIiwiZW1haWwiOiIxODEzMDAxN0BzdC5oY211YWYuZWR1LnZuIiwiYXV0aF90aW1lIjoxNjczODM1MTc2LCJyZXZfc2lnIjoiYTcxY2Q4N2IiLCJpYXQiOjE2NzM4MzUxNzYsImV4cCI6MTY3Mzg3ODM3NiwiaXNzIjoiaHR0cHM6Ly9hYzJkMWVmZXRyaWFsLmF1dGhlbnRpY2F0aW9uLnVzMTAuaGFuYS5vbmRlbWFuZC5jb20vb2F1dGgvdG9rZW4iLCJ6aWQiOiI4NTkzZjczOS0xMGU2LTQ3ZTQtYTRkMS1kMzAyMGIyMWFjODgiLCJhdWQiOlsic2ItbmEtZDQ3YWIxNDctM2ViZC00NzQ4LTkxOWYtOGIyMmJlMDI1YWQ0IWExMjgzODciLCJvcGVuaWQiXX0.M49Zz0J_vBfQvUPl6D-xpn5Z1WWM9IkCirXLZAeWeEiasn7bq8vg4Szosf5BsD6lSz0v1ANIuR3ytbzSGf-M-siwXB_zdES0mR5JBitSiqFn9l-pj5HPPG95T6et5v_NiOr0G4sQOmF5ZcgN_mTrNUHKRy2oNWJogEDGIZohJqXqmMSLrciegO_UgMf8z0vHBmx9GI0p9uKflgEvd-tqqbxxeb_GjByhO1dYSEqPtc2sZlbSycYOJn31JYwQVv3_uyMNW99Y_-fLsb7wksKT11Zbs8oFIUSaJ_rqoE9dcuRurNEiSjUg9yQCUziPDWguYi6K-_QlYZ9XocyULqpGWg";
export let refresh_toke = "f553a1ff861e40e292b63f20d8e0dbc7-r";

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
export const getNewAccessTokenURL = `${authenDomain}/oauth/token?grant_type=refresh_token&refresh_token=${refresh_toke}`;

// 3. Odata 
export const baseURL = (ZBUI, Entity) =>
    `https://6654aaf7-905f-48ea-b013-3811c03fcba8.abap.us10.hana.ondemand.com/sap/opu/odata/sap/${ZBUI}/${Entity}?$format=json`

// **********************************************************************************************************************************************


export const setAccess_token = (new_token) => access_token = new_token;
export const setRefresh_token = (new_token) => refresh_toke = new_token;


// **********************************************************************************************************************************************

export const MySQL_config = {
    hostname: "45.252.250.6",
    username: "elhnhxqj_oak",
    db: "elhnhxqj_oak",
    poolSize: 3, // connection pool limit
    password: "Admin123@#AAA",
}

