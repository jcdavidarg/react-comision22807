/* const frutas = ["manzana", "banana"]; */

/* module.exports = frutas; */ // = require por defecto para exportar con node

/* const http = require("http"); */
import http from "http";

const port = 3030;

// midlellware esta entre el req y res

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Servidor ok!</h1>");
});

server.listen(port, () => {
  console.log(`Servidor escuchando ${port}`);
});

/* export default frutas; */ // = import, modificando el package.json
