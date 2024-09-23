import React from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
};

export default Header;
