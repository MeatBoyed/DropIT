import { useEffect, useState } from "react";
import { firestore } from "../firebase";

interface Items {
	id: string;
	vendor: string;
	title: string;
	price: number;
	mainImage: string;
}

export const usePaginate = (pageNumber: number) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [hasMore, setHasMore] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);
	const [items, setItems] = useState<Items[]>([]);

	const [lastDoc, setLastDoc] = useState<object | null>(null);

	useEffect(() => {
		setLoading(true);
		setError(false);

		const itemsRef = firestore
			.collection("Items")
			.orderBy("frequency")
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
				// Add error catching and telling the user how to fix the error
				console.log(error);
				setLoading(false);
				setError(true);
			});
	}, [pageNumber]);

	return { loading, error, items, hasMore };
};
