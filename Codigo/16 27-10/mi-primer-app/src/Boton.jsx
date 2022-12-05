import React from "react";

function Boton({ numero, titulo = "default" }) {
  return (
    <button>
      {numero} - {titulo}
    </button>
  );
}

export default Boton;
