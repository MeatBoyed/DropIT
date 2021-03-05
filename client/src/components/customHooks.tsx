import axios from "axios";
import { useEffect, useState } from "react";

interface ProductCardModel {
	_id: string;
	vendor: string;
	title: string;
	price: number;
	thumbnails: { mainThumbnail: string };
}

interface ProductViewerModel {
	id: string;
	title: string;
	price: number;
	colours: string[];
	sizes: string[];
	viewerImages: string[];
	description: string;
	rating: number;
	frequency: number;
}

export const usePaginate = (pageNumber: number) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [hasMore, setHasMore] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);
	const [products, setProducts] = useState<ProductCardModel[]>([]);

	useEffect(() => {
		setLoading(true);
		setError(false);

		let cancel;

		axios({
			method: "GET",
			url: "http://localhost:5000/api/products",
			params: { page: pageNumber },
			cancelToken: new axios.CancelToken((c) => (cancel = c)),
		})
			.then((response) => {
				setProducts((previousProducts) => {
					return previousProducts.concat(response.data);
				});
				setHasMore(response.data.length > 0);
				setLoading(false);
			})
			.catch((error) => {
				// Add error catching and telling the user how to fix the error
				console.log(error);
				setLoading(false);
				setError(true);
			});
	}, [pageNumber]);

	return { loading, error, products, hasMore };
};

export const useSearch = (pageNumber: number, query: string) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [hasMore, setHasMore] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);
	const [searchResult, setSearchResult] = useState<ProductCardModel[]>([]);
	console.log("query", query);

	useEffect(() => {
		setLoading(true);
		setError(false);

		let cancel;
		axios({
			method: "GET",
			url: `http://localhost:5000/api/products/search/${query}`,
			params: { page: pageNumber },
			cancelToken: new axios.CancelToken((c) => (cancel = c)),
		})
			.then((response) => {
				setSearchResult((previousProducts) => {
					return previousProducts.concat(response.data);
				});
				setHasMore(response.data.length > 0);
				setLoading(false);
			})
			.catch((error) => {
				// Add error catching and telling the user how to fix the error
				console.log(error);
				setLoading(false);
				setError(true);
			});
	}, [pageNumber, query]);

	return { loading, error, searchResult, hasMore };
};

export const useFetchProduct = (productID: string) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [product, setProduct] = useState<ProductViewerModel>({
		id: productID,
		title: "",
		price: 0,
		colours: [],
		sizes: [],
		viewerImages: [],
		description: "",
		rating: 0,
		frequency: 0,
	});

	useEffect(() => {
		axios({
			method: "GET",
			url: `http://localhost:5000/api/products/${productID}`,
		})
			.then((response) => {
				setProduct({
					id: productID,
					title: response.data.title,
					price: response.data.price,
					colours: response.data.colours,
					sizes: response.data.sizes,
					viewerImages: response.data.viewerImages,
					description: response.data.description,
					rating: response.data.rating,
					frequency: response.data.frequency,
				});
				setLoading(false);
			})
			.catch((error) => {
				setErrorMessage(
					"The product you're looking for doesn't seem to exists."
				);
				setLoading(false);
			});
	});

	return { loading, errorMessage, product };
};
