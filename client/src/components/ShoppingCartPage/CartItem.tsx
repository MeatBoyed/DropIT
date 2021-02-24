import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../../firebase';
import { ShoppingCartContext } from '../ShoppingCartContext';

// Temp Cart Image loader image
import CartImageLoader from '../../images/CartImageLoader.png';

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
          {/* Quantity seltor here */}
          <div className="formSelect">
            <select name="size" id="size" className="formSelector">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              {/* {quantity?.map((size) => (
                <option value={size}>{size}</option>
              ))} */}
            </select>
          </div>
        </div>
        <p className="totalPrice">$500</p>
      </div>
    </div>
  );
};
