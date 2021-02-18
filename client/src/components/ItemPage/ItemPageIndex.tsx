import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { firestore } from '../../firebase';

// Import Componets
import { Navbar } from '../Navbar';
import { ItemSection } from './ItemSection';

// Redirect to 404 if path is invalid

// Loading Data
import ViewerLoading from '../../images/ViewerLoading.png';

interface Params {
  storename: string;
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
  frequency: number;
}

const ItemPageIndex: React.FC = () => {
  let path = useParams<Params>();

  const [loadingAndValidation, setLoadingAndValidation] = useState<LoadingAndValidation>({ loading: true, valid: false });
  const [item, setItem] = useState<Item>({
    id: '',
    title: `${path.storename} - item`,
    price: 404.4,
    colours: ['red', 'yellow', 'green'],
    sizes: ['s', 'm', 'l'],
    viewerImages: [ViewerLoading],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa augue, congue nec ex id, maximus rhoncus lorem. Curabitur sed finibus ipsum. Fusce massa tellus, fermentum at rutrum a, blandit vitae ex. Nulla ut nisl mi. Curabitur rhoncus facilisis orci, vitae fermentum eros tincidunt in. Praesent feugiat vel tortor in pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor mattis nisl vel tristique. Cras ut consequat nibh. Nam eros urna, lobortis vel volutpat sed, efficitur sit amet arcu. Nam ultricies suscipit velit, sed laoreet ex sagittis sit amet. Proin porta est eu mauris feugiat vestibulum. Etiam dapibus vestibulum accumsan. In at lectus vitae enim tincidunt ultricies eget nec libero.',
    frequency: 0,
  });

  const GetItem = async () => {
    const itemData = await firestore.collection('Items').doc(path.itemid).get();

    if (!itemData.exists) {
      setLoadingAndValidation({ loading: true, valid: false });
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
      setLoadingAndValidation({ loading: false, valid: true });
    }
  };

  useEffect(() => {
    GetItem();
  });

  return (
    <React.Fragment>
      <Navbar />
      {/* Create some cart that appears to redirect them back */}
      {loadingAndValidation.valid ? null : <h1>NO!</h1>}
      <ItemSection
        id={item.id}
        title={item?.title}
        price={item?.price}
        colours={item?.colours}
        sizes={item?.sizes}
        viewerImages={item?.viewerImages}
        frequency={item?.frequency}
        description={item?.description}
        isLoading={loadingAndValidation.loading}
      />
    </React.Fragment>
  );
};

export default ItemPageIndex;
