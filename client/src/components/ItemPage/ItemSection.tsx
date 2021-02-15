import React from 'react';

import thumbnail from '../../images/MainImage1.png';

interface Props {}

export const ItemSection: React.FC<Props> = () => {
  return (
    <section id="ItemSection">
      <div className="ItemDisplaySection">
        <img src={thumbnail} alt="" />
        <div className="itemDetailsContainer">
          <p className="itemTitle">Beats Solo 3</p>
          <p className="itemPrice">$297.9</p>
        </div>
      </div>

      <div className="ItemDetailSection">
        <div className="itemColours">
          <h3 className="sectionTitle">Colours</h3>
          <div className="colourSelect">
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
                <g id="colour-2" data-name="colour" transform="translate(9 6)" fill="#402373" stroke="#fff" strokeWidth={3}>
                  <circle cx={9} cy={9} r={9} stroke="none" />
                  <circle cx={9} cy={9} r="7.5" fill="none" />
                </g>
              </g>
            </svg>
            <svg width="36" height="36" viewBox="0 0 36 36">
              <defs>
                <filter id="colour" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse">
                  <feOffset dy="3" />
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feFlood flood-color="#060dd9" flood-opacity="0.149" />
                  <feComposite operator="in" in2="blur" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#colour)">
                <g id="colour-2" data-name="colour" transform="translate(9 6)" fill="#402373" stroke="#fff" stroke-width="3">
                  <circle cx="9" cy="9" r="9" stroke="none" />
                  <circle cx="9" cy="9" r="7.5" fill="none" />
                </g>
              </g>
            </svg>
            <svg width="36" height="36" viewBox="0 0 36 36">
              <defs>
                <filter id="colour" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse">
                  <feOffset dy="3" />
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feFlood flood-color="#060dd9" flood-opacity="0.149" />
                  <feComposite operator="in" in2="blur" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#colour)">
                <g id="colour-2" data-name="colour" transform="translate(9 6)" fill="#402373" stroke="#fff" stroke-width="3">
                  <circle cx="9" cy="9" r="9" stroke="none" />
                  <circle cx="9" cy="9" r="7.5" fill="none" />
                </g>
              </g>
            </svg>
            <svg width="36" height="36" viewBox="0 0 36 36">
              <defs>
                <filter id="colour" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse">
                  <feOffset dy="3" />
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feFlood flood-color="#060dd9" flood-opacity="0.149" />
                  <feComposite operator="in" in2="blur" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#colour)">
                <g id="colour-2" data-name="colour" transform="translate(9 6)" fill="#402373" stroke="#fff" stroke-width="3">
                  <circle cx="9" cy="9" r="9" stroke="none" />
                  <circle cx="9" cy="9" r="7.5" fill="none" />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="itemSize">
          <h3 className="sectionTitle">Size</h3>
          <div className="sizeSelect">
            <button className="size">XXS</button>
            <button className="size">XS</button>
            <button className="size">S</button>
            <button className="size">M</button>
            <button className="size">L</button>
            <button className="size">XL</button>
            <button className="size">XXL</button>
          </div>
        </div>
        <div className="itemDetail">
          <h3 className="sectionTitle">Details</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quis, quaerat consequuntur excepturi
            doloremque consectetur omnis iste quas suscipit aperiam voluptates natus, odio ex! Quisquam sit fugiat enim minus
            magni?
          </p>
        </div>
        <div className="ButtonsContainer">
          <button className="addToCartBtn">Add To Cart</button>
          <button className="buyNowBtn">Buy Now</button>
        </div>
      </div>
    </section>
  );
};
