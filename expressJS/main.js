import express from "npm:express@4.18.2";

const app = express();

app.get("/:a/:b", (req, res) => {
  res.send(req.params);
});

app.listen(8000);