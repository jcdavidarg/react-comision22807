import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Boton from "./Boton";
import Tareas from "./Tareas";
import Card from "./Card";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Card
      nombre="Lionel Messi"
      fechaNacimiento={1987}
      clubes={["barcelona, psg"]}
      cromo={true}
    />
    <Card
      nombre="Killiam Mbapee"
      fechaNacimiento={1998}
      clubes={["monaco, psg"]}
      cromo={false}
    />
    <Tareas resuelto={false} />
    <Boton numero={1} titulo="Rojo" />
    <Boton numero={2} titulo="Verde" />
    <Boton numero={3} titulo="Azul" />
    <Boton numero={4} titulo="Amarillo" />
    <Boton numero={5} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
