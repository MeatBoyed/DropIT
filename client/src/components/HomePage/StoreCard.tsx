import React from 'react';

interface Props {
  vendorName: string;
  vendorLogo: string;
}

export const StoreCard: React.FC<Props> = ({ vendorName, vendorLogo }) => {
  return (
    <div className="storeCard">
      <img src={vendorLogo} alt="" />
    </div>
  );
};
