import React from "react";

interface Props {
	vendorLogo: string;
}

export const StoreCard: React.FC<Props> = ({ vendorLogo }) => {
	return (
		<div className="storeCard">
			<img src={vendorLogo} alt="" />
		</div>
	);
};
