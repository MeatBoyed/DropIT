import React, { useState, useRef, useCallback } from 'react';
import { usePaginate } from '../usePaginate';

import { Link } from 'react-router-dom';

import mainImage from '../../images/MainImage1.png';

// Import Components
import { ItemCard } from '../ItemCard';
import { LoadingSpinner } from '../LoadingSpinner';

export const ShoppingSection: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const { loading, error, items, hasMore } = usePaginate(pageNumber);

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
      <div id="StoreItemsContainer">
        <h3 className="sectionTitle">Beats Products</h3>
        <div className="itemsContainer">
          <ItemCard
            url={'test'}
            title={"When Your Friend Asks for a Couple Dollars for Pizza but You're Long on BAT (Digital NFT)"}
            price={25009}
            mainImage={mainImage}
          />
          <ItemCard
            url={'test'}
            title={"When Your Friend Asks for a Couple Dollars for Pizza but You're Long on BAT (Digital NFT)"}
            price={25009}
            mainImage={mainImage}
          />
          <ItemCard
            url={'test'}
            title={"When Your Friend Asks for a Couple Dollars for Pizza but You're Long on BAT (Digital NFT)"}
            price={25009}
            mainImage={mainImage}
          />
          <ItemCard
            url={'test'}
            title={"When Your Friend Asks for a Couple Dollars for Pizza but You're Long on BAT (Digital NFT)"}
            price={25009}
            mainImage={mainImage}
          />
          {/* {items.map((item, index) => {
            if (items.length === index + 1) {
              return (
                <div key={index} ref={lastItemElementRef} className="itemCard">
                  <svg className="favouriteIcon" width="17" height="17" viewBox="0 0 17 17">
                    <g transform="translate(-150.604 -262.604)">
                      <circle cx="8.5" cy="8.5" r="8.5" transform="translate(150.604 262.604)" fill="#b8b8b8" />
                      <g transform="translate(154.355 267.391)">
                        <g transform="translate(0 0)">
                          <path
                            d="M4.558,39.265C1.883,36.925,0,35.685,0,33.713A2.585,2.585,0,0,1,2.519,31a2.508,2.508,0,0,1,2.222,1.5A2.508,2.508,0,0,1,6.963,31a2.585,2.585,0,0,1,2.519,2.713c0,1.971-1.881,3.209-4.558,5.551A.278.278,0,0,1,4.558,39.265Z"
                            transform="translate(0 -31)"
                            fill="#fff"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <Link to={`/${item.vendor}/${item.id}`}>
                    <img src={item.mainImage} alt="" className="itemImage" />
                  </Link>
                  <div className="itemInfo">
                    <Link to={`/${item.vendor}/${item.id}`}>
                      <p className="itemTitle">{item.title}</p>
                    </Link>
                    <Link to={`/${item.vendor}/${item.id}`}>
                      <p className="itemPrice">${item.price}</p>
                    </Link>
                  </div>
                </div>
              );
            } else {
              return (
                <ItemCard
                  key={index}
                  url={`/${item.vendor}/${item.id}`}
                  title={item.title}
                  price={item.price}
                  mainImage={item.mainImage}
                />
              );
            }
          })} */}
        </div>
      </div>
      <div>{loading && <LoadingSpinner />}</div>
      <div>{error && 'Error...'}</div>
      <div>{hasMore ? null : 'No more'}</div>
    </section>
  );
};
