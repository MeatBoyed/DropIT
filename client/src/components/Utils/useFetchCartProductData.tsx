import { useState, useEffect } from 'react';
import axios from 'axios';
import { CartProduct, ReturnedError, Error } from './Interfaces';

export const useFetchCartProductData = (productID: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>({ isError: false, message: '' });
  const [cartProductData, setCartProductData] = useState<CartProduct>();

  useEffect(() => {
    setLoading(true);

    axios
      .get(`http://localhost:5000/product/${productID}`)
      .then((response) => {
        setCartProductData({ image: response.data.thumbnails[0].cartThumbnail, frequency: response.data.frequency });
      })
      .catch((ResError) => {
        const error: ReturnedError = ResError.response.data;

        switch (error.status) {
          case 400:
            setError({ isError: true, message: 'An unexpected error occured' });
        }

        setLoading(false);
      });
  }, []);

  return { loading, error, cartProductData };
};
