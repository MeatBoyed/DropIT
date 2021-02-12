import React from 'react'

interface Props {
    svg: string
}

export const StoreCard: React.FC<Props> = ({ svg }) => {
    return (
        <div className="storeCard">
            <img src={svg} alt=""/>
        </div>
    );
}