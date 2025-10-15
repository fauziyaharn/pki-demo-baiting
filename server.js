import express from "express";
import fs from "fs";
import path from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post("/submit", (req, res) => {
  const email = req.body.email;
  if (email) {
    fs.appendFileSync("emails.txt", `${email}\n`);
    res.send("Email berhasil disimpan!");
  } else {
    res.status(400).send("Email tidak ditemukan!");
  }
});

app.listen(3000, () => console.log("Server jalan di http://localhost:3000"));
