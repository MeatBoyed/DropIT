import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Searchbar: React.FC = () => {
	const history = useHistory();
	const [query, setQuery] = useState<string>();

	const handleKeyDown = (event: any) => {
		if (event.key === "Enter") {
			history.push(`search/${query}`);
		}
	};
	return (
		<div className="searchSeaction">
			<svg
				className="searchIcon"
				width="17.312"
				height="17.932"
				viewBox="0 0 17.312 17.932"
			>
				<path
					d="M18.033,16.333l-4.268-4.439A7.237,7.237,0,1,0,8.224,14.48a7.162,7.162,0,0,0,4.148-1.31l4.3,4.472a.944.944,0,1,0,1.361-1.309ZM8.224,1.889A5.351,5.351,0,1,1,2.873,7.24,5.357,5.357,0,0,1,8.224,1.889Z"
					transform="translate(-0.984)"
					fill="#262626"
				/>
			</svg>
			<form action="/search/" method="get" onSubmit={() => console.log(query)}>
				<input
					type="text"
					name="search"
					id="search"
					placeholder="search"
					className="searchInput"
					value={query}
				/>
			</form>
		</div>
	);
};

export default Searchbar;
