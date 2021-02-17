import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { firestore } from '../../firebase';

// Import Componets
import { Navbar } from '../Navbar';
import { ItemSection } from './ItemSection';

// Redirect to 404 if path is invalid

interface Params {
  storename: string;
  itemid: string;
}

interface Item {
  id: string;
  title: string;
  price: number;
  colours: string[];
  sizes: string[];
  viewerImages: string[];
  description: string;
  frequency: number;
}

export const ItemPageIndex: React.FC = () => {
  let path = useParams<Params>();

  const [isValid, setIsValid] = useState(false);
  const [item, setItem] = useState<Item>({
    id: '',
    title: '',
    price: 0,
    colours: [],
    sizes: [],
    viewerImages: [],
    description: '',
    frequency: 0,
  });

  const GetItem = async () => {
    const itemData = await firestore.collection('Items').doc(path.itemid).get();

    if (!itemData.exists) {
      console.log("Doesn't exist");
    } else {
      setItem({
        id: itemData.id,
        title: itemData.data()!.title,
        price: itemData.data()!.price,
        colours: itemData.data()!.colours,
        sizes: itemData.data()!.sizes,
        viewerImages: itemData.data()!.images.viewerImages,
        description: itemData.data()!.description,
        frequency: itemData.data()!.frequency,
      });
    }
  };

  useEffect(() => {
    GetItem();
  });

  return (
    <React.Fragment>
      <Navbar />
      <ItemSection
        id={item.id}
        title={item?.title}
        price={item?.price}
        colours={item?.colours}
        sizes={item?.sizes}
        viewerImages={item?.viewerImages}
        frequency={item?.frequency}
        description={item?.description}
      />
    </React.Fragment>
  );
};
