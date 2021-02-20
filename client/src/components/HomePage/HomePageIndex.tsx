import React from 'react';
import { Navbar } from '../Navbar';

// Import Core components
import { ShoppingSection } from './ShoppingSection';
import { SideBar } from '../SideBar';

const HomePageIndex: React.FC = () => {
  return (
    <section id="MainSection">
      <Navbar />
      <div id="MainSectionContainer">
        <SideBar />
        <ShoppingSection />
      </div>
    </section>
  );
};

export default HomePageIndex;
