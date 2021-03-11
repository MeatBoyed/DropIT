import React from 'react';

import Thumbnail from '../../images/CartImage1.png';

interface Props {}

export const ShoppingCartProductCard: React.FC<Props> = () => {
  return (
    <div className="shoppingCartProductCard">
      <div className="informationsContainer">
        <div className="imageContainer">
          <img src={Thumbnail} alt="" className="thumbnail" />
          <img src="" alt="" className="quantity" />
        </div>
        <div className="infoContainer">
          <p className="title">Vintage BAT Logo Seal Crewneck (Red Logo)</p>
          <p className="infoText">Colour: Black / Size: XXL</p>
        </div>
      </div>
      <p className="productTitle">$300</p>
    </div>
  );
};
