import React from "react";
import "./Navbar.css";

function Navbar() {
  return(
    <div className="navbar-content">
      <div className="icon-content">
        icone
      </div>
      <div className="links-Wrapper">
        <a href="/">Home</a>
        <a href="/">Sobre</a>
        <a href="/">habilidades</a>
        <a href="/">Projetos</a>
        <a href="/"><span>incon </span>Contratar</a>
      </div>
    </div>
  )
}

export default Navbar