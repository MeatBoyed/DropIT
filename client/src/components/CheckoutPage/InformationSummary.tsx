import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { PaymentMethod } from '../Utils/Interfaces';

import { ReactComponent as DrownDownIcon } from '../../images/DrownDownIcon.svg';

import { InformationCard } from '../Utils/InformationCard';
import { useCheckout } from '../Utils/useCheckout';

interface Props {
  onChange: (state: 'Information' | 'InformationCheck' | 'Payment') => void;
}

interface FormData {
  paymentMethod: PaymentMethod;
}

export const InformationSummary: React.FC<Props> = ({ onChange }) => {
  const { userData, SavePaymentMethod } = useCheckout();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue('paymentMethod', userData.paymentMethod);
  }, [userData]);

  const onSubmit = (data: FormData) => {
    let success = SavePaymentMethod(data.paymentMethod);
    if (success) return onChange('Payment');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section id="InformationSummarySectoin">
        <p className="formTitle">Information Summary</p>
        <div className="shippingSummary">
          <InformationCard cardTitle="Contact" cardText={userData.userInfo.email} />
          <InformationCard cardTitle="Ship To" cardText={userData.userInfo.address1} />
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
                ref={register({
                  required: true,
                })}
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
                required
                ref={register({
                  required: true,
                })}
                id="blueWallet"
              />
              <p className="cardText">Blue Wallet</p>
            </div>
            <div className="paymentMethod">
              <input
                type="radio"
                name="paymentMethod"
                value="eft"
                className="paymentMethodOption"
                required
                ref={register({
                  required: true,
                })}
                id="eft"
              />
              <p className="cardText">EFT</p>
            </div>
            <div className="paymentMethod">
              <input
                type="radio"
                name="paymentMethod"
                value="payToday"
                className="paymentMethodOption"
                required
                ref={register({
                  required: true,
                })}
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
                required
                ref={register({
                  required: true,
                })}
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
