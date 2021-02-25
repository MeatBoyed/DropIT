import React, { useContext, useEffect, useState } from 'react';
import { ShoppingCartContext, ShoppingCartItem } from '../ShoppingCartContext';

import { CartItem } from './CartItem';

export const ShoppingCartPage: React.FC = () => {
  const { shoppingCart, GetShoppingCartTotal } = useContext(ShoppingCartContext);
  const [subtotal, setSubtotal] = useState<number>(GetShoppingCartTotal());
  const [total, setTotal] = useState<number[]>([0]);

  const HandleSubtotal = (newPrice: number, index: number) => {
    let tempTotal = total;
    tempTotal[index] = newPrice;
    let pirceTotal = tempTotal.reduce((a: number, b: number) => a + b, 0);
    setTotal(tempTotal);
    setSubtotal(pirceTotal);
  };

  return (
    <section id="ShoppingCartSection">
      <div className="fieldTitles">
        <div className="productField">Product</div>
        <div className="otherFields">
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
      </div>
      <div className="shoppingCartItemsContainer">
        {shoppingCart.map((item: ShoppingCartItem, index: number) => (
          <CartItem
            key={index}
            index={index}
            id={item.id}
            url={item.url}
            title={item.title}
            price={item.price}
            colour={item.colour}
            size={item.size}
            onChange={HandleSubtotal}
          />
        ))}
      </div>
      <div className="cartInfo">
        <p className="subtotal">Subtotal ${subtotal}</p>
        <p className="italics">Shipping & Taxes calculated on next page</p>
        <div className="buttonsContainer">
          <button>Continue Shipping</button>
          <button className="checkoutBtn">Check Out</button>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCartPage;
