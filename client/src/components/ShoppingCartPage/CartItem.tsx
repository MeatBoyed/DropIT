import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../../firebase';
import { ShoppingCartContext } from '../ShoppingCartContext';

export interface props {
  index: number;
  id: string;
  url: string;
  title: string;
  price: number;
  colour: string;
  size: string;
  quantity: number;
}
export const CartItem: React.FC<props> = ({ id, url, title, price, colour, size, quantity }) => {
  const { RemoveFromShoppingCart } = useContext(ShoppingCartContext);
  const [cartImage, setCartImage] = useState<string>();

  const FetchCartImage = async () => {
    const image = await firestore.collection('Items').doc(id).get();
    setCartImage(image.data()!.images.cartImage);
  };

  useEffect(() => {
    FetchCartImage();
  }, []);

  return (
    <div className="CartItem">
      <svg className="favouriteIcon" width="17" height="17" viewBox="0 0 17 17">
        <g transform="translate(-150.604 -262.604)">
          <circle cx="8.5" cy="8.5" r="8.5" transform="translate(150.604 262.604)" fill="#b8b8b8" />
          <g transform="translate(154.355 267.391)">
            <g transform="translate(0 0)">
              <path
                d="M4.558,39.265C1.883,36.925,0,35.685,0,33.713A2.585,2.585,0,0,1,2.519,31a2.508,2.508,0,0,1,2.222,1.5A2.508,2.508,0,0,1,6.963,31a2.585,2.585,0,0,1,2.519,2.713c0,1.971-1.881,3.209-4.558,5.551A.278.278,0,0,1,4.558,39.265Z"
                transform="translate(0 -31)"
                fill="#fff"
              />
            </g>
          </g>
        </g>
      </svg>
      <Link to={url}>
        <img src={cartImage} alt="" className="thumbnail" />
      </Link>
      <div className="cartItemInfo">
        <Link to={url}>
          <p className="itemTitle">{title}</p>
        </Link>
        <Link to={url}>
          <p className="itemPrice">${price}</p>
        </Link>
        <div className="cartItemPropContainer">
          <button className="size">{size}</button>
          <svg className="color" width={36} height={36} viewBox="0 0 36 36">
            <defs>
              <filter id="colour" x={0} y={0} width={36} height={36} filterUnits="userSpaceOnUse">
                <feOffset dy={3} />
                <feGaussianBlur stdDeviation={3} result="blur" />
                <feFlood floodColor="#060dd9" floodOpacity="0.149" />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
              </filter>
            </defs>
            <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#colour)">
              <g id="colour-2" data-name="colour" transform="translate(9 6)" fill={colour} stroke="#fff" strokeWidth={3}>
                <circle cx={9} cy={9} r={9} stroke="none" />
                <circle cx={9} cy={9} r="7.5" fill="none" />
              </g>
            </g>
          </svg>
          <p>Qty: {quantity}</p>
        </div>
      </div>
      <svg
        onClick={RemoveFromShoppingCart}
        className="removeIcon"
        width="23.257"
        height="23.257"
        viewBox="0 0 23.257 23.257"
      >
        <path d="M11.628,0A11.628,11.628,0,1,0,23.257,11.628,11.642,11.642,0,0,0,11.628,0Zm5.814,13.082H5.814V10.175H17.442Z" />
      </svg>
    </div>
  );
};
