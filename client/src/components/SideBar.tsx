import React from 'react';
import { Link } from 'react-router-dom';

export const SideBar: React.FC = () => {
  return (
    <section className="SideNavbarSection">
      {/* Optional Logo */}
      <ul className="linksContainer">
        <li className="link">
          <Link className="tag" to="">
            Clothes
          </Link>
        </li>
        <Link to="">
          <li className="link">
            <Link className="tag" to="">
              Books
            </Link>
          </li>
        </Link>
        <Link to="">
          <li className="link">
            <Link className="tag" to="">
              House Appliances
            </Link>
          </li>
        </Link>
        <Link to="">
          <li className="link">
            <Link className="tag" to="">
              Tech
            </Link>
          </li>
        </Link>
        <Link to="">
          <li className="link">
            <Link className="tag" to="">
              About
            </Link>
          </li>
        </Link>
      </ul>
    </section>
  );
};
