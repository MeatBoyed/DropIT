import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductCardModel, ReturnedError, Error } from './Interfaces';

export const useSearch = (pageNumber: number, query: string) => {
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
      url: `http://localhost:5000/search/${query}`,
      params: { page: pageNumber },
    })
      .then((response) => {
        if (response.data.length == 0 && pageNumber == 1) {
          setError({ isError: true, message: 'Sorry, no products found. Try being more specific' });
        }
        setSearchResult((previousProducts) => {
          return previousProducts.concat(response.data);
        });
        setHasMore(response.data.length > 0);
        setLoading(false);
      })
      .catch((ResError) => {
        const error: ReturnedError = ResError.response.data;
        console.log(error);

        switch (error.status) {
          case 400 || 500:
            setError({ isError: true, message: 'An unexpected error occured' });
        }
        setLoading(false);
      });
  }, [pageNumber, query]);

  return { loading, error, searchResult, hasMore };
};
