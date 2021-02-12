import React from 'react'

import FavouritesIcon from '../../images/favourite.svg'
import RemoveIcon from '../../images/remove.svg'

interface Props {
    thumbnail: string,
    colour: string
}

export const CartItem: React.FC<Props> = ({ thumbnail, colour }) => {
    return (
        <div className="CartItem">
            <img src={FavouritesIcon} alt="" className="favouriteIcon" />
            <img src={thumbnail} alt="" className="thumbnail"/>
            <div className="cartItemInfo">
                <p className="itemTitle">Beats Solo 3</p>
                <p className="itemPrice">$249.6</p>
                <div className="cartItemPropContainer">
                    <button className="size">S</button>
                    <svg className="color" width={36} height={36} viewBox="0 0 36 36">
                        <defs>
                            <filter id="colour" x={0} y={0} width={36} height={36} filterUnits="userSpaceOnUse">
                            <feOffset dy={3} />
                            <feGaussianBlur stdDeviation={3} result="blur" />
                            <feFlood floodColor="#060dd9" floodOpacity="0.149" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                            </filter>
                        </defs>
                        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#colour)">
                            <g id="colour-2" data-name="colour" transform="translate(9 6)" fill={colour} stroke="#fff" strokeWidth={3}>
                            <circle cx={9} cy={9} r={9} stroke="none" />
                            <circle cx={9} cy={9} r="7.5" fill="none" />
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <img src={RemoveIcon} alt="" className="removeIcon" />
        </div>
    );
}