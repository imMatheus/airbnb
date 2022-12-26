import {
    Search,
    Facebook,
    Instagram,
    Twitter,
    Star,
    LogoIcon,
    LogoText,
    Heart,
} from 'ui'
import ListingCard from '@/components/ListingCard'
import { useQuery } from 'hooks'

export default function Index() {
    const { data, isLoading } = useQuery('/listings')
    console.log(data)

    return (
        <div className='px-10 pb-40'>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <h1>Web då</h1>
            <div className='text-red-500 fill-blue-600'>
                {/* <Star /> */}
                <LogoIcon />
                <LogoText />
                <Heart />
                <Search />
                <Facebook />
                <Instagram />
                <Twitter />
            </div>
            {isLoading ? (
                'Loading...'
            ) : (
                <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-4 gap-6'>
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
