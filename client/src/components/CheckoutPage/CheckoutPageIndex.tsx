import React from 'react';

import { Information } from './Information';
import { ShoppingCartSummary } from './ShoppingCartSummary';

export const CheckoutPageIndex: React.FC = () => {
  return (
    <section id="CheckoutSection">
      <ShoppingCartSummary />
      <div id="PagesContainer">
        <Information />
      </div>
    </section>
  );
};
