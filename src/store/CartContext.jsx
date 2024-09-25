import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const exestingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];
    if (exestingCartItemIndex > -1) {
      const existingItem = state.items[exestingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[exestingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.type, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const exestingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const excestingCartitems = state.items[exestingCartItemIndex];

    const updatedItems = [...state.id];
    if (excestingCartitems.quantity === 1) {
      updatedItems.slice(exestingCartItemIndex, 1);
    } else {
      const updateItem = {
        ...excestingCartitems,
        quantity: excestingCartitems.quantity - 1,
      };
      updatedItems[exestingCartItemIndex] = updateItem;
    }
    return { ...state, items: updatedItems };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }
  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
