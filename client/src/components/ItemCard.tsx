import React from 'react'

import FavouriteIcon from "../images/favourite.svg"

interface Props {
    thumbnailIcon: string
}

export const ItemCard: React.FC<Props> = ({ thumbnailIcon }) => {
    return (
        <div className="itemCard">
            <img src={FavouriteIcon} alt="" className="favouriteIcon"/>
            <img src={thumbnailIcon} alt="" className="itemImage"/>
            <div className="itemInfo">
                <p className="itemTitle">Beats Solo</p>
                <p className="itemPrice">$249.99</p>
            </div>
        </div>
    );
}