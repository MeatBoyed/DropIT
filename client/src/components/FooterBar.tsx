import React from 'react';
import { Link } from 'react-router-dom';

export const FooterBar: React.FC = () => {
  return (
    <footer id="FooterSection">
      <div className="linksContainer">
        <div className="SupportContainer">
          <p className="headerText">Help &amp; Support</p>
          <div className="links">
            <Link to="" className="link">
              Support
            </Link>
            <Link to="" className="link">
              Track & Order
            </Link>
            <Link to="" className="link">
              Deliuvery & Returns
            </Link>
          </div>
        </div>
        <div className="AboutUsContainer">
          <p className="headerText">About Us</p>
          <div className="links">
            <Link to="" className="link">
              About Us
            </Link>
            <Link to="" className="link">
              Privacy
            </Link>
            <Link to="" className="link">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
      <p>&#169; Exalum 2021</p>
    </footer>
  );
};
