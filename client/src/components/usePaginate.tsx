import { useEffect, useState } from 'react';
import { firestore } from '../firebase';

// Give better names to parameters for query
export interface Query {
  field: string;
  condition: '>=' | '==';
  value: string;
}

interface Items {
  id: string;
  vendor: string;
  title: string;
  price: number;
  mainImage: string;
}

export const usePaginate = (query: Query, pageNumber: number) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [items, setItems] = useState<Items[]>([]);

  useEffect(() => {
    setItems([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const itemsRef = firestore.collection('Items');

    // firstQuery = reference.where.limit() and can use get()
    // Add an OrderBy
    let firstQuery = itemsRef
      .where(query.field, query.condition, query.value)
      .limit(5)
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          setItems((items) => {
            return [
              ...items,
              {
                id: doc.id,
                vendor: doc.data().vendor,
                title: doc.data().title,
                price: doc.data().price,
                mainImage: doc.data().images.mainImage,
              },
            ];
          });
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
    // newQueruy = firstQuery.start(previousDoc which is the last document fetched)
    // Alt firstQuery = firstQuery.start(previousDoc) and use get()
  }, [query, pageNumber]);

  return { loading, error, items, hasMore };
};
