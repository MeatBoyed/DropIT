import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const SideBar: React.FC = () => {
  const history = useHistory();
  return (
    <section className="SideNavbarSection">
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
