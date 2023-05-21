import { createContext, useState } from "react";

import { Product } from "@/models/Product";

type Item = {
  quantity: number;
  product: Product;
};

export interface CartContextType {
  subTotal: number;
  items: Item[];
  addToCart: (product: Product, quantity: number) => void;
  increase: (product: Product) => void;
  decrease: (product: Product) => void;
  remove: (product: Product) => void;
  clear: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

const CartContextProvider = ({ children }: React.PropsWithChildren) => {
  const [items, setItems] = useState<Item[]>([]);
  const subTotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const addToCart = (product: Product, quantity: number) => {
    const newItems = [...items];
    const foundIndex = newItems.findIndex((item) => item.product.id === product.id);

    if (foundIndex === -1) {
      newItems.push({
        quantity,
        product,
      });
    } else {
      newItems[foundIndex].quantity += quantity;
    }

    setItems(newItems);
  };

  const increase = (product: Product) => {
    const newItems = [...items];
    const foundIndex = newItems.findIndex((item) => item.product.id === product.id);

    if (foundIndex !== -1) {
      newItems[foundIndex].quantity++;
    }

    setItems(newItems);
  };

  const decrease = (product: Product) => {
    const newItems = [...items];
    const foundIndex = newItems.findIndex((item) => item.product.id === product.id);

    if (foundIndex !== -1) {
      if (newItems[foundIndex].quantity > 1) newItems[foundIndex].quantity--;
      else newItems.splice(foundIndex, 1);
    }

    setItems(newItems);
  };

  const remove = (product: Product) => {
    const newItems = [...items];
    const foundIndex = newItems.findIndex((item) => item.product.id === product.id);

    if (foundIndex !== -1) {
      newItems.splice(foundIndex, 1);
    }

    setItems(newItems);
  };

  const clear = () => {
    setItems([]);
  };

  const CartContextValue: CartContextType = {
    subTotal,
    items,
    addToCart,
    increase,
    decrease,
    remove,
    clear,
  };

  return <CartContext.Provider value={CartContextValue}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
