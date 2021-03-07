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
      .get(`http://localhost:5000/product/cartThumbnail/${productID}`)
      .then((response) => {
        console.log(response.data.thumbnails.cartThumbnail);
        setCartProductData({ image: response.data.thumbnails.cartThumbnail, frequency: response.data[0].frequency });
      })
      .catch((ResError) => {
        setLoading(false);
      });
  }, []);

  return { loading, error, cartProductData };
};
