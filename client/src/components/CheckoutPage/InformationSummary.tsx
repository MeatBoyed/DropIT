import React from 'react';

import { InformationCard } from '../Utils/InformationCard';

interface Props {}

export const InformationSummary: React.FC<Props> = () => {
  return (
    <section id="InformationSummarySectoin">
      <p className="formTitle">Information Summary</p>
      <div className="shippingSummary">
        <InformationCard cardTitle="Contact" cardText="johndoe@example.com" />
        <InformationCard cardTitle="Ship To" cardText="12 Thomis Morris st, Walivs Bay, P.O BOX 1595" />
      </div>

      <div className="paymentMethodContainer">
        <p className="formTitle">Select Payment Method</p>
        <div className="paymentMethodOptions">
          <div className="paymentMethod ">
            <input type="radio" name="paymentMethod" required id="paymentMethodOption" />
            <p className="cardText">eWallet</p>
          </div>
          <div className="paymentMethod ">
            <input type="radio" name="paymentMethod" required id="paymentMethodOption" />
            <p className="cardText">Blue Wallet</p>
          </div>
          <div className="paymentMethod">
            <input type="radio" name="paymentMethod" required id="paymentMethodOption" />
            <p className="cardText">EFT</p>
          </div>
          <div className="paymentMethod">
            <input type="radio" name="paymentMethod" required id="paymentMethodOption" />
            <p className="cardText">PayToday</p>
          </div>
          <div className="paymentMethod bottom">
            <input type="radio" name="paymentMethod" required id="paymentMethodOption" />
            <p className="cardText">EasyWallet</p>
          </div>
        </div>
      </div>
    </section>
  );
};
