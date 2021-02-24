import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from './ShoppingCartContext';

import { ReactComponent as ShoppingCartIcon } from '../images/shoppingCartIcon.svg';
import { ReactComponent as LogoIcon } from '../images/logo.svg';
import { ReactComponent as MenueBtn } from '../images/menueBtn.svg';

const NavbarDropDown = React.lazy(() => import('./NavbarDropDown'));
const Searchbar = React.lazy(() => import('./Searchbar'));

export const Navbar: React.FC = () => {
  const [isDropDownActive, setIsDropDownActive] = useState<boolean>(false);
  const { shoppingCartLength } = useContext(ShoppingCartContext);

  return (
    <React.Fragment>
      <nav id="NavbarContainer">
        <Searchbar />
        <Link to="/">
          <LogoIcon className="logoIcon" />
        </Link>
        <div className="shoppingCart">
          <Link className="shoppingCartIcon" to="/shoppingcart">
            <ShoppingCartIcon />
          </Link>
          <Link to="/shoppingCart">
            <p>Cart ({shoppingCartLength})</p>
          </Link>
          <Link className="checkoutButton" to="/checkout">
            Check Out
          </Link>
        </div>
        <MenueBtn onClick={() => setIsDropDownActive(!isDropDownActive)} className="menueBtn" />
      </nav>
      {isDropDownActive && <NavbarDropDown shoppingCartLength={shoppingCartLength} />}
    </React.Fragment>
  );
};
