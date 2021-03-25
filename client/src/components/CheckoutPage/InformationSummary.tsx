import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { ReactComponent as DrownDownIcon } from '../../images/DrownDownIcon.svg';

import { InformationCard } from '../Utils/InformationCard';
import { useCheckout } from '../Utils/useCheckout';

interface Props {
  onChange: (state: 'Information' | 'InformationCheck' | 'Payment') => void;
}

interface formData {
  paymentMethod: 'eWallet' | 'blueWallet' | 'eft' | 'payToday' | 'easyWallet';
}

export const InformationSummary: React.FC<Props> = ({ onChange }) => {
  const {} = useCheckout();
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data: formData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              <input
                type="radio"
                name="paymentMethod"
                value="eWallet"
                className="paymentMethodOption"
                ref={register}
                id="eWallet"
              />
              <p className="cardText">eWallet</p>
            </div>
            <div className="paymentMethod ">
              <input
                type="radio"
                name="paymentMethod"
                value="blueWallet"
                className="paymentMethodOption"
                ref={register}
                id="blueWallet"
              />
              <p className="cardText">Blue Wallet</p>
            </div>
            <div className="paymentMethod">
              <input type="radio" name="paymentMethod" value="eft" className="paymentMethodOption" ref={register} id="eft" />
              <p className="cardText">EFT</p>
            </div>
            <div className="paymentMethod">
              <input
                type="radio"
                name="paymentMethod"
                value="payToday"
                className="paymentMethodOption"
                ref={register}
                id="payToday"
              />
              <p className="cardText">PayToday</p>
            </div>
            <div className="paymentMethod bottom">
              <input
                type="radio"
                name="paymentMethod"
                value="easyWallet"
                className="paymentMethodOption"
                ref={register}
                id="easyWallet"
              />
              <p className="cardText">EasyWallet</p>
            </div>
          </div>
        </div>
      </section>
      <div className="navigation">
        <div className="returnContainer">
          <DrownDownIcon className="icon" />
          <p className="returnText" onClick={() => onChange('Information')}>
            Return to Information
          </p>
        </div>
        <button className="continueBtn">Continue to Payment</button>
      </div>
    </form>
  );
};
