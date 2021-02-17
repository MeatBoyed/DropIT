import React from 'react';

// Import Core components
import { Navbar } from '../Navbar';
import { ShoppingSection } from './ShoppingSection';
import { MobileNavbar } from '../MobileNavbar';

const HomePageIndex: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <ShoppingSection />
      <MobileNavbar />
    </React.Fragment>
  );
};

export default HomePageIndex;
