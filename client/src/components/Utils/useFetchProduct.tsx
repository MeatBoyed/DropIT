import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductViewerModel, ReturnedError, Error } from './Interfaces';

export const useFetchProduct = (productID: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [product, setProduct] = useState<ProductViewerModel>({
    id: productID,
    title: '',
    price: 0,
    colours: [],
    sizes: [],
    viewerImages: [],
    description: '',
    rating: 0,
    frequency: 0,
  });

  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://localhost:5000/product/${productID}`,
    })
      .then((response) => {
        setProduct({
          id: productID,
          title: response.data.title,
          price: response.data.price,
          colours: response.data.colours,
          sizes: response.data.sizes,
          viewerImages: response.data.viewerImages,
          description: response.data.description,
          rating: response.data.rating,
          frequency: response.data.frequency,
        });
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage("The product you're looking for doesn't seem to exists.");
        setLoading(false);
      });
  });

  return { loading, errorMessage, product };
};
