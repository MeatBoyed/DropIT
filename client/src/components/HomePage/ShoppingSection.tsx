import React from 'react'

interface Props {

}

export const ShoppingSection: React.FC<Props> = () => {
    return (
        <section id="ShoppingSection">
            <div id="SelectStoresContainer">
                <h3 className="sectionTitle">Choose Store</h3>
                <div className="storeSelectContainer">
                    <div className="storeCardItem">
                        <p>I am image</p>
                    </div>
                    <div className="storeCardItem">
                        <p>I am image</p>
                    </div>
                    <div className="storeCardItem">
                        <p>I am image</p>
                    </div>
                </div>
            </div>
            <div id="StoreItemsContainer">
                <h3 className="sectionTitle">Beats Products</h3>
                <div className="itemsContainer">
                    <p>Store Item</p>
                    <p>Store Item</p>
                    <p>Store Item</p>
                    <p>Store Item</p>
                    <p>Store Item</p>
                </div>
            </div>
        </section>
    );
}