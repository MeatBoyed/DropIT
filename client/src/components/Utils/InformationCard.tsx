import React from 'react';

interface Props {
  cardTitle: string;
  cardText: string;
  changeOption?: boolean;
}

export const InformationCard: React.FC<Props> = ({ cardTitle, cardText, changeOption }) => {
  return (
    <div className="informationCard">
      <p className="cardTitle">{cardTitle}</p>
      <p className="cardText">{cardText}</p>
      {changeOption && <p className="changeText">Change</p>}
    </div>
  );
};
