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
        <Link to="">Checkout</Link>
      </div>
      <div className="dropdownItem">
        <a className="tag" href="/search?f=Clothes">
          Clothes
        </a>
      </div>
      <div className="dropdownItem">
        <a className="tag" href="/search?f=Books">
          Books
        </a>
      </div>
      <div className="dropdownItem">
        <a href="/search?f=House+Appliance" className="tag">
          House Appliances
        </a>
      </div>
      <div className="dropdownItem">
        <a href="/search?f=Tech" className="tag">
          Tech
        </a>
      </div>
      <div className="dropdownItem">
        <a href="/search?f=Music" className="tag">
          Music
        </a>
      </div>
      <div className="dropdownItem">
        <Link to="">About</Link>
      </div>
    </div>
  );
};

export default NavbarDropDown;
