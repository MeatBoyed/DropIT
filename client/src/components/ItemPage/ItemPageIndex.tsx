import React, { useContext, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Alert } from '../Utils/Alert';
import { useFetchProduct } from '../Utils/useFetchProduct';

// Import Componets
import { LoadingSpinner } from '../LoadingSpinner';
import { ImageViewer } from './ImageViewer';
import { ItemDetailsViewer } from './ItemDetailsViewer';

interface Param {
  itemid: string;
}

const ItemPageIndex: React.FC = () => {
  const currentId = useParams<Param>().itemid;
  const currentUrl = useLocation();

  const { loading, error, product } = useFetchProduct(currentId);

  return (
    <section id="ItemSection">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <React.Fragment>
          {error.isError ? (
            <Alert message={error.message} />
          ) : (
            <React.Fragment>
              <ImageViewer viewerImages={product.viewerImages} />
              <ItemDetailsViewer
                id={currentId}
                currentURL={currentUrl.pathname}
                title={product.title}
                price={product.price}
                colours={product.colours}
                sizes={product.sizes}
                description={product.description}
                rating={product.rating}
                frequency={product.frequency}
              />
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </section>
  );
};

export default ItemPageIndex;
