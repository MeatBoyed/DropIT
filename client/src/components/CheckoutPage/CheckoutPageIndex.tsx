import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

// Lazy Load components
import Alert from '../Utils/Alert';
import { Payment } from './Payment';
import { Information } from './Information';
import { InformationSummary } from './InformationSummary';
import { ShoppingCartSummary } from './ShoppingCartSummary';

import { ReactComponent as DrownDownIcon } from '../../images/DrownDownIcon.svg';
import { ReactComponent as BreadcrumArrow } from '../../images/BreadcrumArrow.svg';
import { ShoppingCartContext } from '../ShoppingCartContext';

const BreadcrumActiveColour = '#1990c6';

export const CheckoutPageIndex: React.FC = () => {
  // breadcrums colours variables in styles
  const [currentState, setCurrentState] = useState<string>('information');
  const { shoppingCartLength } = useContext(ShoppingCartContext);

  return (
    <React.Fragment>
      {shoppingCartLength !== 0 ? (
        <section id="CheckoutSection">
          <ShoppingCartSummary />
          <div id="PagesContainer">
            <h2 className="sectionTitle">Grabbler</h2>
            <div className="breadCrumsContaienr">
              <p className="breadCrum" style={{ color: BreadcrumActiveColour }}>
                Cart
              </p>
              <BreadcrumArrow className="arrow" />
              <p
                className="breadCrum"
                style={{
                  color: currentState === 'information' || currentState === 'informationCheck' ? BreadcrumActiveColour : '',
                }}
              >
                Information
              </p>
              <BreadcrumArrow className="arrow" />
              <p
                className="breadCrum"
                style={{
                  color: currentState === 'informationCheck' || currentState === 'payment' ? BreadcrumActiveColour : '',
                }}
              >
                Shipping
              </p>
              <BreadcrumArrow className="arrow" />
              <p className="breadCrum" style={{ color: currentState === 'payment' ? BreadcrumActiveColour : '' }}>
                Payment
              </p>
            </div>
            {(() => {
              switch (currentState) {
                case 'information':
                  return <Information />;
                case 'informationCheck':
                  return <InformationSummary />;
                case 'payment':
                  return <Payment />;
                default:
                  return <Information />;
              }
            })()}
            <div className="navigation">
              {(() => {
                switch (currentState) {
                  case 'information':
                    return (
                      <React.Fragment>
                        <div className="returnContainer">
                          <DrownDownIcon className="icon" />
                          <Link to="/shoppingCart" className="returnText">
                            Return to Cart
                          </Link>
                        </div>
                        <button className="continueBtn" onClick={() => setCurrentState('informationCheck')}>
                          Continue to Shipping
                        </button>
                      </React.Fragment>
                    );
                  case 'informationCheck':
                    return (
                      <React.Fragment>
                        <div className="returnContainer">
                          <DrownDownIcon className="icon" />
                          <a className="returnText" href=" " onClick={() => setCurrentState('information')}>
                            Return to Information
                          </a>
                        </div>
                        <button className="continueBtn" onClick={() => setCurrentState('payment')}>
                          Continue to Payment
                        </button>
                      </React.Fragment>
                    );
                  case 'payment':
                    return (
                      <React.Fragment>
                        <div className="returnContainer">
                          <DrownDownIcon className="icon" />
                          <a className="returnText" href=" " onClick={() => setCurrentState('informationCheck')}>
                            Return to Shipping
                          </a>
                        </div>
                        <button className="continueBtn">Pay Now</button>
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
