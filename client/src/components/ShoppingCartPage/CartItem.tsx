import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../../firebase';
import { ShoppingCartContext } from '../ShoppingCartContext';

// Temp Cart Image loader image
import CartImageLoader from '../../images/CartImageLoader.png';
import Selector from '../ItemPage/Selector';

export interface props {
  index: number;
  id: string;
  url: string;
  title: string;
  price: number;
  colour: string;
  size: string;
}
export const CartItem: React.FC<props> = ({ id, url, title, price, colour, size }) => {
  const { RemoveFromShoppingCart } = useContext(ShoppingCartContext);
  const [cartImage, setCartImage] = useState<string>(CartImageLoader);
  const frequency = 12;

  const FetchCartImage = async () => {
    const image = await firestore.collection('Items').doc(id).get();
    setCartImage(image.data()!.images.cartImage);
  };

  useEffect(() => {
    FetchCartImage();
  });

  return (
    <div className="CartItem">
      <div className="cartItemDetails">
        <img src={cartImage} alt="" className="thumbnail" />
        <div className="cartItemInfo">
          <Link to={url}>
            <p className="itemTitle">{title}</p>
          </Link>
          <p className="info">White / S</p>
          <p onCanPlay={RemoveFromShoppingCart} className="removeBtn">
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
          <Selector title={''} options={['1', '2', '3', '4']} onChange={() => console.log('hello')} />
        </div>
        <p className="totalPrice">$500</p>
      </div>
    </div>
  );
};
