import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase';

// Import Components
import { StoreCard } from './StoreCard';
import { ItemCard } from '../ItemCard';

interface Vendors {
  id: string;
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
  const [vendors, setVendors] = useState<Vendors[]>([]);
  const [items, setItems] = useState<Items[]>([]);

  // Get all vendor icons, don't have any vendor selected (highlighted like they are)
  const GetVendors = async () => {
    const vendors = await firestore.collection('Vendors').get();
    vendors.docs.forEach((doc) => {
      setVendors((vendors) => [
        ...vendors,
        {
          id: doc.id,
          logo: doc.data().logoImage,
        },
      ]);
    });
  };

  const GetItems = async () => {
    const items = await firestore.collection('Items').get();
    items.docs.forEach((doc) => {
      setItems((items) => [
        ...items,
        {
          id: doc.id,
          vendor: doc.data().vendor,
          title: doc.data().title,
          price: doc.data().price,
          mainImage: doc.data().images.mainImage,
        },
      ]);
    });
  };

  useEffect(() => {
    GetVendors();
    GetItems();
  }, []);

  return (
    <section id="ShoppingSection">
      <div id="SelectStoresContainer">
        <h3 className="sectionTitle">Choose Store</h3>
        <div className="storeSelectContainer">
          {vendors.map((vendor) => (
            <StoreCard key={vendor.id} vendorLogo={vendor.logo} />
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
      </div>
    </section>
  );
};
