import React from 'react'
import { Link } from 'react-router-dom'

// Import Icons
import HomeButton from '../images/homeButton.svg'
import FavouritesButton from '../images/favouritesButton.svg'
import ShoppingCartButton from '../images/shoppingCartButton.svg'
import NewspapperButton from '../images/newspapperButton.svg'
import UserButton from '../images/userButton.svg'



export const MobileNavbar: React.FC = () => {
    return (
        <section id="MobileNavbar">
            <Link to="/" ><img src={HomeButton} alt="" className="homebtn"/></Link>
            <Link to="/favourites">
                <img src={FavouritesButton} alt="" className="favouritesbtn"/>
            </Link>
            <Link to="/shoppingcart">
                <img src={ShoppingCartButton} alt="" className="shoppingcartbtn"/>
            </Link>
            <Link to="/newspaper">
                <img src={NewspapperButton} alt="" className="newspapperbtn"/>
            </Link>
            <Link to="/account">
                <img src={UserButton} alt="" className="userbtn"/>
            </Link>
        </section>
    );
}