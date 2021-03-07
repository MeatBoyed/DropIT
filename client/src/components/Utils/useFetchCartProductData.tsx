import { useState, useEffect } from 'react';
import axios from 'axios';
import { CartProduct, ReturnedError, Error } from './Interfaces';

export const useFetchCartProductData = (productID: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>({ isError: false, message: '' });
  const [cartProductData, setCartProductData] = useState<CartProduct>({ image: '', frequency: 1, frequencyList: ['1'] });

  useEffect(() => {
    let temp: string[] = [];
    for (let i = 1; i <= cartProductData.frequency; i++) {
      temp.push(`${i}`);
    }
    setCartProductData((prevData) => {
      return { ...prevData, frequencyList: temp };
    });
  }, [cartProductData.frequency]);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`http://localhost:5000/product/cartThumbnail/${productID}`)
      .then((response) => {
        setCartProductData((prevData) => {
          return { ...prevData, image: response.data.thumbnails.cartThumbnail, frequency: response.data.frequency };
        });
      })
      .catch((ResError) => {
        setLoading(false);
      });
  }, []);

  return { loading, error, cartProductData };
};
