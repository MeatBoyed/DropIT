import React, { useState, useEffect, createContext } from 'react';

export interface ShoppingCartItem {
  id: string;
  url: string;
  title: string;
  price: number;
  colour: string;
  size: string;
  quantity: number;
}

export const ShoppingCartContext = createContext<ShoppingCartItem[] | any>([]);

export const ShoppingCartContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItem[]>([]);
  const [shoppingCartLength, setShoppingCartLength] = useState<number>(0);

  useEffect(() => {
    setShoppingCartLength(shoppingCart.length);
  }, [shoppingCart]);

  // Check Local Storage if Shopping Cart exists and populating the shopping cart state
  useEffect(() => {
    let existing = localStorage.getItem('67414141414142674c552d7758465441365559424545704a');

    if (existing != null) {
      setShoppingCart(JSON.parse(existing));
      console.log('Existing and added');
    }
  }, []);

  const AddToShoppingCart = (item: ShoppingCartItem) => {
    // Push to current state array
    const newCart = shoppingCart.concat(item);
    setShoppingCart(newCart);

    // update local storage
    localStorage.setItem('67414141414142674c552d7758465441365559424545704a', JSON.stringify(newCart));

    console.log('added to cart!');
  };

  const RemoveFromShoppingCart = (position: number) => {
    // Removing item from cart and creating a new Cart
    shoppingCart.splice(position, 1);
    const newCart = shoppingCart;
    setShoppingCart(newCart);

    console.log(shoppingCart);

    // Updating localStorage
    localStorage.setItem('67414141414142674c552d7758465441365559424545704a', JSON.stringify(newCart));
    console.log('Updated remove');

    window.location.reload();
  };

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, AddToShoppingCart, RemoveFromShoppingCart, shoppingCartLength }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
