import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  shoppingCartLength: number;
}

export const NavbarDropDown: React.FC<Props> = ({ shoppingCartLength }) => {
  return (
    <div id="NavbarDropDown">
      <div className="dropdownItem">
        <div className="searchSeaction">
          <svg className="searchIcon" width="17.312" height="17.932" viewBox="0 0 17.312 17.932">
            <path
              d="M18.033,16.333l-4.268-4.439A7.237,7.237,0,1,0,8.224,14.48a7.162,7.162,0,0,0,4.148-1.31l4.3,4.472a.944.944,0,1,0,1.361-1.309ZM8.224,1.889A5.351,5.351,0,1,1,2.873,7.24,5.357,5.357,0,0,1,8.224,1.889Z"
              transform="translate(-0.984)"
              fill="#262626"
            />
          </svg>
          <input type="text" name="search" id="search" placeholder="search" className="searchInput" />
        </div>
      </div>
      <div className="dropdownItem">
        <div className="shoppingCartContainer">
          <svg width="15.583" height="18.828" viewBox="0 0 15.583 18.828">
            <path
              d="M33.579,18.041,32.433,5.282a.676.676,0,0,0-.673-.615H29.4V3.6a3.6,3.6,0,1,0-7.2,0V4.667H19.831a.676.676,0,0,0-.673.615l-1.15,12.809a.676.676,0,0,0,.673.736H32.912a.676.676,0,0,0,.676-.676A.689.689,0,0,0,33.579,18.041ZM23.547,3.6a2.25,2.25,0,1,1,4.5,0V4.667h-4.5ZM19.42,17.476,20.449,6.019H22.2V7.227a.676.676,0,0,0,1.352,0V6.019h4.5V7.227a.676.676,0,1,0,1.352,0V6.019h1.745l1.029,11.458H19.42Z"
              transform="translate(-18.005)"
              fill="#b8b8b8"
            />
          </svg>
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
