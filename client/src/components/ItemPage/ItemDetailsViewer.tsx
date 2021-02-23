import React from 'react';

interface Props {
  title: string;
  price: number;
}

export const ItemDetailsViewer: React.FC<Props> = ({ title, price }) => {
  return (
    <div className="itemDetailsContainer">
      <p className="itemTitle">{title}</p>
      <p className="itemPrice">${price}</p>
    </div>
  );
};
