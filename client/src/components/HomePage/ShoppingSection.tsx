import React, { useState, useEffect } from 'react';
import { usePaginate, Query } from '../usePaginate';
import { firestore } from '../../firebase';

// Import Components
import { StoreCard } from './StoreCard';
import { ItemCard } from '../ItemCard';

interface Vendors {
  id: string;
  name: string;
  logo: string;
}

interface Items {
  id: string;
  vendor: string;
  title: string;
  price: number;
  mainImage: string;
}

export const ShoppingSection: React.FC = () => {
  const [query, setQuery] = useState<Query>({ field: 'frequency', condition: '>=', value: '1' });
  const [pageNumber, setPageNumber] = useState<number>(1);

  const { loading, error, items, hasMore } = usePaginate(query, pageNumber);

  const HandleStoreSelect = (vendorName: string) => {
    setQuery({ field: 'vendor', condition: '==', value: vendorName });
    setPageNumber(1);
  };

  const [vendors, setVendors] = useState<Vendors[]>([]);
  // const [items, setItems] = useState<Items[]>([]);

  // Get all vendor icons, don't have any vendor selected (highlighted like they are)
  const GetVendors = async () => {
    const vendors = await firestore.collection('Vendors').get();
    vendors.docs.forEach((doc) => {
      setVendors((vendors) => [
        ...vendors,
        {
          id: doc.id,
          name: doc.data()!.name,
          logo: doc.data()!.logoImage,
        },
      ]);
    });
  };

  // const GetItems = async () => {
  //   // Items reference
  //   const itemsRef = firestore.collection('Items');

  //   // Start at snapshot
  //   let startAtSnapshot = await itemsRef.limit(5).get();
  //   startAtSnapshot.docs.forEach((doc: any) => {
  //     setItems((items) => [
  //       ...items,
  //       {
  //         id: doc.id,
  //         vendor: doc.data().vendor,
  //         title: doc.data().title,
  //         price: doc.data().price,
  //         mainImage: doc.data().images.mainImage,
  //       },
  //     ]);
  //   });
  // };

  useEffect(() => {
    // GetItems();
    GetVendors();
  }, []);

  return (
    <section id="ShoppingSection">
      <div id="SelectStoresContainer">
        <h3 className="sectionTitle">Choose Store</h3>
        <div className="storeSelectContainer">
          {vendors.map((vendor) => (
            // <StoreCard key={vendor.id} vendorName={vendor.name} vendorLogo={vendor.logo} />
            <div
              key={vendor.id}
              onClick={() => {
                setQuery({ field: 'vendor', condition: '==', value: vendor.name });
              }}
              className="storeCard"
            >
              <img src={vendor.logo} />
            </div>
          ))}
        </div>
      </div>
      <div id="StoreItemsContainer">
        <h3 className="sectionTitle">Beats Products</h3>
        <div className="itemsContainer">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              url={`/${item.vendor}/${item.id}`}
              title={item.title}
              price={item.price}
              mainImage={item.mainImage}
            />
          ))}
        </div>
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error...'}</div>
      </div>
    </section>
  );
};
