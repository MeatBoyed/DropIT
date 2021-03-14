import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  location: string;
  socialMedia: socialMedia[];
  images: { bannerImage: string; profileImage: string };
}

interface socialMedia {
  accountName: string;
  link: string;
  iconImage: string;
}

export const Header: React.FC<Props> = ({ title, location, socialMedia, images }) => {
  return (
    <div id="ProfileHeader">
      <div className="bannerContainer">
        <img src={images.bannerImage} alt="" />
      </div>
      <div className="detailContainer">
        <div className="profileDetailsContainer">
          <div className="profileIconContainer">
            <img src={images.profileImage} alt="" />
          </div>
          <div className="profileTilesContainer">
            <p className="profileTitle">{title}</p>
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

              <p className="profileLocation">{location}</p>
            </div>
            <div className="socialLinksContainer">
              {socialMedia.map((socialMedia, index) => (
                <Link key={index} to={socialMedia.link}>
                  <img className="socialMediaIcon" src={socialMedia.iconImage} alt="" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;