import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ShoppingCartIcon } from '../../images/shoppingCartIcon.svg';
const Searchbar = React.lazy(() => import('./Searchbar'));

interface Props {
  shoppingCartLength: number;
}

export const NavbarDropDown: React.FC<Props> = ({ shoppingCartLength }) => {
  return (
    <div id="NavbarDropDown">
      <div className="dropdownItem">
        <Searchbar />
      </div>
      <div className="dropdownItem">
        <div className="shoppingCartContainer">
          <ShoppingCartIcon />
          <p>Cart ({shoppingCartLength})</p>
        </div>
      </div>
      <div className="dropdownItem">
        <Link to="">Checkout</Link>
      </div>
      <div className="dropdownItem">
        <Link to="">Clothes</Link>
      </div>
      <div className="dropdownItem">
        <Link to="">Books</Link>
      </div>
      <div className="dropdownItem">
        <Link to="">House Appliances</Link>
      </div>
      <div className="dropdownItem">
        <Link to="">Tech</Link>
      </div>
      <div className="dropdownItem">
        <Link to="">About</Link>
      </div>
    </div>
  );
};

export default NavbarDropDown;
