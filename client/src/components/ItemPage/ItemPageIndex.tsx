import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Alert } from '../Alert';
import { useData } from '../customHooks';

// Import Componets
import { LoadingSpinner } from '../LoadingSpinner';
import { ImageViewer } from './ImageViewer';
import { ItemDetailsViewer } from './ItemDetailsViewer';
import Selector from './Selector';

interface Param {
  itemid: string;
}

const ItemPageIndex: React.FC = () => {
  const currentId = useParams<Param>();

  const [addToCart, setAddedtoCart] = useState<boolean>(false);

  const { loading, errorMessage, item } = useData(currentId.itemid);

  const AddToCartHandler = () => {
    if (item.frequency !== 0) {
      setAddedtoCart(true);
    }
  };

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
                  {item.colours.length !== 0 && <Selector title={'Colours'} options={item.colours} />}
                  {item.sizes.length !== 0 && <Selector title={'Sizes'} options={item.sizes} />}
                </div>
                {/* After adding to cart, change Add to cart to View cart and show Continue shopping routing to previous page */}
                <div className="ButtonsContainer">
                  <button onClick={AddToCartHandler} className={addToCart ? 'activatedBtn' : 'addToCartBtn'}>
                    {item.frequency === 0 ? 'Out of Stock' : 'Add To Cart'}
                  </button>
                  {addToCart && <button className="buyNowBtn">Continue Shopping</button>}
                </div>
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
