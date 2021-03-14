import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { ShoppingCartItem, ShoppingCartContext } from '../ShoppingCartContext';
import { ProductDescription } from '../Utils/Interfaces';

import Selector from './Selector';

export const ItemDetailsViewer: React.FC<ProductDescription> = ({
  id,
  currentURL,
  title,
  price,
  vendor,
  colours,
  sizes,
  description,
  rating,
  frequency,
}) => {
  const history = useHistory();
  const { AddToShoppingCart, ItemInCart } = useContext(ShoppingCartContext);

  const [colour, setColour] = useState<string>('');
  const [size, setSize] = useState<string>('');
  const [addToCart, setAddedtoCart] = useState<boolean>(ItemInCart(id));

  const AddToCartHandler = () => {
    if (addToCart) return history.push('/shoppingcart');
    if (frequency !== 0) {
      let cartItem: ShoppingCartItem = {
        id: id,
        title: title,
        price: price,
        colour: colour,
        size: size,
        url: currentURL,
      };
      AddToShoppingCart(cartItem);
      setAddedtoCart(true);
    }
  };
  return (
    <div className="ItemDetailSection">
      <div className="itemDetailsContainer">
        <p className="itemTitle">{title}</p>
        <p className="itemPrice">${price}</p>
        <div className="itemMetadataContainer">
          <Link className="vendorTitle" to={`/${vendor}`}>
            {vendor} -
          </Link>
          <p className="rating">{rating}</p>
        </div>
      </div>
      <div className="itemSelectorsContainer">
        {colours.length !== 0 && (
          <Selector onChange={(newValue) => setColour(newValue)} title={'Colours'} options={colours} />
        )}
        {sizes.length !== 0 && <Selector NOMARGIN="NOMARGIN" onChange={(newValue) => setSize(newValue)} title={'Sizes'} options={sizes} />}
      </div>
      <div className="ButtonsContainer">
        {frequency !== 0 ? (
          <button onClick={AddToCartHandler} className={addToCart ? 'activatedBtn' : 'addToCartBtn'}>
            {addToCart ? 'View Cart' : 'Add To Cart'}
          </button>
        ) : (
          <button className="addToCartBtn">Out Of Stock</button>
        )}
        {addToCart && (
          <button onClick={() => history.goBack()} className="buyNowBtn">
            Continue Shopping
          </button>
        )}
      </div>
      <div className="itemDetail">
        <p>{description}</p>
      </div>
    </div>
  );
};
