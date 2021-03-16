import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductCardModel, Error } from './Interfaces';

export const usePaginate = (pageNumber: number) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [error, setError] = useState<Error>({ isError: false, message: '' });
  const [products, setProducts] = useState<ProductCardModel[]>([]);

  useEffect(() => {
    setLoading(true);
    setError((prevError) => {
      return { ...prevError, isError: false };
    });

    axios({
      method: 'GET',
      url: 'http://localhost:5000/',
      params: { page: pageNumber },
    })
      .then((response) => {
        setProducts((previousProducts) => {
          return previousProducts.concat(response.data);
        });
        setHasMore(response.data.length > 0);
        setLoading(false);
      })
      .catch((error) => {
        setError({
          isError: true,
          message: 'An unexpected error occured. Please check your internet connection and try again',
        });
        setLoading(false);
      });
  }, [pageNumber]);

  return { loading, error, products, hasMore };
};
