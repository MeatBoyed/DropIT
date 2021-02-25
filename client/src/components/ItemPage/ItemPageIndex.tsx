import React, { useContext, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { Alert } from "../Alert";
import { useData } from "../customHooks";

// Import Componets
import { LoadingSpinner } from "../LoadingSpinner";
import { ShoppingCartItem, ShoppingCartContext } from "../ShoppingCartContext";
import { ImageViewer } from "./ImageViewer";
import { ItemDetailsViewer } from "./ItemDetailsViewer";
import Selector from "./Selector";

interface Param {
	itemid: string;
}

const ItemPageIndex: React.FC = () => {
	const currentId = useParams<Param>().itemid;
	const currentUrl = useLocation();
	const history = useHistory();

	const [size, setSize] = useState<string>("");
	const [colour, setColour] = useState<string>("");

	const { AddToShoppingCart, ItemInCart } = useContext(ShoppingCartContext);
	const { loading, errorMessage, item } = useData(currentId);
	const [addToCart, setAddedtoCart] = useState<boolean>(ItemInCart(currentId));

	const AddToCartHandler = () => {
		if (addToCart) return history.push("/shoppingcart");
		if (item.frequency !== 0) {
			let cartItem: ShoppingCartItem = {
				id: currentId,
				title: item.title,
				price: item.price,
				colour: colour,
				size: size,
				url: currentUrl.pathname,
			};
			AddToShoppingCart(cartItem);
			setAddedtoCart(true);
		}
	};

	return (
		<section id="ItemSection">
			{loading ? (
				<LoadingSpinner />
			) : (
				<React.Fragment>
					{errorMessage !== "" ? (
						<Alert message={errorMessage} />
					) : (
						<React.Fragment>
							<ImageViewer viewerImages={item.viewerImages} />
							<div className="ItemDetailSection">
								<ItemDetailsViewer title={item.title} price={item.price} />
								<div className="itemSelectorsContainer">
									{item.colours.length !== 0 && (
										<Selector
											onChange={(newValue) => setColour(newValue)}
											title={"Colours"}
											options={item.colours}
										/>
									)}
									{item.sizes.length !== 0 && (
										<Selector
											onChange={(newValue) => setSize(newValue)}
											title={"Sizes"}
											options={item.sizes}
										/>
									)}
								</div>
								<div className="ButtonsContainer">
									{item.frequency !== 0 ? (
										<button
											onClick={AddToCartHandler}
											className={addToCart ? "activatedBtn" : "addToCartBtn"}
										>
											{addToCart ? "View Cart" : "Add To Cart"}
										</button>
									) : (
										<button className="addToCartBtn">Out Of Stock</button>
									)}
									{addToCart && (
										<button
											onClick={() => history.push("/")}
											className="buyNowBtn"
										>
											Continue Shopping
										</button>
									)}
								</div>
								<div className="itemDetail">
									<p>{item.description}</p>
								</div>
							</div>
						</React.Fragment>
					)}
				</React.Fragment>
			)}
		</section>
	);
};

export default ItemPageIndex;
