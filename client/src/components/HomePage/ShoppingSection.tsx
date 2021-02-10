import React from 'react'

// Import Components
import { StoreCard } from './StoreCard'
import BeatsLogo from '../../images/BeatsLogo.svg'
import JBLLogo from '../../images/JBLLogo.svg'
import AKGLogo from '../../images/AKGLogo.svg'

interface Props {

}

export const ShoppingSection: React.FC<Props> = () => {
    return (
        <section id="ShoppingSection">
            <div id="SelectStoresContainer">
                <h3 className="sectionTitle">Choose Store</h3>
                <div className="storeSelectContainer">
                    <StoreCard svg={BeatsLogo} />
                    <StoreCard svg={JBLLogo} />
                    <StoreCard svg={AKGLogo} />
                    <StoreCard svg={JBLLogo} />
                    <StoreCard svg={AKGLogo} />
                    <StoreCard svg={JBLLogo} />
                    <StoreCard svg={AKGLogo} />
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