import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { LoadingSpinner } from '../LoadingSpinner';
import { useFetchProfileProducts } from '../Utils/useFetchProfileProducts';

const ItemCard = React.lazy(() => import("../ItemCard"))

interface Props {
  profileTitle: string;
}

export const ProfileProducts: React.FC<Props> = ({ profileTitle }) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { loading, error, products, hasMore } = useFetchProfileProducts(profileTitle, pageNumber);

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

