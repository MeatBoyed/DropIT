import React from 'react';

interface Props {
  title: string;
  price: number;
  colours: string[];
  sizes: string[];
  viewerImages: string[];
  description: string;
  frequency: number;
}

export const ItemSection: React.FC<Props> = ({ title, price, colours, sizes, viewerImages, description, frequency }) => {
  return (
    <section id="ItemSection">
      <div className="ItemDisplaySection">
        <img src={viewerImages[0]} alt="" />
        <div className="itemDetailsContainer">
          <p className="itemTitle">{title}</p>
          <p className="itemPrice">${price}</p>
        </div>
      </div>

      <div className="ItemDetailSection">
        {colours !== undefined ? (
          <div className="itemColours">
            <h3 className="sectionTitle">Colours</h3>
            <div className="colourSelect">
              {colours.map((colour) => (
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
        {sizes !== undefined ? (
          <div className="itemSize">
            <h3 className="sectionTitle">Size</h3>
            <div className="sizeSelect">
              {sizes.map((size) => (
                <button className="size">{size}</button>
              ))}
            </div>
          </div>
        ) : null}
        <div className="itemQuantity">
          <h3 className="sectionTitle">Qty</h3>
          <div className="quantitySelect">
            {/* Render a selection option on the frequency of the item */}
            <select name="quantity" id="quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div className="itemDetail">
          <h3 className="sectionTitle">Details</h3>
          <p>{description}</p>
        </div>
        <div className="ButtonsContainer">
          <button className="addToCartBtn">Add To Cart</button>
          <button className="buyNowBtn">Buy Now</button>
        </div>
      </div>
    </section>
  );
};
