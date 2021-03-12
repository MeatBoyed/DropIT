import React from 'react';

import { Information } from './Information';
import { ShoppingCartSummary } from './ShoppingCartSummary';

export const CheckoutPageIndex: React.FC = () => {
  // breadcrums colours variables in styles
  return (
    <section id="CheckoutSection">
      <ShoppingCartSummary />
      <div id="PagesContainer">
        <h2 className="sectionTitle">Grabbler</h2>
        <div className="breadCrumsContaienr">
          <p className="breadCrum">{'Cart >'}</p>
          <p className="breadCrum">{'Information >'}</p>
          <p className="breadCrum">{'Shipping >'}</p>
          <p className="breadCrum">{'Payment'}</p>
        </div>
        <Information />
      </div>
    </section>
  );
};
