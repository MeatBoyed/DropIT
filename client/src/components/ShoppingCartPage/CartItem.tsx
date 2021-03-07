import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../ShoppingCartContext';

// Temp Cart Image loader image
import Selector from '../ItemPage/Selector';
import { useFetchCartProductData } from '../Utils/useFetchCartProductData';

interface props {
  index: number;
  id: string;
  url: string;
  title: string;
  price: number;
  colour: string;
  size: string;
  onChange: (localTotal: number, index: number) => void;
}

export const CartItem: React.FC<props> = ({ id, index, url, title, price, colour, size, onChange }) => {
  const { RemoveFromShoppingCart } = useContext(ShoppingCartContext);

  const { loading, error, cartProductData } = useFetchCartProductData(id);
  const [frequency, setFrequency] = useState<number>(parseInt(cartProductData.frequencyList[0]));
  const [localTotal, setLocalTotal] = useState<number>(price);

  useEffect(() => {
    setLocalTotal(price * frequency);
  }, [frequency, price]);

  useEffect(() => {
    onChange(localTotal, index);
  }, [localTotal, index, onChange]);

  return (
    <div className="CartItem">
      <div className="cartItemDetails">
        <img src={cartProductData?.image} alt="" className="thumbnail" />
        <div className="cartItemInfo">
          <Link to={url}>
            <p className="itemTitle">{title}</p>
          </Link>
          <p className="info">
            {colour} {colour !== '' && size !== '' && '/'} {size}
          </p>
          <p onClick={() => RemoveFromShoppingCart(index)} className="removeBtn">
            Remove
          </p>
        </div>
      </div>
      <div className="mobileFields">
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <div className="otherCartItemDetails">
        <p className="cartItemPrice">${price}</p>
        <div className="cartItemPropContainer">
          <Selector
            title={''}
            options={cartProductData.frequencyList}
            onChange={(newFre) => setFrequency(parseInt(newFre))}
          />
        </div>
        <p className="totalPrice">${localTotal}</p>
      </div>
    </div>
  );
};
