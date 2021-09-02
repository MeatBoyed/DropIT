import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useSearch } from '../Utils/useSearch';
import { Payload } from '../Utils/Interfaces';
import { Link, useLocation } from 'react-router-dom';
import { LoadingSpinner } from '../LoadingSpinner';

import { FilterBar } from './FilterBar';
import { PaginationController } from './PaginationController';
import { Alert } from '../Utils/Alert';

// Import temp Loading image
// import thumbnail from '../../images/thumbnail.jpg';

// Importing dummy data
import dummyData from '../../MOCK_DATA.json';

// Import Components
const ItemCard = React.lazy(() => import('../ItemCard'));

export const SearchPage: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const [payload, setPayload] = useState<Payload>({ query: '', operation: 0 });
  const { search } = useLocation();

  // eslint-disable-next-line
  const { loading, error, searchResult, hasMore } = useSearch(payload, pageNumber);
  let results = dummyData;

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
    <section id="ResultsSection">
      <Alert
        message={'Product Links are dead for data storage reasons. Please visit the Home Page to view an available Product'}
        returnHome={true}
      />
      <FilterBar />
      <div className="loadingSpinner">{loading && <LoadingSpinner />}</div>
      <div className="productsContainer">
        {results.map((product, index) => {
          if (results.length === index + 1) {
            let url = `/${product.vendor}/${product._id}`;

            return (
              <div key={index} ref={lastItemElementRef} className="itemCard">
                <Link to={url}>
                  <img src={product.mainThumbnail} alt="" className="itemImage" />
                </Link>
                <div className="itemInfo">
                  <Link to={url}>
                    <p className="itemTitle">{product.title}</p>
                  </Link>
                  <Link to={url}>
                    <p className="itemPrice">${product.price}</p>
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
                mainImage={product.mainThumbnail}
                isOnResult={true}
              />
            );
          }
        })}
      </div>
      <React.Fragment>{error.isError && <Alert message={error.message} returnHome={false} />}</React.Fragment>
      <PaginationController />
    </section>
  );
};

export default SearchPage;
