import React, { useContext } from 'react';
import { ShoppingCartContext, ShoppingCartItem } from '../ShoppingCartContext';

import { CartItem } from './CartItem';

// Import Thumbails (temp)
import thumbnailIcon from '../../images/MainImage1.png';

interface Props {}

export const ShoppingCartSection: React.FC<Props> = () => {
  const { shoppingCart } = useContext(ShoppingCartContext);

  return (
    <section id="ShoppingCartSection">
      <div className="titlesContainer">
        <button className="checkoutBtn">
          <p>Checkout</p>
          <svg width="12.153" height="13.782" viewBox="0 0 12.153 13.782">
            <g transform="translate(-214.616 87)">
              <path
                d="M106.74,111.73a.437.437,0,0,0,.434.392l.045,0a.437.437,0,0,0,.389-.479l-.2-1.948a.437.437,0,1,0-.869.09Z"
                transform="translate(113.466 -189.938)"
              />
              <path
                d="M150.633,112.12l.045,0a.437.437,0,0,0,.434-.392l.2-1.948a.437.437,0,0,0-.869-.09l-.2,1.948A.437.437,0,0,0,150.633,112.12Z"
                transform="translate(72.305 -189.938)"
              />
              <path
                d="M77.034,190.329a1.352,1.352,0,1,0,1.351,1.351A1.353,1.353,0,0,0,77.034,190.329Zm0,1.83a.478.478,0,1,1,.478-.479A.479.479,0,0,1,77.034,192.159Z"
                transform="translate(142.524 -266.249)"
              />
              <path
                d="M154.474,190.329a1.352,1.352,0,1,0,1.352,1.351A1.353,1.353,0,0,0,154.474,190.329Zm0,1.83a.478.478,0,1,1,.478-.479A.479.479,0,0,1,154.474,192.159Z"
                transform="translate(69.591 -266.249)"
              />
              <path
                d="M26.059,53.558a.437.437,0,0,0-.345-.17h-8.7l-.365-1.405a.437.437,0,0,0-.423-.327H14.434a.437.437,0,1,0,0,.873h1.452l.362,1.393c0,.009,0,.017.007.026L17.6,59.13a.437.437,0,0,0,.423.327h6.338a.437.437,0,0,0,.423-.327l1.351-5.2A.437.437,0,0,0,26.059,53.558Zm-2.034,5.026H18.362l-1.124-4.322h7.911Z"
                transform="translate(200.619 -135.649)"
              />
              <path
                d="M99.54,2.286H102.1l-.668.668a.437.437,0,1,0,.617.617l1.412-1.412a.437.437,0,0,0,0-.617L102.045.128a.437.437,0,0,0-.617.617l.668.668H99.54a.437.437,0,1,0,0,.873Z"
                transform="translate(120.467 -87)"
              />
            </g>
          </svg>
        </button>
      </div>

      <div className="shoppingCartItemsContainer">
        {shoppingCart.map((item: ShoppingCartItem, index: number) => (
          <CartItem index={index} id={item.id} title={item.title} price={item.price} colour={item.colour} size={item.size} quantity={item.quantity} />
        ))}
      </div>
    </section>
  );
};
