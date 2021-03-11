import React from 'react';
import { ShoppingCartProductCard } from './ShoppingCartProductCard';

interface Props {}

export const ShoppingCartSummary: React.FC<Props> = () => {
  return (
    <div id="ShoppingCartSummary">
      <div className="productsContainer">
        <ShoppingCartProductCard />
        <ShoppingCartProductCard />
        <ShoppingCartProductCard />
        <ShoppingCartProductCard />
      </div>
      <div className="summaryContainer">
        <div className="subCalculationContainer">
          <div className="subContainer">
            <p className="subTitle">Subtotal</p>
            <p className="subPrice">$2000</p>
          </div>
          <div className="subContainer">
            <p className="subTitle">Shipping</p>
            <p className="subPrice">$513</p>
          </div>
        </div>
        <div className="totalContainer">
          <p className="totalTitle">Total</p>
          <p className="totalPrice">$22555</p>
        </div>
      </div>
    </div>
  );
};
