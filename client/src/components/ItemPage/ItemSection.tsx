import React, { useState } from 'react';
import { Buttons } from './Buttons';

// Lazy Load selectors
const Selector = React.lazy(() => import('./Selector'));

interface Props {
  title: string;
  price: number;
  colours: string[];
  sizes: string[];
  description: string;
}

export const ItemSection: React.FC<Props> = ({ title, price, colours, sizes, description }) => {
  return (
    <React.Fragment>
      <div className="ItemDetailSection">
        <div className="itemDetailsContainer">
          <p className="itemTitle">{title}</p>
          <p className="itemPrice">${price}</p>
        </div>
        <div className="itemSelectorsContainer">
          {colours !== undefined ? <Selector options={colours} /> : null}
          {colours !== undefined ? <Selector options={sizes} /> : null}
        </div>
        {/* After adding to cart, change Add to cart to View cart and show Continue shopping routing to previous page */}
        <Buttons />
        <div className="itemDetail">
          <p>{description}</p>
        </div>
      </div>
    </React.Fragment>
  );
};
