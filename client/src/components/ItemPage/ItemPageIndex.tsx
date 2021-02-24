import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Alert } from '../Alert';
import { useData } from '../customHooks';

// Import Componets
import { LoadingSpinner } from '../LoadingSpinner';
import { Buttons } from './Buttons';
import { ImageViewer } from './ImageViewer';
import { ItemDetailsViewer } from './ItemDetailsViewer';
import Selector from './Selector';

interface Param {
  itemid: string;
}

const ItemPageIndex: React.FC = () => {
  const currentId = useParams<Param>();

  const { loading, errorMessage, item } = useData(currentId.itemid);

  return (
    <section id="ItemSection">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <React.Fragment>
          {errorMessage !== '' ? (
            <Alert message={errorMessage} />
          ) : (
            <React.Fragment>
              <ImageViewer viewerImages={item.viewerImages} />
              <div className="ItemDetailSection">
                <ItemDetailsViewer title={item.title} price={item.price} />
                <div className="itemSelectorsContainer">
                  {item.colours[0] !== '' ? <Selector options={item.colours} /> : null}
                  {item.sizes[0] !== '' ? <Selector options={item.sizes} /> : null}
                </div>
                {/* After adding to cart, change Add to cart to View cart and show Continue shopping routing to previous page */}
                <Buttons />
                <div className="itemDetail">
                  <p>{item.description}</p>
                </div>
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </section>
  );
};

export default ItemPageIndex;
