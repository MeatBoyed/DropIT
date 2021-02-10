import React from 'react'

// Import Core components
import { Navbar } from '../Navbar'
import { ShoppingSection } from './ShoppingSection'
import { MobileNavbar } from '../MobileNavbar'

interface Props {

}

export const HomePageIndex: React.FC<Props> = () => {
    return (
        <React.Fragment>
            <Navbar />
            <ShoppingSection />
            <MobileNavbar />
        </React.Fragment>
    );
}