import React from 'react';

import { ReactComponent as CheveronDown } from '../../images/chevronDown.svg';

interface Props {}

export const FilterBar: React.FC<Props> = () => {
  return (
    <div className="filterBar">
      <div className="dropDown">
        <p className="title">Sort By</p>
        <CheveronDown />
      </div>
      <div className="dropDown">
        <p className="title">Sort By</p>
        <CheveronDown />
      </div>
    </div>
  );
};
