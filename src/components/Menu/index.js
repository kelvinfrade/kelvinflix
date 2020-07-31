import React from "react";
import logo from "../../assets/Img/logo.png";
import "./menu.css";
import Button from "../Button";
// import ButtonLink from "./components/ButtonLink";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="Logo KelvinFlix" />
      </a>
      <Button as="a" className="ButtonLink" href="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
