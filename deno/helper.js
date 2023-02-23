import { accountAuthen, authenURL, setAccess_token } from './config.js';
import { encode, decode } from "https://deno.land/std/encoding/base64.ts"


export const formatDateTime = (timestamp) => {
    const dateFormat = new Date(timestamp * 1000);
    const result = dateFormat.getDate() +
        "/" + (dateFormat.getMonth() + 1) +
        "/" + dateFormat.getFullYear() +
        " " + dateFormat.getHours() +
        "h:" + dateFormat.getMinutes() +
        "':" + dateFormat.getSeconds(); +
            "s"
    return result;
}

export const getJWTpayload = token => {
    const GMT_7 = 25200;
    const JWT = token.split(".");
    const JWT_payload = JSON.parse(new TextDecoder().decode(decode(JWT[1])));
    JWT_payload.exp = formatDateTime(JWT_payload.exp + GMT_7);
    return JWT_payload;
}


export const fetchNewToken = async () => {
    const basic_auth = encode(`${accountAuthen.username}:${accountAuthen.password}`);
    const SAPresponse = await fetch(authenURL, {
        headers: { "Authorization": `Basic ${basic_auth}` }
    });
    // 1. get new token from SAP server
    const json = await SAPresponse.json();
    // 2. set new token on this Oak server
    const access_token = json.access_token;
    setAccess_token(access_token);
    return access_token;
}





