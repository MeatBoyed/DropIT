import React, { useState } from 'react';

import { ReactComponent as ClipboardIcon } from '../../images/ClipboardIcon.svg';
import { InformationCard } from '../Utils/InformationCard';

export const Payment: React.FC = () => {
  const [copiedSucess, setCopiedSucess] = useState<boolean>(false);

  const HandleCopyToClipboard = () => {
    navigator.clipboard.writeText('Order Number: #55135 - Name: John Doe West');
    setCopiedSucess(true);

    const timer = setTimeout(() => {
      console.log('timer running');
      setCopiedSucess(false);
    }, 20000);
    return () => clearTimeout(timer);
  };

  return (
    <section id="PaymentSection">
      <div className="orderSummaryContainer">
        <InformationCard cardTitle="Contact" cardText="johndoe@example.com" changeOption={true} />
        <InformationCard cardTitle="Ship To" cardText="12 Thomis Morris st, Walivs Bay, P.O BOX 1595" changeOption={true} />
        <InformationCard cardTitle="Payment Method" cardText="eWallet" changeOption={true} />
      </div>
      <div className="PaymentContainer">
        <div className="paymentDetailsContainer">
          <p className="formTitle">Payment Details</p>
          <p className="notice">
            Orders will only be processed once <strong>Proof of Payment</strong> & <strong>Attachment Info</strong> are send
            to Grabbler LLC.
          </p>
          <div className="paymentDetails">
            <InformationCard cardTitle="Account Name" cardText="Grabbler LLC" />
            <InformationCard cardTitle="Account Number" cardText="# 3338812" />
            <InformationCard cardTitle="Total Price" cardText="$3318" />
          </div>
        </div>
        <div className="contactDetailsContainer">
          <p className="formTitle">Attachment Info</p>
          <div className="contactDetails">
            <div className="contactMethodContainer">
              <InformationCard cardTitle="Email" cardText="payments@grabbler.com" />
              <InformationCard cardTitle="WhatsApp" cardText="+264 84 965 4884" />
            </div>
          </div>
          <div className="messageTemplaiteContainer">
            <p className="copySucess" style={{ display: copiedSucess ? '' : 'none' }}>
              Copied to Clipboard!
            </p>
            <div className="header">
              <p className="formTitle">Attachment Details</p>
              <ClipboardIcon className="clipboardIcon" onClick={() => HandleCopyToClipboard()} />
            </div>
            <div className="attachTemplateContainer">
              <InformationCard cardTitle="Order Number" cardText="# 55135" />
              <InformationCard cardTitle="Name" cardText="John Does West" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
