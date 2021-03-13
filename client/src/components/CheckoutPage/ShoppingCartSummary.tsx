import React, { useState } from 'react';
import { ShoppingCartProductCard } from './ShoppingCartProductCard';

import { ReactComponent as ShoppingCartIcon } from '../../images/shoppingCartIcon.svg';

interface Props {}

export const ShoppingCartSummary: React.FC<Props> = () => {
  const [activateDropDown, setActivateDropDown] = useState<boolean>(true);

  return (
    <React.Fragment>
      <div className="mobileDropDown" onClick={() => setActivateDropDown(!activateDropDown)}>
        <div className="main">
          <ShoppingCartIcon />
          <p className="mobileTitle">Show order summary</p>
          <p className="dropDown">D</p>
        </div>
        <p className="mobileTotalPrice">$2255</p>
      </div>
      {activateDropDown && (
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
      )}
    </React.Fragment>
  );
};
