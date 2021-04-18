import React from 'react';

// Import Components
// import { LoadingSpinner } from '../LoadingSpinner';
// import { Alert } from '../Utils/Alert';
import { CategorySection } from './CategorySection';

import TempBannerImage from '../../images/profileBanner.jpg';

export const HomePage: React.FC = () => {
  return (
    <section id="ShoppingSection">
      <div className="mainSection">
        <img src={TempBannerImage} className="bannerImage" alt="" />
        <CategorySection headerText="Top Picks" payload={{ operation: 1, query: 'Clothing' }} />
        <CategorySection headerText="Best This Month" payload={{ operation: 1, query: 'Accessories' }} />
      </div>
      {/* <div className="loadingSpinner">{loading && <LoadingSpinner />}</div>
      <div className="shoppingSectionError">{error.isError && <Alert message={error.message} returnHome={false} />}</div> */}
    </section>
  );
};

export default HomePage;
