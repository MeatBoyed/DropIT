import React, { useState, useRef, useCallback } from 'react';
import { usePaginate } from '../Utils/usePaginate';
import { Link } from 'react-router-dom';

// Import Components
import { LoadingSpinner } from '../LoadingSpinner';
import { Alert } from '../Utils/Alert';
import { CategorySection } from './CategorySection';

import TempBannerImage from '../../images/profileBanner.jpg';

export const HomePage: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const { loading, error, products, hasMore } = usePaginate(pageNumber);

  const observer = useRef<IntersectionObserver>();
  const lastItemElementRef = useCallback(
    // Node relates to the last element that is rendered (last document)
    (node) => {
      // Stop scrolling if loading (fetching data)
      if (loading) return;

      // Connect observer to correct place
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((previousPageNumber) => previousPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <section id="ShoppingSection">
      <div className="mainSection">
        <img src={TempBannerImage} className="bannerImage" alt="" />
        <CategorySection headerText="Top Picks" products={products} />
        <CategorySection headerText="Best This Month" products={products} />
      </div>
      <div className="loadingSpinner">{loading && <LoadingSpinner />}</div>
      <div className="shoppingSectionError">{error.isError && <Alert message={error.message} returnHome={false} />}</div>
    </section>
  );
};

export default HomePage;
