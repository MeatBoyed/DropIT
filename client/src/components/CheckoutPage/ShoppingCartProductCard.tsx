import React from 'react';

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
          <p className="title">{title} x{quantity}</p>
          <p className="infoText">{colour && "Colour:"} {colour} {colour !== '' && size !== '' && '/'} {size && "Size:"} {size.toUpperCase()}</p>
        </div>
      </div>
      <p className="productTitle">${price}</p>
    </div>
  );
};
