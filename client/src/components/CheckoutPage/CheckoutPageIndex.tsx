import React, { useContext, useState } from 'react';

// Lazy Load components
import Alert from '../Utils/Alert';
import { ReactComponent as DrownDownIcon } from '../../images/DrownDownIcon.svg';
import { ShoppingCartSummary } from './ShoppingCartSummary';

import { ShoppingCartContext } from '../ShoppingCartContext';
import { Breadcrums } from './Breadcrums';
import { Link } from 'react-router-dom';
import { Information } from './Information';
import { InformationSummary } from './InformationSummary';
import { Payment } from './Payment';

export const CheckoutPageIndex: React.FC = () => {
  // breadcrums colours variables in styles
  const [currentState, setCurrentState] = useState<'Information' | 'InformationCheck' | 'Payment'>('Information');
  const { shoppingCartLength } = useContext(ShoppingCartContext);

  const onChangeHandler = (state: 'Information' | 'InformationCheck' | 'Payment') => {
    console.log(state);
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
            {currentState === 'InformationCheck' && <InformationSummary />}
            {currentState === 'Payment' && <Payment />}
            <div className="navigation">
              {(() => {
                switch (currentState) {
                  case 'InformationCheck':
                    return (
                      <React.Fragment>
                        <div className="returnContainer">
                          <DrownDownIcon className="icon" />
                          <p className="returnText" onClick={() => setCurrentState('Information')}>
                            Return to Information
                          </p>
                        </div>
                        <button className="continueBtn" onClick={() => setCurrentState('Payment')}>
                          Continue to Payment
                        </button>
                      </React.Fragment>
                    );
                  case 'Payment':
                    return (
                      <React.Fragment>
                        <div className="returnContainer">
                          <DrownDownIcon className="icon" />
                          <p className="returnText" onClick={() => setCurrentState('InformationCheck')}>
                            Return to Shipping
                          </p>
                        </div>
                        <button className="continueBtn">Complete Order</button>
                      </React.Fragment>
                    );
                }
              })()}
            </div>
          </div>
        </section>
      ) : (
        <Alert message="Your cart is empty, Continue shopping" returnHome={true} />
      )}
    </React.Fragment>
  );
};
