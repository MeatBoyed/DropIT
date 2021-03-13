import React from 'react';

import Thumbnail from '../../images/CartImage1.png';

import { useFetchCartProductData } from '../Utils/useFetchCartProductData';

interface Props {
  id: string
  title: string
  price: number 
  colour: string
  size: string
  quantity?: number
}

export const ShoppingCartProductCard: React.FC<Props> = ({ id, title, price, colour, size, quantity  }) => {

  const { cartProductData } = useFetchCartProductData(id);

  return (
    <div className="shoppingCartProductCard">
      <div className="informationsContainer">
        <div className="imageContainer">
          <img src={cartProductData.image} alt="" className="thumbnail" />
          <img src="" alt="" className="quantity" />
        </div>
        <div className="infoContainer">
          <p className="title">{title}</p>
          <p className="infoText">{colour} {colour !== '' && size !== '' && '/'} {size}</p>
        </div>
      </div>
      <p className="productTitle">${price}</p>
    </div>
  );
};
