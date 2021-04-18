import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LeftArrow } from '../../images/arrowLeft.svg';

interface Props {}

export const PaginationController: React.FC<Props> = () => {
  return (
    <div className="PaginationController">
      <div className="pageNumberContainer">
        <Link to="" className="page">
          1
        </Link>
        <Link to="" className="page">
          2
        </Link>
        <Link to="" className="page">
          3
        </Link>
        <Link to="" className="page">
          4
        </Link>
        <Link to="" className="page">
          5
        </Link>
        <Link to="" className="page">
          6
        </Link>
        <Link to="" className="page">
          7
        </Link>
        <Link to="" className="page">
          8
        </Link>
        <Link to="" className="page">
          9
        </Link>
        <Link to="" className="page">
          10
        </Link>
      </div>
      <div className="buttonsContainer">
        <button className="btn">
          <LeftArrow />
          <p className="text">Previous</p>
        </button>
        <button className="btn next">
          <p className="text">Next</p>
          <LeftArrow />
        </button>
      </div>
    </div>
  );
};
