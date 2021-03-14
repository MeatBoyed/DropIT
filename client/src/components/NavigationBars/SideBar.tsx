import React from 'react';
import { Link } from 'react-router-dom';

const SideBar: React.FC = () => {
  return (
    <section className="SideNavbarSection">
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
