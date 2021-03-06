import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductCardModel, ReturnedError, Error } from './Interfaces';

export const useSearch = (payload: { query: string; operation: number }, pageNumber: number) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [error, setError] = useState<Error>({ isError: false, message: '' });
  const [searchResult, setSearchResult] = useState<ProductCardModel[]>([]);

  useEffect(() => {
    setLoading(true);
    setError((prevError) => {
      return { ...prevError, isError: false };
    });

    axios({
      method: 'GET',
      url: `https://dropitserver.herokuapp.com/search/${payload.query}`,
      params: { operation: payload.operation, page: pageNumber },
    })
      .then((response) => {
        if (response.data.length === 0 && pageNumber === 1) {
          setError({ isError: true, message: 'Sorry, no products found. Try being more specific' });
        } else {
          setSearchResult((previousProducts) => {
            return previousProducts.concat(response.data);
          });
          setHasMore(response.data.length > 0);
        }
        setLoading(false);
      })
      .catch((ResError) => {
        try {
          const error: ReturnedError = ResError.response.data;

          switch (error.status) {
            case 400 || 500:
              setError({ isError: true, message: 'An unexpected error occured' });
          }
        } catch (error) {
          setError({
            isError: true,
            message: 'An unexpected error occured. Please check you internet connection and try again',
          });
        }

        setLoading(false);
      });
  }, [pageNumber, payload.query, payload.operation]);

  return { loading, error, searchResult, hasMore };
};
