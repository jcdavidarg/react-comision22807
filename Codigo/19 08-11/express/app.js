/* const express = require("express"); */
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hola desde el servidor!");
});

app.get("/contactos", (req, res) => {
  res.send("aca va la pagina de contactos");
});

app.get("/registro", (req, res) => {
  res.send("aca va la pagina de registro");
});

app.listen(port, () => {
  console.log(`Servidor ok en http://localhost:${port}`);
});
