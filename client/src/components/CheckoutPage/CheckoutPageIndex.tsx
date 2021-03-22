import React, { useContext, useState } from 'react';

// Lazy Load components
import Alert from '../Utils/Alert';
import { ReactComponent as DrownDownIcon } from '../../images/DrownDownIcon.svg';
import { ShoppingCartSummary } from './ShoppingCartSummary';

import { ShoppingCartContext } from '../ShoppingCartContext';
import { Breadcrums } from './Breadcrums';
import { PageSwitch } from './PageSwitch';
import { Link } from 'react-router-dom';

export const CheckoutPageIndex: React.FC = () => {
  // breadcrums colours variables in styles
  const [currentState, setCurrentState] = useState<'Information' | 'InformationCheck' | 'Payment'>('Payment');
  const { shoppingCartLength } = useContext(ShoppingCartContext);

  return (
    <React.Fragment>
      {shoppingCartLength !== 0 ? (
        <section id="CheckoutSection">
          <ShoppingCartSummary />
          <div id="PagesContainer">
            <h2 className="sectionTitle">Grabbler</h2>
            <Breadcrums currentState={currentState} />
            <PageSwitch currentState={currentState} />
            <div className="navigation">
              {(() => {
                switch (currentState) {
                  case 'Information':
                    return (
                      <React.Fragment>
                        <div className="returnContainer">
                          <DrownDownIcon className="icon" />
                          <Link to="/shoppingCart" className="returnText">
                            Return to Cart
                          </Link>
                        </div>
                        <button className="continueBtn" onClick={() => setCurrentState('InformationCheck')}>
                          Continue to Shipping
                        </button>
                      </React.Fragment>
                    );
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
