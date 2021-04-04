import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ShoppingCartContext } from '../ShoppingCartContext';
import { useOnCheckout } from '../Utils/useOnCheckout';

import { ReactComponent as CheckoutIcon } from '../../images/checkoutIcon.svg';
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import { ReactComponent as MenueBtn } from '../../images/menueBtn.svg';

import { NavbarDropDown } from './NavbarDropDown';
const Searchbar = React.lazy(() => import('./Searchbar'));

export const Navbar: React.FC = () => {
  const { onCheckout } = useOnCheckout();
  const [isDropDownActive, setIsDropDownActive] = useState<boolean>(false);
  const { shoppingCartLength } = useContext(ShoppingCartContext);

  const loaction = useLocation();

  useEffect(() => {
    setIsDropDownActive(false);
  }, [loaction]);

  return (
    <React.Fragment>
      <nav id="NavbarContainer" style={{ display: onCheckout ? 'none' : '' }}>
        <Searchbar />
        <Link to="/">
          <LogoIcon className="logoIcon" />
        </Link>
        <div className="shoppingCart">
          <Link className="shoppingCartIcon" to="/shoppingcart">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z"
                fill={shoppingCartLength !== 0 ? '#6987C9' : 'null'}
              />
            </svg>
          </Link>
          <Link className="checkoutButton" to="/checkout">
            <CheckoutIcon />
          </Link>
        </div>
        <MenueBtn onClick={() => setIsDropDownActive(!isDropDownActive)} className="menueBtn" />
      </nav>
      {isDropDownActive && <NavbarDropDown shoppingCartLength={shoppingCartLength} />}
    </React.Fragment>
  );
};
