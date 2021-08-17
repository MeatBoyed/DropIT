import React from 'react';
import { Link } from 'react-router-dom';

import { ItemCard } from '../ItemCard';
import { LoadingSpinner } from '../LoadingSpinner';
import { Alert } from '../Utils/Alert';
import { useSearch } from '../Utils/useSearch';

interface Props {
  payload: { query: string; operation: 0 | 1 };
  headerText: string;
}

export const CategorySection: React.FC<Props> = ({ payload, headerText }) => {
  const { searchResult, loading, error } = useSearch(payload, 1);

  return (
    <div className="categorySection">
      <div className="header">
        <p className="headerText">{headerText}</p>
      </div>
      <div className="productsContainer">
        {searchResult.map((product, index) => {
          if (index < 3) {
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
          return null;
        })}
      </div>
      <div className="loadingSpinner">{loading && <LoadingSpinner />}</div>
      <div className="shoppingSectionError">{error.isError && <Alert message={error.message} returnHome={false} />}</div>
      {error.isError ? null : (
        <Link to={`/search?f=${payload.query}`}>
          <button className="viewMoreBtn">View More</button>
        </Link>
      )}
    </div>
  );
};
