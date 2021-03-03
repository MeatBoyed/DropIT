import React, { useState, useRef, useCallback } from 'react';
import { usePaginate } from '../customHooks';

import { Link } from 'react-router-dom';

// Import Components
import { ItemCard } from '../ItemCard';
import { LoadingSpinner } from '../LoadingSpinner';

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
      <div className="itemsContainer">
        {products.map((product, index) => {
          if (products.length === index + 1) {
            return (
              <div key={index} ref={lastItemElementRef} className="itemCard">
                <Link to={`/${product.vendor}/${product.id}`}>
                  <img src={product.mainThumbnail} alt="" className="itemImage" />
                </Link>
                <div className="itemInfo">
                  <Link to={`/${product.vendor}/${product.id}`}>
                    <p className="itemTitle">{product.title}</p>
                  </Link>
                  <Link to={`/${product.vendor}/${product.id}`}>
                    <p className="itemPrice">{product.price}</p>
                  </Link>
                </div>
              </div>
            );
          } else {
            return (
              <ItemCard
                key={index}
                url={`/${product.vendor}/${product.id}`}
                title={product.title}
                price={product.price}
                mainImage={product.mainThumbnail}
              />
            );
          }
        })}
      </div>
      <div className="loadingSpinner">{loading && <LoadingSpinner />}</div>
      <div>{error && 'Error...'}</div>
    </section>
  );
};

export default HomePage;
