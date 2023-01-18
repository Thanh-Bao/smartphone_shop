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

