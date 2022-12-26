import { Search, Facebook, Instagram, Twitter } from 'ui'
import ListingCard from '@/components/ListingCard'
import { useQuery } from 'hooks'

export default function Index() {
    const { data, isLoading } = useQuery('/listings')
    return (
        <div className='px-10 pb-40'>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <h1>Web då</h1>
            <Search />
            <Facebook />
            <Instagram />
            <Twitter />
            {isLoading ? (
                'Loading...'
            ) : (
                <div className='grid grid-cols-4 gap-6 bg-red-500'>
                    {data?.map((listing) => (
                        <ListingCard listing={listing} />
                    ))}
                    {data?.map((listing) => (
                        <ListingCard listing={listing} />
                    ))}
                    {data?.map((listing) => (
                        <ListingCard listing={listing} />
                    ))}
                    {data?.map((listing) => (
                        <ListingCard listing={listing} />
                    ))}
                </div>
            )}
        </div>
    )
}
