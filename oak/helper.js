import { access_token, accountAuthen, authenURL, baseURL, setAccess_token, MySQL_config } from './config.js';
import { encode } from "https://deno.land/std/encoding/base64.ts"


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


export const fetchNewToken = async () => {
    const basic_auth = encode(`${accountAuthen.username}:${accountAuthen.password}`);
    const SAPresponse = await fetch(authenURL, {
        headers: { "Authorization": `Basic ${basic_auth}` }
    });
    // 1. get new token from SAP server
    const json = await SAPresponse.json();
    // 2. set new token on this Oak server
    setAccess_token(json.access_token);
    return json;
}





