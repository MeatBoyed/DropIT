import React from 'react';

// Import Componets
import { ShoppingCartSection } from './ShoppingCartSection';

interface Props {}

const ShoppingCartPageIndex: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <ShoppingCartSection />
    </React.Fragment>
  );
};

export default ShoppingCartPageIndex;
