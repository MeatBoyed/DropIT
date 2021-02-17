import React from 'react';

// Import Componets
import { Navbar } from '../Navbar';
import { ShoppingCartSection } from './ShoppingCartSection';
import { MobileNavbar } from '../MobileNavbar';

interface Props {}

const ShoppingCartPageIndex: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <Navbar />
      <ShoppingCartSection />
      <MobileNavbar />
    </React.Fragment>
  );
};

export default ShoppingCartPageIndex;
