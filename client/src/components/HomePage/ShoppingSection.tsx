import React from 'react'

// Import Components
import { StoreCard } from './StoreCard'
import { ItemCard } from '../ItemCard'

// Import Images 
import BeatsLogo from '../../images/BeatsLogo.svg'
import JBLLogo from '../../images/JBLLogo.svg'
import AKGLogo from '../../images/AKGLogo.svg'
import thumbnailIcon from "../../images/thumbnail5.png"
import thumbnailIcon1 from "../../images/thumbnail3.png"
import thumbnailIcon2 from "../../images/thumbnail2.png"
import thumbnailIcon3 from "../../images/thumbnail4.png"
import thumbnailIcon4 from "../../images/thumbnail1.png"

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
                    <ItemCard thumbnailIcon={thumbnailIcon} />
                    <ItemCard thumbnailIcon={thumbnailIcon1} />
                    <ItemCard thumbnailIcon={thumbnailIcon2} />
                    <ItemCard thumbnailIcon={thumbnailIcon3} />
                    <ItemCard thumbnailIcon={thumbnailIcon1} />
                    <ItemCard thumbnailIcon={thumbnailIcon4} />
                    <ItemCard thumbnailIcon={thumbnailIcon} />
                </div>
            </div>
        </section>
    );
}