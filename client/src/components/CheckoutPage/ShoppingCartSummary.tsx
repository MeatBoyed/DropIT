import React, { useState, useEffect, useContext } from 'react';
import { ShoppingCartProductCard } from './ShoppingCartProductCard';

import { ShoppingCartContext, ShoppingCartItem } from '../ShoppingCartContext';

import { ReactComponent as ShoppingCartIcon } from '../../images/CheckoutCartIcon.svg';
import { ReactComponent as DrownDownIcon } from '../../images/DrownDownIcon.svg';

interface Props {}

export const ShoppingCartSummary: React.FC<Props> = () => {
  const [activateDropDown, setActivateDropDown] = useState<boolean>(true);
  const { shoppingCart, GetShoppingCartTotal } = useContext(ShoppingCartContext);

  // TODO make this more constant and not done inside Checkout
  const [subTotal, setSubTotal] = useState<number>(0);
  const [shippingFee, setShippingFee] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    setSubTotal(GetShoppingCartTotal());
  }, [shoppingCart]);

  useEffect(() => {
    setShippingFee(subTotal * 0.05);
    setTotalPrice(subTotal + shippingFee);
  }, [subTotal, shippingFee]);

  return (
    <React.Fragment>
      <div className="mobileDropDown" onClick={() => setActivateDropDown(!activateDropDown)}>
        <div className="main">
          <ShoppingCartIcon />
          <p className="mobileTitle">{activateDropDown ? 'Hide' : 'Show'} order summary</p>
          <DrownDownIcon className="dropDown" style={{ transform: activateDropDown ? 'rotate(180deg)' : 'none' }} />
        </div>
        <p className="mobileTotalPrice">$2255</p>
      </div>
      {activateDropDown && (
        <div id="ShoppingCartSummary">
          <div className="productsContainer">
            {shoppingCart.map((item: ShoppingCartItem, index: number) => (
              <ShoppingCartProductCard
                id={item.id}
                key={index}
                title={item.title}
                price={item.price}
                colour={item.colour}
                size={item.size}
              />
            ))}
          </div>
          <div className="summaryContainer">
            <div className="subCalculationContainer">
              <div className="subContainer">
                <p className="subTitle">Subtotal</p>
                <p className="subPrice">${subTotal}</p>
              </div>
              <div className="subContainer">
                <p className="subTitle">Shipping</p>
                <p className="subPrice">${shippingFee}</p>
              </div>
            </div>
            <div className="totalContainer">
              <p className="totalTitle">Total</p>
              <p className="totalPrice">${totalPrice}</p>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
