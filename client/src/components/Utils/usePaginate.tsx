import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductCardModel, ReturnedError, Error } from './Interfaces';

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
      .catch((ResError) => {
        const error: ReturnedError = ResError.response.data;

        switch (error.status) {
          case 400:
            setError({ isError: true, message: 'An unexpected error occured' });
        }
        setLoading(false);
      });
  }, [pageNumber]);

  return { loading, error, products, hasMore };
};
