import { createContext, useState, useEffect } from "react";
import axios from "axios";
//create...
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartd, setCartd] = useState(false);
  const MyCartData = () => {
    axios
      .get("https://flowers-wdds.onrender.com/cartItems")
      .then((res) => {
        // console.log(res);
        setCartd(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    MyCartData();
  }, [cartd]);

  // let cost = cartd.reduce((acc, el) => acc + +el.price, 0);
  // console.log("my cost is :-", cost);

  let totalcart = cartd.length;
  // console.log("cdata", totalcart);
  return (
    <CartContext.Provider value={{ cartd, totalcart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
