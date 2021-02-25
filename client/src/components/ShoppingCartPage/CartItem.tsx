import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../../firebase';
import { ShoppingCartContext } from '../ShoppingCartContext';

// Temp Cart Image loader image
import CartImageLoader from '../../images/CartImageLoader.png';
import Selector from '../ItemPage/Selector';

interface props {
  index: number;
  id: string;
  url: string;
  title: string;
  price: number;
  colour: string;
  size: string;
}

interface ItemData {
  image: string;
  frequency: number;
}

export const CartItem: React.FC<props> = ({ id, url, title, price, colour, size }) => {
  const { RemoveFromShoppingCart } = useContext(ShoppingCartContext);
  const [itemData, setItemData] = useState<ItemData>({ image: CartImageLoader, frequency: 1 });
  const [frequencyList, setFrequencyList] = useState<string[]>(['1']);
  const [frequency, setFrequency] = useState<string>();

  const FetchData = () => {
    const itemRef = firestore.collection('Items').doc(id).get();

    itemRef
      .then((itemSnpashot) => {
        setItemData({ image: itemSnpashot.data()!.images.cartImage, frequency: itemSnpashot.data()!.frequency });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const PopulateFrequencyList = () => {
    let temp: string[] = [];
    for (let i = 1; i <= itemData.frequency; i++) {
      temp.push(`${i}`);
    }
    setFrequencyList(temp);
  };

  useEffect(() => {
    PopulateFrequencyList();
  }, [itemData.frequency]);

  useEffect(() => FetchData());

  return (
    <div className="CartItem">
      <div className="cartItemDetails">
        <img src={itemData?.image} alt="" className="thumbnail" />
        <div className="cartItemInfo">
          <Link to={url}>
            <p className="itemTitle">{title}</p>
          </Link>
          <p className="info">
            {colour} {colour != '' && size != '' && '/'} {size}
          </p>
          <p onClick={RemoveFromShoppingCart} className="removeBtn">
            Remove
          </p>
        </div>
      </div>
      <div className="mobileFields">
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <div className="otherCartItemDetails">
        <p className="cartItemPrice">${price}</p>
        <div className="cartItemPropContainer">
          <Selector title={''} options={frequencyList} onChange={(newValue) => setFrequency(newValue)} />
        </div>
        <p className="totalPrice">$500</p>
      </div>
    </div>
  );
};
