import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase";

// Import Components
import { StoreCard } from "./StoreCard";
import { ItemCard } from "../ItemCard";

// Import Images
import BeatsLogo from "../../images/BeatsLogo.svg";
import JBLLogo from "../../images/JBLLogo.svg";
import AKGLogo from "../../images/AKGLogo.svg";
import thumbnailIcon from "../../images/MainImage1.png";
import thumbnailIcon1 from "../../images/MainImage1.png";
import thumbnailIcon2 from "../../images/MainImage1.png";
import thumbnailIcon3 from "../../images/MainImage1.png";
import thumbnailIcon4 from "../../images/MainImage1.png";

interface Props {}

interface Vendors {
	id: string;
	logo: string;
}

export const ShoppingSection: React.FC<Props> = () => {
	// Get Item data irrispective of the vendor
	// Iterate over data to render components

	const [vendors, setVendors] = useState<Vendors[]>([]);

	// Get all vendor icons, don't have any vendor selected (highlighted like they are)
	const GetVendors = async () => {
		const vendors = await firestore.collection("Vendors").get();
		vendors.docs.forEach((doc) => {
			setVendors((vendors) => [
				...vendors,
				{
					id: doc.id,
					logo: doc.data().logoImage,
				},
			]);
		});
	};

	useEffect(() => {
		GetVendors();
	}, []);

	console.log(vendors);

	return (
		<section id="ShoppingSection">
			<div id="SelectStoresContainer">
				<h3 className="sectionTitle">Choose Store</h3>
				<div className="storeSelectContainer">
					{vendors.map((vendor) => (
						<StoreCard key={vendor.id} vendorLogo={vendor.logo} />
					))}
				</div>
			</div>
			<div id="StoreItemsContainer">
				<h3 className="sectionTitle">Beats Products</h3>
				<div className="itemsContainer">
					<ItemCard thumbnailIcon={thumbnailIcon} />
					<ItemCard thumbnailIcon={thumbnailIcon1} />
					<ItemCard thumbnailIcon={thumbnailIcon2} />
					<ItemCard thumbnailIcon={thumbnailIcon3} />
					<ItemCard thumbnailIcon={thumbnailIcon1} />
					<ItemCard thumbnailIcon={thumbnailIcon4} />
					<ItemCard thumbnailIcon={thumbnailIcon} />
				</div>
			</div>
		</section>
	);
};
