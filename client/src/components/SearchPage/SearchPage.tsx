import React, { useState, useRef, useCallback, useEffect } from "react";
import { useSearch } from "../customHooks";

import { Link, useLocation } from "react-router-dom";

// Import Components
import { ItemCard } from "../ItemCard";
import { LoadingSpinner } from "../LoadingSpinner";

export const SearchPage: React.FC = () => {
	const [pageNumber, setPageNumber] = useState<number>(1);
	const [query, setQuery] = useState<string>("");
	const { search } = useLocation();
	const params = new URLSearchParams(search);

	const { loading, error, searchResult, hasMore } = useSearch(
		pageNumber,
		query
	);

	const observer = useRef<IntersectionObserver>();
	const lastItemElementRef = useCallback(
		// Node relates to the last element that is rendered (last document)
		(node) => {
			// Stop scrolling if loading (fetching data)
			if (loading) return;

			// Connect observer to correct place
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPageNumber((previousPageNumber) => previousPageNumber + 1);
				}
			});
			if (node) observer.current.observe(node);
		},
		[loading, hasMore]
	);

	useEffect(() => {
		const newQuery = params.get("search");
		if (newQuery) return setQuery(newQuery);
	});

	return (
		<section id="ShoppingSection">
			<div className="itemsContainer">
				{searchResult.map((product, index) => {
					if (searchResult.length === index + 1) {
						return (
							<div key={index} ref={lastItemElementRef} className="itemCard">
								<Link to={`/${product.vendor}/${product._id}`}>
									<img
										src={product.thumbnails.mainThumbnail}
										alt=""
										className="itemImage"
									/>
								</Link>
								<div className="itemInfo">
									<Link to={`/${product.vendor}/${product._id}`}>
										<p className="itemTitle">{product.title}</p>
									</Link>
									<Link to={`/${product.vendor}/${product._id}`}>
										<p className="itemPrice">{product.price}</p>
									</Link>
								</div>
							</div>
						);
					} else {
						return (
							<ItemCard
								key={index}
								url={`/${product.vendor}/${product._id}`}
								title={product.title}
								price={product.price}
								mainImage={product.thumbnails.mainThumbnail}
							/>
						);
					}
				})}
			</div>
			<div className="loadingSpinner">{loading && <LoadingSpinner />}</div>
			<div>{error && "Error..."}</div>
		</section>
	);
};

export default SearchPage;
