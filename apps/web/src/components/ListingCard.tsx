import React from 'react'
import type { Routes } from 'hooks'
import { Star } from 'ui'
interface ListingCardProps {
    listing: Routes['/listings']['returns'][number]
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
    return (
        <div className=''>
            <div className='rounded-xl mb-2 bg-black aspect-square'></div>
            <div className='flex gap-2 justify-between'>
                <h3 className='font-semibold'>{listing.address.street}</h3>
                {listing.scores.rating > 0 && (
                    <div className='flex gap-1 items-center'>
                        <Star
                            style={{
                                height: '12px',
                                width: '12px',
                            }}
                        />
                        {listing.scores.rating / 10} (
                        {listing.number_of_reviews})
                    </div>
                )}
            </div>
            <h4 className='font-semibold'>
                ${listing.price}{' '}
                <span className='text-text-dimmed font-normal'>/ day</span>
            </h4>
        </div>
    )
}

export default ListingCard
