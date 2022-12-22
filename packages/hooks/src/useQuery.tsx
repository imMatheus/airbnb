import useSWR from 'swr'

export function useQuery() {
    const { data, error, isLoading } = useSWR('/api/user/123', (...args) =>
        fetch(...args).then((res) => res.json())
    )
}
