import React, { useContext } from "react";
import Modal from "./UI/Modal";
import currencyFormater from "../utils/formatting";
import CartContext from "../store/CartContext";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/userProgressContext";

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }
  return (
    <Modal open={userProgressCtx.progress === "checkout"}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormater.format(cartTotal)}</p>

        <Input label="Full Name" type="text " id="full-name" />
        <Input label="E-Mail Address" type="email " id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions"></p>
        <Button type="button" onClick={handleClose} textOnly>
          Close
        </Button>
        <Button>Submit Order</Button>
      </form>
    </Modal>
  );
};

export default Checkout;
