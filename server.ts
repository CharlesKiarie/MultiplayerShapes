import express from "express";
import { config } from "dotenv";
import path from "path";

config();
const port = process.env.port ?? 1000;

const app = express();

app.use(express.static(path.join(path.resolve())));

app.get("/", (req, res) => {
  const indexPath = path.resolve("index.html");

  res.sendFile(indexPath);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
