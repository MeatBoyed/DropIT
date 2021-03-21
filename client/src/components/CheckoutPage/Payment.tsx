import React from 'react';
import Alert from '../Utils/Alert';

export const Payment: React.FC = () => {
  return (
    <section id="PaymentSection" style={{ width: '85%' }}>
      <div className="orderSummaryContainer">
        <h1>Here's your order summary</h1>
      </div>
      <div className="PaymentContainer">
        <div className="messageTemplate">
          <h1>You must send this message</h1>
        </div>
        <div className="paymentMethod">
          <h1>Here's what you must do</h1>
        </div>
      </div>
    </section>
  );
};
