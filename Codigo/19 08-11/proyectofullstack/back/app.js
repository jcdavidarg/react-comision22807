import express from "express";
import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  res.send("Hola desde el servidor!");
});

const port = 8000;

app.listen(port, () => {
  console.log(`Servidor ok en http://localhost:${port}`);
});
