import React from 'react';

import { ItemCard } from '../ItemCard';
import { ProductCardModel } from '../Utils/Interfaces';

interface Props {
  headerText: string;
  products: ProductCardModel[];
}

export const CategorySection: React.FC<Props> = ({ headerText, products }) => {
  return (
    <div className="categorySection">
      <div className="header">
        <p className="headerText">{headerText}</p>
      </div>
      <div className="productsContainer">
        {products.map((product, index) => {
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
          // Fix return value
          return false;
        })}
      </div>
      <button className="viewMoreBtn">View More</button>
    </div>
  );
};
