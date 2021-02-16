import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase";

// Import Components
import { ItemCard } from "../ItemCard";

interface Items {
	id: string;
	title: string;
	price: number;
	mainImage: string;
}

export const FavouritesSection: React.FC = () => {
	const [items, setItems] = useState<Items[]>([]);

	const GetItems = async () => {
		const items = await firestore.collection("Items").get();
		items.docs.forEach((doc) => {
			setItems((items) => [
				...items,
				{
					id: doc.id,
					title: doc.data().title,
					price: doc.data().price,
					mainImage: doc.data().images.mainImage,
				},
			]);
		});
	};

	useEffect(() => {
		GetItems();
	}, []);

	return (
		<section id="FavouritesSection">
			<h3 className="sectionTitle">Your Favourites</h3>
			<div className="favouritesContainer">
				{items.map((item) => (
					<ItemCard
						key={item.id}
						title={item.title}
						price={item.price}
						mainImage={item.mainImage}
					/>
				))}
			</div>
		</section>
	);
};
