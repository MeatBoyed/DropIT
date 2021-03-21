import React from 'react';

import { Information } from './Information';
import { InformationSummary } from './InformationSummary';
import { Payment } from './Payment';

interface Props {
  currentState: string;
}

export const PageSwitch: React.FC<Props> = ({ currentState }) => {
  return (
    <React.Fragment>
      {currentState === 'Information' && <Information />}
      {currentState === 'InformationCheck' && <InformationSummary />}
      {currentState === 'Payment' && <Payment />}
    </React.Fragment>
  );
};
