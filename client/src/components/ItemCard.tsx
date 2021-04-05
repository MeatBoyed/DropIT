import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import temp Loading image
import thumbnail from '../images/thumbnail.jpg';

interface Props {
  title: string;
  url: string;
  price: number;
  mainImage: string;
}

export const ItemCard: React.FC<Props> = ({ url, title, price, mainImage }) => {
  const [image, setImage] = useState<string>(thumbnail);
  return (
    <div className="itemCard">
      <Link to={url}>
        <img onLoad={() => setImage(mainImage)} src={thumbnail} alt="" className="itemImage" />
      </Link>
      <div className="itemInfo">
        <Link to={url}>
          <p className="itemTitle">{title}</p>
        </Link>
        <Link to={url}>
          <p className="itemPrice">${price}</p>
        </Link>
      </div>
      <button className="addToCart">Add To Cart</button>
    </div>
  );
};

export default ItemCard;
