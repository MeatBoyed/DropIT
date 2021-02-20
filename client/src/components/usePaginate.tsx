import { connected } from "process";
import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import { ItemSection } from "./ItemPage/ItemSection";

// Give better names to parameters for query
export interface Query {
	field: string;
	condition: ">=" | "==";
	value: string;
}

interface Items {
	id: string;
	vendor: string;
	title: string;
	price: number;
	mainImage: string;
}

export const usePaginate = (query: Query, pageNumber: number) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [hasMore, setHasMore] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);
	const [items, setItems] = useState<Items[]>([]);

	const [lastDoc, setLastDoc] = useState<any>(null);

	useEffect(() => {
		setItems([]);
	}, [query]);

	useEffect(() => {
		setLoading(true);
		setError(false);

		console.log("last doc: ", lastDoc);

		const itemsRef = firestore
			.collection("Items")
			.orderBy(query.field)
			.startAfter(lastDoc || 0)
			.limit(2);

		const itemsData = itemsRef.get();

		itemsData
			.then((docSnapShot) => {
				if (docSnapShot.empty) {
					setHasMore(false);
				}
				docSnapShot.forEach((doc) => {
					setItems((previousItems) => {
						return [
							...previousItems,
							{
								id: doc.id,
								vendor: doc.data().vendor,
								title: doc.data().title,
								price: doc.data().price,
								mainImage: doc.data().images.mainImage,
							},
						];
					});
				});
				setLastDoc(docSnapShot.docs[docSnapShot.docs.length - 1]);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
				setError(true);
			});
	}, [query, pageNumber]);

	return { loading, error, items, hasMore };
};
