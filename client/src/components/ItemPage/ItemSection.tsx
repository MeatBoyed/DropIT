import React, { useContext, useEffect, useState } from 'react';
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
  frequency: number;
  isLoading: boolean;
}

export const ItemSection: React.FC<Props> = ({
  id,
  title,
  price,
  colours,
  sizes,
  viewerImages,
  description,
  frequency,
  isLoading,
}) => {
  const url = useLocation().pathname;
  const { AddToShoppingCart } = useContext(ShoppingCartContext);

  const [colour, setColour] = useState<string>('');
  const [size, setSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [frequencyArray, setFrequencyArray] = useState<object[]>();

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

  useEffect(() => {
    const array: object[] = [];
    for (let i = 1; i <= frequency; i++) {
      array.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    setFrequencyArray(array);
  }, [frequency]);

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
        {/* <div className="itemQuantity">
          <h3 className="sectionTitle">Qty</h3>
          <div className="quantitySelect">
            <select
              name="quantity"
              id="quantity"
              defaultValue={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            >
              {frequencyArray?.map((select) => select)}
            </select>
          </div>
        </div> */}
        <div className="itemDetail">
          <p style={{ filter: isLoading ? 'blur(2px)' : 'none' }}>{description}</p>
        </div>
      </div>
    </section>
  );
};
