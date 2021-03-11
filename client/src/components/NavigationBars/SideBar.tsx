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
          <a className="tag" href="/search?f=Clothes">
            Clothes
          </a>
        </li>
        <li className="link">
          <a className="tag" href="/search?f=Books">
            Books
          </a>
        </li>
        <li className="link">
          <a href="/search?f=House+Appliance" className="tag">
            House Appliances
          </a>
        </li>
        <li className="link">
          <a href="/search?f=Tech" className="tag">
            Tech
          </a>
        </li>
        <li className="link">
          <a href="/search?f=Music" className="tag">
            Music
          </a>
        </li>
        <li className="link">
          <Link className="tag" to="">
            About
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default React.memo(SideBar);
