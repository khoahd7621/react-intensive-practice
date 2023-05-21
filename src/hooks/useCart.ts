import { useContext } from "react";

import { CartContext, CartContextType } from "@/context/CartContextProvider";

const useCart = (): CartContextType => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider");
  }

  return context;
};

export default useCart;
