import React from 'react';
import { useState } from 'react';

import { Selector } from '../Utils/Selector';

interface Props {}

let sortByOptions = ['Price', 'Product Name', 'Brand', 'Colour'];
let orderByOptions = ['Asce', 'Desc'];

export const FilterBar: React.FC<Props> = () => {
  let [sortByOption, setSortByOption] = useState<string>('Product Name');
  let [orderByOption, setOrderByOption] = useState<string>('Ascending');

  return (
    <div className="filterBar">
      <p className="title">Sort By</p>
      <Selector
        NOMARGIN={sortByOption.length !== 0 ? '' : 'NOMARGIN'}
        onChange={(newValue) => setSortByOption(newValue)}
        title={''}
        options={sortByOptions}
      />
      <p className="title">Order By</p>
      <Selector
        NOMARGIN={orderByOption.length !== 0 ? '' : 'NOMARGIN'}
        onChange={(newValue) => setOrderByOption(newValue)}
        title={''}
        options={orderByOptions}
      />
    </div>
  );
};
