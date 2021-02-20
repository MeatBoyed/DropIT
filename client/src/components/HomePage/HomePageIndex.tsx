import React from 'react';

// Import Core components
import { Navbar } from '../Navbar';
import { ShoppingSection } from './ShoppingSection';

const HomePageIndex: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <ShoppingSection />
    </React.Fragment>
  );
};

export default HomePageIndex;
