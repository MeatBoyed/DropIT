import React, { useContext } from 'react';

import { ReactComponent as BreadcrumArrow } from '../../images/BreadcrumArrow.svg';

interface Props {
  currentState: string;
}

const BreadcrumActiveColour = '#1990c6';

export const Breadcrums: React.FC<Props> = ({ currentState }) => {
  return (
    <div className="breadCrumsContaienr">
      <p className="breadCrum" style={{ color: BreadcrumActiveColour }}>
        Cart
      </p>
      <BreadcrumArrow className="arrow" />
      <p
        className="breadCrum"
        style={{
          color:
            currentState === 'Information' || currentState === 'InformationCheck' || currentState === 'Payment'
              ? BreadcrumActiveColour
              : '',
        }}
      >
        Information
      </p>
      <BreadcrumArrow className="arrow" />
      <p
        className="breadCrum"
        style={{
          color: currentState === 'InformationCheck' || currentState === 'Payment' ? BreadcrumActiveColour : '',
        }}
      >
        Shipping
      </p>
      <BreadcrumArrow className="arrow" />
      <p className="breadCrum" style={{ color: currentState === 'Payment' ? BreadcrumActiveColour : '' }}>
        Payment
      </p>
    </div>
  );
};
