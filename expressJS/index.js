import express from "express";
import cors from 'cors';

const app = express();
app.listen(80);
app.use(cors);

app.get('/', (req, res) => {
    res.send("Hello");
})