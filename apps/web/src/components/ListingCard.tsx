import React from 'react'
import type { Routes } from 'hooks'
import {} from 'ui'
interface ListingCardProps {
    listing: Routes['/listings']['returns'][number]
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
    return (
        <div className='bg-bg-light-dimmed'>
            <div className='rounded-xl mb-2 bg-black aspect-square'></div>
            <div className='flex gap-2 justify-between'>
                <h3 className='font-semibold'>{listing.address.street}</h3>
                {listing.scores.rating > 0 && (
                    <div>{listing.scores.rating / 10}</div>
                )}
            </div>
        </div>
    )
}

export default ListingCard
