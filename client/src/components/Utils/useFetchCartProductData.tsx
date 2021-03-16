import { useState, useEffect } from 'react';
import axios from 'axios';
import { CartProduct } from './Interfaces';

export const useFetchCartProductData = (productID: string) => {
  const [cartProductData, setCartProductData] = useState<CartProduct>({ image: '', frequency: 1, frequencyList: ['1'] });

  useEffect(() => {
    let temp: string[] = [];
    for (let i = 1; i <= cartProductData.frequency && i <= 15; i++) {
      temp.push(`${i}`);
    }
    setCartProductData((prevData) => {
      return { ...prevData, frequencyList: temp };
    });
  }, [cartProductData.frequency]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/cartThumbnail/${productID}`)
      .then((response) => {
        setCartProductData((prevData) => {
          return { ...prevData, image: response.data.thumbnails.cartThumbnail, frequency: response.data.frequency };
        });
      })
      .catch((ResError) => {
        console.log(ResError);
      });
  }, [productID]);

  return { cartProductData };
};
