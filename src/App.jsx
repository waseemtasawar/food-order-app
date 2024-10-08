import Cart from "./component/Cart.jsx";
import Checkout from "./component/Checkout.jsx";
import Header from "./component/Header";
import Meals from "./component/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/userProgressContext.jsx";
function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
