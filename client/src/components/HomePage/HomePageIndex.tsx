import React from 'react'

// Import Core components
import { Navbar } from '../Navbar'
import { ShoppingSection } from './ShoppingSection'

interface Props {

}

export const HomePageIndex: React.FC<Props> = () => {
    return (
        <React.Fragment>
            <Navbar />
            <ShoppingSection />
        </React.Fragment>
    );
}