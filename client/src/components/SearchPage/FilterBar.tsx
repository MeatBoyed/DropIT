import React from 'react';
import { useState } from 'react';

import { Selector } from '../Utils/Selector';

interface Props {}

let sortByOptions = ['Price', 'Product Name', 'Brand', 'Colour'];
let orderByOptions = ['15', '30', '45'];

export const FilterBar: React.FC<Props> = () => {
  let [sortByOption, setSortByOption] = useState<string>('Product Name');
  let [orderByOption, setOrderByOption] = useState<string>('15');

  return (
    <div className="filterBar">
      <div className="selection">
        <p className="title">Sort By</p>
        <Selector
          NOMARGIN={sortByOption.length !== 0 ? '' : 'NOMARGIN'}
          onChange={(newValue) => setSortByOption(newValue)}
          title={''}
          options={sortByOptions}
        />
      </div>
      <div className="selection">
        <p className="title">Order By</p>
        <Selector
          NOMARGIN={orderByOption.length !== 0 ? '' : 'NOMARGIN'}
          onChange={(newValue) => setOrderByOption(newValue)}
          title={''}
          options={orderByOptions}
        />
      </div>
    </div>
  );
};
