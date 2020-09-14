import React from "react";
import ReactDOM from "react-dom";
import "core-js/stable";
import "regenerator-runtime/runtime";
import HolaMundo from "./components/HolaMundo/HolaMundo";

ReactDOM.render(
  <HolaMundo msg="Hola Mundo, Aqui Estoy!!" />,
  document.getElementById("root")
);
