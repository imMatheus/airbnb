export type Routes = '/listing'
// | `/listing/:id`
// | '/listing/:id/comments'

interface Path {
    '/listing': {
        returns: { a: 'b' }
    }
    '/listing/:id': {
        params: {
            id: string
        }
        returns: { a: 'b' }
    }
}
