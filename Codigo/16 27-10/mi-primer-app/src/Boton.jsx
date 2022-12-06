import React from "react";

function Boton({ numero, titulo = "default" }) {
  return (
    <button onClick={() => console.log("Hiciste click")}>
      {numero} - {titulo}
    </button>
  );
}

export default Boton;
