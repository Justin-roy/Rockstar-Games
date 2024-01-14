import React from "react";
import { HashLink } from "react-router-hash-link";
import "../styles/header.scss";
function Header() {
  return (
    <nav>
      <h1>RockStar Games</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <HashLink to={"/#sponsers"}>Sponsers</HashLink>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#contact"}>Contact</HashLink>
      </main>
    </nav>
  );
}

export default Header;
