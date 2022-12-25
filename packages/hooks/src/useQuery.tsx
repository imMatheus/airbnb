import useSWR from 'swr'
import type { AppController } from '../../../apps/server/src/app.controller'
import type { Paths, Routes } from './routes'
import queryString from 'query-string'

export function useQuery(
    url: Paths,
    options: { params: Routes['/listings/:id']['params'] }
) {
    const fullUrl = `http://localhost:4000${url}` as const
    type F = Routes['/']['returns']
    const { data, error, isLoading } = useSWR<any>(fullUrl, (url) =>
        fetch(url).then((res) => res.json())
    )
}
