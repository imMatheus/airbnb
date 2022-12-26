import type { Routes } from './routes'
// import queryString from 'query-string'
import useSWR from 'swr'
import React from 'react'

const Test = ({}) => {
    const data = useQuery('/listings')
}

export function useQuery<T extends keyof Routes>(url: T) {
    const fullUrl = `http://localhost:4000${url}` as const
    const res = useSWR<Routes[T]['returns']>(fullUrl, (url) =>
        fetch(url).then((res) => res.json())
    )
    return res
}
