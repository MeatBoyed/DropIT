import React from 'react'

// Import Componets
import { Navbar } from '../Navbar'
import { ItemSection } from './ItemSection'

interface Props {

}

export const ItemPageIndex: React.FC<Props> = () => {
    return (
        <React.Fragment>
            <Navbar />
            <ItemSection />
        </React.Fragment>
    );
}