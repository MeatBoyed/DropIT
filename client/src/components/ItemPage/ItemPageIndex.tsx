import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { firestore } from '../../firebase';

// Import Componets
import { LoadingSpinner } from '../LoadingSpinner';
import { ImageViewer } from './ImageViewer';
import { ItemSection } from './ItemSection';

interface Params {
  itemid: string;
}

interface LoadingAndValidation {
  loading: boolean;
  valid: boolean;
}

interface Item {
  id: string;
  title: string;
  price: number;
  colours: string[];
  sizes: string[];
  viewerImages: string[];
  description: string;
}

const ItemPageIndex: React.FC = () => {
  let path = useParams<Params>();

  const [loadingAndValidation, setLoadingAndValidation] = useState<LoadingAndValidation>({ loading: true, valid: false });
  const [item, setItem] = useState<Item>({
    id: '',
    title: '',
    price: 0,
    colours: [],
    sizes: [],
    viewerImages: [],
    description: '',
  });

  const GetItem = () => {
    const itemSnapShot = firestore.collection('Items').doc(path.itemid).get();

    itemSnapShot
      .then((itemSnapShot) => {
        if (!itemSnapShot.exists) {
          setLoadingAndValidation({ loading: false, valid: false });
        } else {
          setItem({
            id: itemSnapShot.id,
            title: itemSnapShot.data()!.title,
            price: itemSnapShot.data()!.price,
            colours: itemSnapShot.data()!.colours,
            sizes: itemSnapShot.data()!.sizes,
            viewerImages: itemSnapShot.data()!.images.viewerImages,
            description: itemSnapShot.data()!.description,
          });
          setLoadingAndValidation({ loading: false, valid: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    GetItem();
  });

  return (
    <section id="ItemSection">
      {loadingAndValidation.loading ? (
        <LoadingSpinner />
      ) : (
        <React.Fragment>
          {loadingAndValidation.valid ? (
            <React.Fragment>
              <ImageViewer viewerImages={item.viewerImages} />
              <ItemSection
                title={item?.title}
                price={item?.price}
                colours={item?.colours}
                sizes={item?.sizes}
                description={item?.description}
              />
            </React.Fragment>
          ) : (
            <div className="ItemNotFound">
              <h4>It seems as though the item you searched for doesn't exist</h4>
              <Link to="/">Return back home</Link>
            </div>
          )}
        </React.Fragment>
      )}
    </section>
  );
};

export default ItemPageIndex;
