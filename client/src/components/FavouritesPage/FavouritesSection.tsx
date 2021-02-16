import React from "react";

// Import Components
import { ItemCard } from "../ItemCard";

// Import Thumbnails (temp)
import thumbnailIcon from "../../images/MainImage1.png";
import thumbnailIcon1 from "../../images/MainImage1.png";
import thumbnailIcon2 from "../../images/MainImage1.png";
import thumbnailIcon3 from "../../images/MainImage1.png";
import thumbnailIcon4 from "../../images/MainImage1.png";

interface Props {}

export const FavouritesSection: React.FC<Props> = () => {
	return (
		<section id="FavouritesSection">
			<h3 className="sectionTitle">Your Favourites</h3>
			<div className="favouritesContainer">
				{/* <ItemCard thumbnailIcon={thumbnailIcon} />
        <ItemCard thumbnailIcon={thumbnailIcon1} />
        <ItemCard thumbnailIcon={thumbnailIcon2} />
        <ItemCard thumbnailIcon={thumbnailIcon3} />
        <ItemCard thumbnailIcon={thumbnailIcon1} />
        <ItemCard thumbnailIcon={thumbnailIcon4} />
        <ItemCard thumbnailIcon={thumbnailIcon} /> */}
			</div>
		</section>
	);
};
