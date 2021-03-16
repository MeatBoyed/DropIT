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
        <Link to="/shoppingcart">
          <div className="shoppingCartContainer">
            <ShoppingCartIcon />
            <p>Cart ({shoppingCartLength})</p>
          </div>
        </Link>
      </div>
      <div className="dropdownItem">
        <Link to="/checkout">Checkout</Link>
      </div>
      <div className="dropdownItem">
        <a className="tag" href="/search?f=Clothing">
          Clothes
        </a>
      </div>
      <div className="dropdownItem">
        <a className="tag" href="/search?f=Accessories">
          Accessories
        </a>
      </div>
    </div>
  );
};

export default NavbarDropDown;
