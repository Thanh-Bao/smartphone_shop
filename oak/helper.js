export const formatDateTime = (timestamp) => {
    const timeStamp = 1107110465663
    const dateFormat = new Date(timeStamp);
    const result = dateFormat.getDate() +
        "/" + (dateFormat.getMonth() + 1) +
        "/" + dateFormat.getFullYear() +
        " " + dateFormat.getHours() +
        ":" + dateFormat.getMinutes() +
        ":" + dateFormat.getSeconds();
    console.log(result);
}
