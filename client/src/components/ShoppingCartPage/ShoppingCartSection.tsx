import React from 'react'

import CheckoutIcon from '../../images/checkoutIcon.svg'
import { CartItem } from './CartItem'

// Import Thumbails (temp)
import thumbnailIcon from "../../images/thumbnail5.png"

interface Props {

}

export const ShoppingCartSection: React.FC<Props> = () => {
    return (
        <section id="ShoppingCartSection">
            <div className="titlesContainer">
                <h3 className="sectionTitle">Cart</h3>
                <button className="checkoutBtn">
                    <p>Checkout</p>
                    <img src={CheckoutIcon} alt=""/>
                </button>
            </div>

            <div className="shoppingCartItemsContainer">
                <CartItem thumbnail={thumbnailIcon} colour="402373" />
                <CartItem thumbnail={thumbnailIcon} colour="402373" />
                <CartItem thumbnail={thumbnailIcon} colour="402373" />
                <CartItem thumbnail={thumbnailIcon} colour="402373" />
                <CartItem thumbnail={thumbnailIcon} colour="402373" />
                <CartItem thumbnail={thumbnailIcon} colour="402373" />
                <CartItem thumbnail={thumbnailIcon} colour="402373" />
                <CartItem thumbnail={thumbnailIcon} colour="402373" />
                <CartItem thumbnail={thumbnailIcon} colour="402373" />
            </div>
        </section>
    );
}