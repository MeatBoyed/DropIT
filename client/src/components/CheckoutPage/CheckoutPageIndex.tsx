import React, { useContext, useState } from 'react';

// Lazy Load components
import Alert from '../Utils/Alert';
import { Payment } from './Payment';
import { Information } from './Information';
import { InformationSummary } from './InformationSummary';
import { ShoppingCartSummary } from './ShoppingCartSummary';

import { ShoppingCartContext } from '../ShoppingCartContext';
import { CheckoutContext } from '../Utils/CheckoutContext';
import { Breadcrums } from './Breadcrums';

export const CheckoutPageIndex: React.FC = () => {
  // breadcrums colours variables in styles
  const { shoppingCartLength } = useContext(ShoppingCartContext);

  const { currentState } = useContext(CheckoutContext);

  return (
    <React.Fragment>
      {shoppingCartLength !== 0 ? (
        <section id="CheckoutSection">
          <ShoppingCartSummary />
          <div id="PagesContainer">
            <h2 className="sectionTitle">Grabbler</h2>
            <Breadcrums />
            {(() => {
              switch (currentState) {
                case 'Information':
                  return <Information />;
                case 'InformationCheck':
                  return <InformationSummary />;
                case 'Payment':
                  return <Payment />;
              }
            })()}
          </div>
        </section>
      ) : (
        <Alert message="Your cart is empty, Continue shopping" returnHome={true} />
      )}
    </React.Fragment>
  );
};
