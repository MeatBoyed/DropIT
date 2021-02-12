import React from 'react'

// Import Components
import { Navbar } from '../Navbar'
import { FavouritesSection } from './FavouritesSection'
import { MobileNavbar } from '../MobileNavbar'

interface Props {

}

export const FavouritesPageIndex: React.FC<Props> = () => {
    return (
        <React.Fragment>
            <Navbar />
            <FavouritesSection />
            <MobileNavbar />
        </React.Fragment>
    );
}