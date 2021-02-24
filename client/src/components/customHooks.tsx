import { type } from 'os';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase';

interface ItemCardModel {
  id: string;
  vendor: string;
  title: string;
  price: number;
  mainImage: string;
}

interface ItemViewerModel {
  id: string;
  title: string;
  price: number;
  colours: string[];
  sizes: string[];
  viewerImages: string[];
  description: string;
  frequency: number;
}

export const usePaginate = (pageNumber: number) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [items, setItems] = useState<ItemCardModel[]>([]);

  const [lastDoc, setLastDoc] = useState<object | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const itemsRef = firestore
      .collection('Items')
      .orderBy('frequency')
      .startAfter(lastDoc || 0)
      .limit(2);

    const itemsData = itemsRef.get();

    itemsData
      .then((docSnapShot) => {
        if (docSnapShot.empty) {
          setHasMore(false);
        }
        docSnapShot.forEach((doc) => {
          setItems((previousItems) => {
            return [
              ...previousItems,
              {
                id: doc.id,
                vendor: doc.data().vendor,
                title: doc.data().title,
                price: doc.data().price,
                mainImage: doc.data().images.mainImage,
              },
            ];
          });
        });
        setLastDoc(docSnapShot.docs[docSnapShot.docs.length - 1]);
        setLoading(false);
      })
      .catch((error) => {
        // Add error catching and telling the user how to fix the error
        console.log(error);
        setLoading(false);
        setError(true);
      });
  }, [pageNumber]);

  return { loading, error, items, hasMore };
};

export const useData = (itemId: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [item, setItem] = useState<ItemViewerModel>({
    id: itemId,
    title: '',
    price: 0,
    colours: [],
    sizes: [],
    viewerImages: [],
    description: '',
    frequency: 0,
  });

  useEffect(() => {
    const itemDataRef = firestore.collection('Items').doc(itemId).get();

    itemDataRef
      .then((itemSnapShot) => {
        setItem({
          id: itemId,
          title: itemSnapShot.data()!.title,
          price: itemSnapShot.data()!.price,
          colours: itemSnapShot.data()!.colours,
          sizes: itemSnapShot.data()!.sizes,
          viewerImages: itemSnapShot.data()!.images.viewerImages,
          description: itemSnapShot.data()!.description,
          frequency: itemSnapShot.data()!.frequency,
        });
        setLoading(false);
      })
      .catch((error) => {
        if (error.name == 'TypeError') {
          setErrorMessage("The product you're looking for doesn't seem to exists.");
        } else {
          setErrorMessage('An unexpected error occured. Try refreshing the page');
        }

        setLoading(false);
      });
  });

  return { loading, errorMessage, item };
};
