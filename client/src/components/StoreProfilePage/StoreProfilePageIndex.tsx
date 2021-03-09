import React, { useState } from 'react';

import { ItemCard } from '../ItemCard';
import { usePaginate } from '../Utils/usePaginate';

import ProfileBanner from '../../images/profileBanner.jpg';
import ProfileIcon from '../../images/profileIcon.jpg';

// SocialMedia Icons
import InstagramIcon from '../../images/instagramIcon.svg';
import TwitterIcon from '../../images/twitterIcon.svg';
import FacebookIcon from '../../images/facebookIcon.svg';

// TODO Ensure social media icons are the correct size

interface Props {}

export const ClientProfilePageIndex: React.FC<Props> = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { loading, error, products, hasMore } = usePaginate(pageNumber);

  return (
    <section id="ClientProfileSection">
      <div id="ProfileHeader">
        <div className="bannerContainer">
          <img src={ProfileBanner} alt="" />
        </div>
        <div className="detailContainer">
          <div className="profileDetailsContainer">
            <div className="profileIconContainer">
              <img src={ProfileIcon} alt="" />
            </div>
            <div className="profileTilesContainer">
              <p className="profileTitle">KC Jewlry</p>
              <div className="profileLocationContainer">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                  className="locationPin"
                >
                  <g>
                    <g>
                      <path
                        d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5
			c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021
			C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333
			s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z"
                      />
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>

                <p className="profileLocation">Windhoek, Namibia</p>
              </div>
            </div>
          </div>
          <div className="socialLinksContainer">
            <img className="socialMediaIcon" src={InstagramIcon} alt="" />
            <img className="socialMediaIcon" src={TwitterIcon} alt="" />
            <img className="socialMediaIcon" src={FacebookIcon} alt="" />
          </div>
        </div>
      </div>
      <div id="ProfileDescriptionContainer">
        <p className="descriptionText">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, sapiente impedit dolorum a asperiores, officiis
          itaque officia unde aperiam magni modi alias earum aut? Placeat veritatis delectus ipsam libero temporibus! Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Accusamus hic expedita ullam natus exercitationem consequatur
          iusto dolorum unde voluptates deserunt facere, blanditiis illum ducimus similique laudantium laborum delectus sit
          quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corporis voluptate aperiam sed saepe,
          sequi tempore molestiae. Ea quas voluptate quam temporibus, maiores qui maxime debitis, atque, iusto dicta id.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi ad delectus magnam enim, sunt rem esse
          unde soluta iste! Illum nihil quasi, porro ducimus ullam cupiditate sequi voluptatibus distinctio.
        </p>
      </div>
      <div id="ShoppingSection">
        <p className="productsTitle">Products</p>
        <div className="itemsContainer">
          {products.map((product, index) => {
            return (
              <ItemCard
                key={index}
                url={`/${product.vendor}/${product._id}`}
                title={product.title}
                price={product.price}
                mainImage={product.thumbnails.mainThumbnail}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientProfilePageIndex;
