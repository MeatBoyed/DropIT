import React from 'react';

import { useOnCheckout } from '../Utils/useOnCheckout';

const SideBar: React.FC = () => {
  const { onCheckout } = useOnCheckout();

  return (
    <section className="SideNavbarSection" style={{ display: onCheckout ? 'none' : '' }}>
      {/* Optional Logo */}
      <ul className="linksContainer">
        <li className="link">
          <a className="tag" href="/search?f=Clothing">
            Clothes
          </a>
        </li>
        <li className="link">
          <a className="tag" href="/search?f=Accessories">
            Accessories
          </a>
        </li>
      </ul>
    </section>
  );
};

export default React.memo(SideBar);
