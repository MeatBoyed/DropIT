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
      </ul>
    </section>
  );
};

export default React.memo(SideBar);
