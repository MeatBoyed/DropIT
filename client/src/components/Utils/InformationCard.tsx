import React from 'react';

interface Props {
  cardTitle: string;
  cardText: string;
}

export const InformationCard: React.FC<Props> = ({ cardTitle, cardText }) => {
  return (
    <div className="informationCard">
      <p className="cardTitle">{cardTitle}</p>
      <p className="cardText">{cardText}</p>
      <p className="changeText">Change</p>
    </div>
  );
};
