import React from 'react';

interface Props {}

export const InformationSummary: React.FC<Props> = () => {
  return (
    <section id="InformationSummarySectoin">
      <p className="formTitle">Information Summary</p>
      <div className="shippingSummary">
        <div className="contactContainer top">
          <p className="cardTitle">Contact</p>
          <p className="cardText">johndoe@example.com</p>
          <p className="changeText">Change</p>
        </div>
        <div className="contactContainer">
          <p className="cardTitle">Ship to</p>
          <p className="cardText">12 Thomas Morris st. Walvis Bay, 1959, Namibia</p>
          <p className="changeText">Change</p>
        </div>
      </div>
    </section>
  );
};
