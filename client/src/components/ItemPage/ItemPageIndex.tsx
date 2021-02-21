import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { firestore } from '../../firebase';

// Import Componets
import { LoadingSpinner } from '../LoadingSpinner';
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

  const GetItem = async () => {
    const itemData = await firestore.collection('Items').doc(path.itemid).get();

    if (!itemData.exists) {
      setLoadingAndValidation({ loading: false, valid: false });
    } else {
      setItem({
        id: itemData.id,
        title: itemData.data()!.title,
        price: itemData.data()!.price,
        colours: itemData.data()!.colours,
        sizes: itemData.data()!.sizes,
        viewerImages: itemData.data()!.images.viewerImages,
        description: itemData.data()!.description,
      });
      setLoadingAndValidation({ loading: false, valid: true });
    }
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
            <ItemSection
              id={item.id}
              title={item?.title}
              price={item?.price}
              colours={item?.colours}
              sizes={item?.sizes}
              viewerImages={item?.viewerImages}
              description={item?.description}
            />
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
