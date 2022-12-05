import React from "react";

const Tareas = ({ resuelto }) => {
  return <p>{resuelto ? "Resuelto ✔️" : "Sin Realizar ❌"}</p>;
};

export default Tareas;
