import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../ShoppingCartContext';

// Temp Cart Image loader image
import CartImageLoader from '../../images/CartImageLoader.png';
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

interface ProductDataModel {
  image: string;
  frequency: number;
}

export const CartItem: React.FC<props> = ({ id, index, url, title, price, colour, size, onChange }) => {
  const { RemoveFromShoppingCart } = useContext(ShoppingCartContext);

  const [frequencyList, setFrequencyList] = useState<string[]>(['1']);
  const [frequency, setFrequency] = useState<number>(parseInt(frequencyList[0]));
  const [localTotal, setLocalTotal] = useState<number>(price);
  const { loading, error, cartProductData } = useFetchCartProductData(id);
  console.log(cartProductData);

  // useEffect(() => {
  //   setLocalTotal(price * frequency);
  // }, [frequency, price]);

  // useEffect(() => {
  //   onChange(localTotal, index);
  // }, [localTotal, index, onChange]);

  // // Inital single time events
  // useEffect(() => {
  //   let temp: string[] = [];
  //   for (let i = 1; i <= cartProductData.frequency; i++) {
  //     temp.push(`${i}`);
  //   }
  //   setFrequencyList(temp);
  // }, [cartProductData.frequency]);

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
          <Selector title={''} options={frequencyList} onChange={(newFre) => setFrequency(parseInt(newFre))} />
        </div>
        <p className="totalPrice">${localTotal}</p>
      </div>
    </div>
  );
};
