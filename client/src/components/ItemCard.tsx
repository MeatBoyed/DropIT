import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import temp Loading image
import ViewerLoading from '../images/MainImageLoader.png';

interface Props {
  title: string;
  url: string;
  price: number;
  mainImage: string;
}

export const ItemCard: React.FC<Props> = ({ url, title, price, mainImage }) => {
  const [image, setImage] = useState<string>(ViewerLoading);
  return (
    <div className="itemCard">
      <Link to={url}>
        <img onLoad={() => setImage(mainImage)} src={image} alt="" className="itemImage" />
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

export default ItemCard