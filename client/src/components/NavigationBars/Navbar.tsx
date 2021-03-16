import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ShoppingCartContext } from '../ShoppingCartContext';
import { useOnCheckout } from "../Utils/useOnCheckout"

import { ReactComponent as ShoppingCartIcon } from '../../images/shoppingCartIcon.svg';
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import { ReactComponent as MenueBtn } from '../../images/menueBtn.svg';

import {NavbarDropDown} from "./NavbarDropDown"
const Searchbar = React.lazy(() => import('./Searchbar'));

export const Navbar: React.FC = () => {
  const { onCheckout } = useOnCheckout()
  const [isDropDownActive, setIsDropDownActive] = useState<boolean>(false);
  const { shoppingCartLength } = useContext(ShoppingCartContext);

  const loaction = useLocation()

  useEffect(() => {setIsDropDownActive(false)}, [loaction])

  return (
    <React.Fragment>
      <nav id="NavbarContainer" style={{display : onCheckout ? "none" : ""}} >
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
