import React, { useContext, useState } from 'react';
import { ShoppingCartContext, ShoppingCartItem } from '../ShoppingCartContext';
import { useLocation } from 'react-router-dom';

interface Props {
  id: string;
  title: string;
  price: number;
  colours: string[];
  sizes: string[];
  viewerImages: string[];
  description: string;
  isLoading: boolean;
}

export const ItemSection: React.FC<Props> = ({ id, title, price, colours, sizes, viewerImages, description, isLoading }) => {
  const url = useLocation().pathname;
  const { AddToShoppingCart } = useContext(ShoppingCartContext);

  const [colour, setColour] = useState<string>('');
  const [size, setSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  const AddToShoppingCartHandler = () => {
    const item: ShoppingCartItem = {
      id: id,
      url: url,
      title: title,
      price: price,
      colour: colour,
      size: size,
      quantity: quantity,
    };
    AddToShoppingCart(item);
  };

  return (
    <section id="ItemSection">
      <div className="ItemDisplaySection">
        <img src={viewerImages[0]} alt="" />
      </div>

      <div className="ItemDetailSection">
        <div className="itemDetailsContainer">
          <p style={{ filter: isLoading ? 'blur(2px)' : 'none' }} className="itemTitle">
            {title}
          </p>
          <p style={{ filter: isLoading ? 'blur(2px)' : 'none' }} className="itemPrice">
            ${price}
          </p>
        </div>
        <div className="itemSelectorsContainer">
          {colours !== undefined ? (
            <div className="itemColours">
              <p className="formSelectTitle">Colour:</p>
              <div style={{ filter: isLoading ? 'blur(2px)' : 'none' }} className="formSelect">
                <select name="colour" id="colour" className="formSelector">
                  {colours.map((colour) => (
                    <option value={colour}>{colour}</option>
                  ))}
                </select>
              </div>
            </div>
          ) : null}
          {sizes !== undefined ? (
            <div className="itemSize">
              <p className="formSelectTitle">Size:</p>
              <div style={{ filter: isLoading ? 'blur(2px)' : 'none' }} className="formSelect">
                <select name="size" id="size" className="formSelector">
                  {sizes.map((size) => (
                    <option value={size}>{size}</option>
                  ))}
                </select>
              </div>
            </div>
          ) : null}
        </div>
        {/* After adding to cart, change Add to cart to View cart and show Continue shopping routing to previous page */}
        <div style={{ filter: isLoading ? 'blur(2px)' : 'none' }} className="ButtonsContainer">
          <button className="addToCartBtn" onClick={AddToShoppingCartHandler}>
            Add To Cart
          </button>
          <button className="buyNowBtn">Continue Shopping</button>
        </div>
        <div className="itemDetail">
          <p style={{ filter: isLoading ? 'blur(2px)' : 'none' }}>{description}</p>
        </div>
      </div>
    </section>
  );
};
