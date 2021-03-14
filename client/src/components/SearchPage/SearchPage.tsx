import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useSearch } from '../Utils/useSearch';
import { Payload } from '../Utils/Interfaces';
import { Link, useLocation } from 'react-router-dom';
import { LoadingSpinner } from '../LoadingSpinner';

// Import Components
const ItemCard = React.lazy(() => import("../ItemCard"))

export const SearchPage: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const [payload, setPayload] = useState<Payload>({ query: '', operation: 0 });
  const { search } = useLocation();

  const { loading, error, searchResult, hasMore } = useSearch(payload, pageNumber);

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

  useEffect(() => {
    const params = new URLSearchParams(search);
    const newSearchQuery = params.get('q');
    const newFilterQuery = params.get('f');

    if (newSearchQuery) {
      setPayload({ query: newSearchQuery, operation: 0 });
    } else if (newFilterQuery) {
      setPayload({ query: newFilterQuery, operation: 1 });
    }
  }, [payload.operation, search]);

  return (
    <section id="ShoppingSection">
      <div className="itemsContainer">
        {searchResult.map((product, index) => {
          if (searchResult.length === index + 1) {
            return (
              <div key={index} ref={lastItemElementRef} className="itemCard">
                <Link to={`/${product.vendor}/${product._id}`}>
                  <img src={product.thumbnails.mainThumbnail} alt="" className="itemImage" />
                </Link>
                <div className="itemInfo">
                  <Link to={`/${product.vendor}/${product._id}`}>
                    <p className="itemTitle">{product.title}</p>
                  </Link>
                  <Link to={`/${product.vendor}/${product._id}`}>
                    <p className="itemPrice">{product.price}</p>
                  </Link>
                </div>
              </div>
            );
          } else {
            return (
              <ItemCard
                key={index}
                url={`/${product.vendor}/${product._id}`}
                title={product.title}
                price={product.price}
                mainImage={product.thumbnails.mainThumbnail}
              />
            );
          }
        })}
      </div>
      <div className="loadingSpinner">{loading && <LoadingSpinner />}</div>
      <div>{error.isError && <h3>{error.message}</h3>}</div>
    </section>
  );
};

export default SearchPage;
