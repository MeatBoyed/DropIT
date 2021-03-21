import React from 'react';
import Alert from '../Utils/Alert';

import { ReactComponent as DrownDownIcon } from '../../images/DrownDownIcon.svg';

export const Payment: React.FC = () => {
  return (
    <section id="PaymentSection" style={{ width: '85%' }}>
      <Alert message="Payment section comming soon" returnHome={true} />
      <React.Fragment>
        <div className="returnContainer">
          <DrownDownIcon className="icon" />
          <a className="returnText" href=" ">
            Return to Shipping
          </a>
        </div>
        <button className="continueBtn">Pay Now</button>
      </React.Fragment>
    </section>
  );
};
