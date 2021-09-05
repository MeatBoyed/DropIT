import React from 'react';
import { Link } from 'react-router-dom';

import { useOnCheckout } from '../Utils/useOnCheckout';

const SideBar: React.FC = () => {
  const { onCheckout } = useOnCheckout();

  return (
    <section className="SideNavbarSection" style={{ display: onCheckout ? 'none' : '' }}>
      {/* Optional Logo */}
      <ul className="linksContainer">
        <li className="link">
          <Link className="tag" to="/search?f=Clothing">
            Clothes
          </Link>
        </li>
        <li className="link">
          <Link className="tag" to="/search?f=Accessories">
            Accessories
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default React.memo(SideBar);
