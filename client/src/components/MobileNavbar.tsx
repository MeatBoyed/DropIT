import React from 'react'

// Import Icons
import HomeButton from '../images/homeButton.svg'
import FavouritesButton from '../images/favouritesButton.svg'
import ShoppingCartButton from '../images/shoppingCartButton.svg'
import NewspapperButton from '../images/newspapperButton.svg'
import UserButton from '../images/userButton.svg'



export const MobileNavbar: React.FC = () => {
    return (
        <section id="MobileNavbar">
            <img src={HomeButton} alt="" className="homebtn"/>
            <img src={FavouritesButton} alt="" className="favouritesbtn"/>
            <img src={ShoppingCartButton} alt="" className="shoppingcartbtn"/>
            <img src={NewspapperButton} alt="" className="newspapperbtn"/>
            <img src={UserButton} alt="" className="userbtn"/>
        </section>
    );
}