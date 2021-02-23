import { stringify } from 'querystring';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useData } from '../customHooks';

// Import Componets
import { LoadingSpinner } from '../LoadingSpinner';
import { Buttons } from './Buttons';
import { ImageViewer } from './ImageViewer';
import { ItemDetailsViewer } from './ItemDetailsViewer';
import { ItemSection } from './ItemSection';
import Selector from './Selector';

interface Param {
  itemid: string;
}

const ItemPageIndex: React.FC = () => {
  const currentId = useParams<Param>();

  const { loading, errorMessage, item } = useData(currentId.itemid);

  return (
    <section id="ItemSection">
      <ImageViewer viewerImages={item.viewerImages} />
      <div className="ItemDetailSection">
        <ItemDetailsViewer title={item.title} price={item.price} />
        <div className="itemSelectorsContainer">
          {item.colours !== undefined ? <Selector options={item.colours} /> : null}
          {item.colours !== undefined ? <Selector options={item.colours} /> : null}
        </div>
        {/* After adding to cart, change Add to cart to View cart and show Continue shopping routing to previous page */}
        <Buttons />
        <div className="itemDetail">
          <p>{item.description}</p>
        </div>
      </div>
    </section>
    // <section id="ItemSection">
    //   {loadingAndValidation.loading ? (
    //     <LoadingSpinner />
    //   ) : (
    //     <React.Fragment>
    //       {loadingAndValidation.valid ? (
    //         <React.Fragment>
    //           <ImageViewer viewerImages={item.viewerImages} />
    //           <div className="ItemDetailSection">
    //             <ItemDetailsViewer title={item.title} price={item.price} />
    //             <div className="itemSelectorsContainer">
    //               {item.colours !== undefined ? <Selector options={item.colours} /> : null}
    //               {item.colours !== undefined ? <Selector options={item.colours} /> : null}
    //             </div>
    //             {/* After adding to cart, change Add to cart to View cart and show Continue shopping routing to previous page */}
    //             <Buttons />
    //             <div className="itemDetail">
    //               <p>{item.description}</p>
    //             </div>
    //           </div>
    //         </React.Fragment>
    //       ) : (
    //         <div className="ItemNotFound">
    //           <h4>It seems as though the item you searched for doesn't exist</h4>
    //           <Link to="/">Return back home</Link>
    //         </div>
    //       )}
    //     </React.Fragment>
    //   )}
    // </section>
  );
};

export default ItemPageIndex;
