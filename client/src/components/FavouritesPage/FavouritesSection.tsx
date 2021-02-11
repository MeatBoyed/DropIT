import React from 'react'

// Import Components
import { ItemCard } from '../ItemCard'

// Import Thumbnails (temp) 
import thumbnailIcon from "../../images/thumbnail5.png"
import thumbnailIcon1 from "../../images/thumbnail3.png"
import thumbnailIcon2 from "../../images/thumbnail2.png"
import thumbnailIcon3 from "../../images/thumbnail4.png"
import thumbnailIcon4 from "../../images/thumbnail1.png"

interface Props {

}

export const FavouritesSection: React.FC<Props> = () => {
    return (
        <section id="FavouritesSection">
            <h3 className="sectionTitle">Favourites</h3>
            <div className="favouritesContainer">
                <ItemCard thumbnailIcon={thumbnailIcon} />
                <ItemCard thumbnailIcon={thumbnailIcon1} />
                <ItemCard thumbnailIcon={thumbnailIcon2} />
                <ItemCard thumbnailIcon={thumbnailIcon3} />
                <ItemCard thumbnailIcon={thumbnailIcon1} />
                <ItemCard thumbnailIcon={thumbnailIcon4} />
                <ItemCard thumbnailIcon={thumbnailIcon} />
            </div>
        </section>
    );
}