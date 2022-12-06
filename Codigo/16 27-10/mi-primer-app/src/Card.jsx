import React from "react";

const Card = ({ nombre, fechaNacimiento, clubes, cromo }) => {
  return (
    <div>
      <h1>{nombre}</h1>
      <p>{fechaNacimiento}</p>
      <p>{clubes}</p>
      <small
        style={
          cromo
            ? { backgroundColor: "blue", color: "white" }
            : { backgroundColor: "white" }
        }
      >
        {cromo ? "esta es cromo 🌟" : "no es cromo 🤨"}
      </small>
    </div>
  );
};

export default Card;
