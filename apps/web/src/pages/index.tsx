import { Search, Facebook, Instagram, Twitter } from 'ui'
import ListingCard from '@/components/ListingCard'
import type { Routes, F } from '../../../server/src/routes'

export default function Index() {
    return (
        <div>
            <h1>Web då</h1>
            <Search />
            <Facebook />
            <Instagram />
            <Twitter />
            <ListingCard />
        </div>
    )
}
