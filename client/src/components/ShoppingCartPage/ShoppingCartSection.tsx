import React from 'react'

import CheckoutIcon from '../../images/checkoutIcon.svg'

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
                <h1>Item</h1>
            </div>
        </section>
    );
}