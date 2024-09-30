import React, { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import userProgressContext from "../store/userProgressContext";
const Header = () => {
  const cartCtx = useContext(CartContext);
  const userPregressCtx = useContext(userProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItmes, item) => {
    return totalNumberOfItmes + item.quantity;
  }, 0);

  function handleShowCart() {
    userPregressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
