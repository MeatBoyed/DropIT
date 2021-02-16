import React, { useEffect, useState } from 'react';
import { firestore } from '../../firebase';

interface Props {
  id: string;
}

interface Item {
  id: string;
  title: string;
  price: number;
  colours: string[];
  sizes: string[];
  viewerImages: string[];
  description: string;
  frequency: number;
}

export const ItemSection: React.FC<Props> = ({ id }) => {
  const [item, setItem] = useState<Item>();

  const GetItem = async () => {
    const itemData = await firestore.collection('Items').doc(id).get();
    setItem({
      id: itemData.id,
      title: itemData.data()!.title,
      price: itemData.data()!.price,
      colours: itemData.data()!.colours,
      sizes: itemData.data()!.sizes,
      viewerImages: itemData.data()!.images.viewerImages,
      description: itemData.data()!.description,
      frequency: itemData.data()!.frequency,
    });
  };

  useEffect(() => {
    GetItem();
  }, []);

  return (
    <section id="ItemSection">
      <div className="ItemDisplaySection">
        <img src={item?.viewerImages[0]} alt="" />
        <div className="itemDetailsContainer">
          <p className="itemTitle">{item?.title}</p>
          <p className="itemPrice">${item?.price}</p>
        </div>
      </div>

      <div className="ItemDetailSection">
        {item?.colours !== undefined ? (
          <div className="itemColours">
            <h3 className="sectionTitle">Colours</h3>
            <div className="colourSelect">
              {item.colours.map((colour) => (
                <svg width={36} height={36} viewBox="0 0 36 36">
                  <defs>
                    <filter id="colour" x={0} y={0} width={36} height={36} filterUnits="userSpaceOnUse">
                      <feOffset dy={3} />
                      <feGaussianBlur stdDeviation={3} result="blur" />
                      <feFlood floodColor="#060dd9" floodOpacity="0.149" />
                      <feComposite operator="in" in2="blur" />
                      <feComposite in="SourceGraphic" />
                    </filter>
                  </defs>
                  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#colour)">
                    <g
                      id="colour-2"
                      data-name="colour"
                      transform="translate(9 6)"
                      fill={colour}
                      stroke="#fff"
                      strokeWidth={3}
                    >
                      <circle cx={9} cy={9} r={9} stroke="none" />
                      <circle cx={9} cy={9} r="7.5" fill="none" />
                    </g>
                  </g>
                </svg>
              ))}
            </div>
          </div>
        ) : null}
        {item?.sizes !== undefined ? (
          <div className="itemSize">
            <h3 className="sectionTitle">Size</h3>
            <div className="sizeSelect">
              {item.sizes.map((size) => (
                <button className="size">{size}</button>
              ))}
            </div>
          </div>
        ) : null}
        <div className="itemDetail">
          <h3 className="sectionTitle">Details</h3>
          <p>{item?.description}</p>
        </div>
        <div className="ButtonsContainer">
          <button className="addToCartBtn">Add To Cart</button>
          <button className="buyNowBtn">Buy Now</button>
        </div>
      </div>
    </section>
  );
};
