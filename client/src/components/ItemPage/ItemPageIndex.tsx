import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../../firebase';

// Import Componets
import { ItemSection } from './ItemSection';

// Redirect to 404 if path is invalid

// Loading Data ENSURE FILE DOWNLOADS FASTER THAN THE ACTUAL DATA
import ViewerLoading from '../../images/ViewerImageLoading.png';

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
    title: `
    Brave x Gala Games: Mirandus Unisex Hoodie (Limited Edition)`,
    price: 404.4,
    colours: ['red', 'yellow', 'green'],
    sizes: ['s', 'm', 'l'],
    viewerImages: [ViewerLoading],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa augue, congue nec ex id, maximus rhoncus lorem. Curabitur sed finibus ipsum. Fusce massa tellus, fermentum at rutrum a, blandit vitae ex. Nulla ut nisl mi. Curabitur rhoncus facilisis orci, vitae fermentum eros tincidunt in. Praesent feugiat vel tortor in pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor mattis nisl vel tristique. Cras ut consequat nibh. Nam eros urna, lobortis vel volutpat sed, efficitur sit amet arcu. Nam ultricies suscipit velit, sed laoreet ex sagittis sit amet. Proin porta est eu mauris feugiat vestibulum. Etiam dapibus vestibulum accumsan. In at lectus vitae enim tincidunt ultricies eget nec libero.',
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
  }, []);

  return (
    <React.Fragment>
      {/* Create some cart that appears to redirect them back */}
      {/* {loadingAndValidation.loading === false && loadingAndValidation.valid === true ? null : <h1>Item doesn't exist</h1>} */}
      <ItemSection
        id={item.id}
        title={item?.title}
        price={item?.price}
        colours={item?.colours}
        sizes={item?.sizes}
        viewerImages={item?.viewerImages}
        description={item?.description}
        isLoading={false}
      />
    </React.Fragment>
  );
};

export default ItemPageIndex;
