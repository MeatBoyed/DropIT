import React, { useState } from 'react';

import { ItemCard } from '../ItemCard';
import { useFetchProfileProducts } from '../Utils/useFetchProfileProducts';

interface Props {
  profileTitle: string;
}

export const ProfileProducts: React.FC<Props> = ({ profileTitle }) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { loading, error, products } = useFetchProfileProducts(profileTitle, pageNumber);

  return (
    <div id="ShoppingSection">
      <p className="productsTitle">Products</p>
      <div className="itemsContainer">
        {products.map((product, index) => {
          return (
            <ItemCard
              key={index}
              url={`/${product.vendor}/${product._id}`}
              title={product.title}
              price={product.price}
              mainImage={product.thumbnails.mainThumbnail}
            />
          );
        })}
        {error.isError && <h1>{error.message}</h1>}
      </div>
    </div>
  );
};
