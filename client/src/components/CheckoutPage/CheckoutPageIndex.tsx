import React, { useContext, useState } from 'react';

// Lazy Load components
import Alert from '../Utils/Alert';
import { ShoppingCartSummary } from './ShoppingCartSummary';

import { ShoppingCartContext } from '../ShoppingCartContext';
import { Breadcrums } from './Breadcrums';
import { Information } from './Information';
import { InformationSummary } from './InformationSummary';
import { Payment } from './Payment';

export const CheckoutPageIndex: React.FC = () => {
  // breadcrums colours variables in styles
  const [currentState, setCurrentState] = useState<'Information' | 'InformationCheck' | 'Payment'>('Information');
  const { shoppingCartLength } = useContext(ShoppingCartContext);

  const onChangeHandler = (state: 'Information' | 'InformationCheck' | 'Payment') => {
    setCurrentState(state);
  };

  return (
    <React.Fragment>
      {shoppingCartLength !== 0 ? (
        <section id="CheckoutSection">
          <ShoppingCartSummary />
          <div id="PagesContainer">
            <h2 className="sectionTitle">Grabbler</h2>
            <Breadcrums currentState={currentState} />
            {currentState === 'Information' && <Information onChange={onChangeHandler} />}
            {currentState === 'InformationCheck' && <InformationSummary onChange={onChangeHandler} />}
            {currentState === 'Payment' && <Payment onChange={onChangeHandler} />}
          </div>
        </section>
      ) : (
        <Alert message="Your cart is empty, Continue shopping" returnHome={true} />
      )}
    </React.Fragment>
  );
};
