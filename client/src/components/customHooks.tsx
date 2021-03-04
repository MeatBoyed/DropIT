import axios from 'axios';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase';

interface ProductCardModel {
  id: string;
  vendor: string;
  title: string;
  price: number;
  mainThumbnail: string;
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
  const [products, setProducts] = useState<ProductCardModel[]>([]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    let cancel;

    axios({
      method: 'GET',
      url: 'http://localhost:5000/products',
      params: { page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((response) => {
        response.data.forEach((product: any) => {
          setProducts((prevProduct) => {
            return [
              ...prevProduct,
              {
                id: product._id,
                title: product.title,
                price: product.price,
                vendor: product.vendor,
                mainThumbnail: product.thumbnails[0].mainThumbnail,
              },
            ];
          });
        });
        setHasMore(response.data.length > 0);
        setLoading(false);
      })
      .catch((error) => {
        // Add error catching and telling the user how to fix the error
        console.log(error);
        setLoading(false);
        setError(true);
      });

    // setLastDoc(docSnapShot.docs[docSnapShot.docs.length - 1]);
  }, [pageNumber]);

  return { loading, error, products, hasMore };
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
        if (error.name === 'TypeError') {
          setErrorMessage("The product you're looking for doesn't seem to exists.");
        } else {
          setErrorMessage('An unexpected error occured. Try refreshing the page');
        }

        setLoading(false);
      });
  });

  return { loading, errorMessage, item };
};
