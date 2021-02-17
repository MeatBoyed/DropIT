import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  url: string;
  price: number;
  mainImage: string;
}

export const ItemCard: React.FC<Props> = ({ url, title, price, mainImage }) => {
  return (
    <div className="itemCard">
      <svg className="favouriteIcon" width="17" height="17" viewBox="0 0 17 17">
        <g transform="translate(-150.604 -262.604)">
          <circle cx="8.5" cy="8.5" r="8.5" transform="translate(150.604 262.604)" fill="#b8b8b8" />
          <g transform="translate(154.355 267.391)">
            <g transform="translate(0 0)">
              <path
                d="M4.558,39.265C1.883,36.925,0,35.685,0,33.713A2.585,2.585,0,0,1,2.519,31a2.508,2.508,0,0,1,2.222,1.5A2.508,2.508,0,0,1,6.963,31a2.585,2.585,0,0,1,2.519,2.713c0,1.971-1.881,3.209-4.558,5.551A.278.278,0,0,1,4.558,39.265Z"
                transform="translate(0 -31)"
                fill="#fff"
              />
            </g>
          </g>
        </g>
      </svg>
      <Link to={url}>
        <img src={mainImage} alt="" className="itemImage" />
      </Link>
      <div className="itemInfo">
        <Link to={url}>
          <p className="itemTitle">{title}</p>
        </Link>
        <Link to={url}>
          <p className="itemPrice">${price}</p>
        </Link>
      </div>
    </div>
  );
};
