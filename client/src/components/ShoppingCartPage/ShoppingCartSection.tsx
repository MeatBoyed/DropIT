import React, { useContext } from 'react';
import { ShoppingCartContext, ShoppingCartItem } from '../ShoppingCartContext';

import { CartItem } from './CartItem';

interface Props {}

export const ShoppingCartSection: React.FC<Props> = () => {
  const { shoppingCart } = useContext(ShoppingCartContext);

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
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className="cartInfo">
        <p className="subtotal">Subtotal $100</p>
        <p className="italics">Shipping & Taxes calculated on next page</p>
        <div className="buttonsContainer">
          <button>Continue Shipping</button>
          <button className="checkoutBtn">Check Out</button>
        </div>
      </div>
    </section>
  );
};
