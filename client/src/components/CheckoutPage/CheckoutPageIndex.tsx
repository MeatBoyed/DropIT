import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="navigation">
          <div className="returnContainer">
            <p className="icon">{'<'}</p>
            <Link to="/shoppingCart" className="returnText">
              Return to Cart
            </Link>
          </div>
          <button className="continueBtn">Continue to Shipping</button>
        </div>
      </div>
    </section>
  );
};
