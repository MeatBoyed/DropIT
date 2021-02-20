import React from 'react';

// Import Componets
import { Navbar } from '../Navbar';
import { ShoppingCartSection } from './ShoppingCartSection';

interface Props {}

const ShoppingCartPageIndex: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <Navbar />
      <ShoppingCartSection />
    </React.Fragment>
  );
};

export default ShoppingCartPageIndex;
