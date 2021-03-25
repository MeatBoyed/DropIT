import React from 'react';

interface Props {
  cardTitle: string;
  cardText: string;
  changeOption?: boolean;
}

export const InformationCard: React.FC<Props> = ({ cardTitle, cardText, changeOption }) => {
  return (
    <div className="informationCard">
      <h3 className="cardTitle">{cardTitle}</h3>
      <p className="cardText">{cardText}</p>
      {changeOption && <p className="changeText">Change</p>}
    </div>
  );
};
