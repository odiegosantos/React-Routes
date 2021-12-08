import React from "react";
import { NavLink } from "react-router-dom";

let linkCorrente = {
  color: "#0089FF",
};
const Navegacao = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeStyle={linkCorrente} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={linkCorrente} to="/produtos">Produtos</NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={linkCorrente} to="/empresa">Nossa Empresa</NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={linkCorrente} to="/sobre">Sobre</NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={linkCorrente} to="/contato">Contato</NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={linkCorrente} to="/notfound">Not Found</NavLink>
      </li>
    </ul>
  );
};

export default Navegacao;