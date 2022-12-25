import type { AppController } from '../../../apps/server/src/app.controller'
import type { ListingsController } from '../../../apps/server/src/listings/listings.controller'

export type Controller<T extends (...args: any) => any> = Awaited<ReturnType<T>>

export type Paths = '/' | '/listings' | '/listings/:id'

export type Route = Record<
    Paths,
    {
        params?: Record<string, string | number>
        returns: Controller<any>
    }
>

export interface Routes extends Route {
    '/': {
        returns: Controller<AppController['health']>
    }
    '/listings': {
        returns: Controller<ListingsController['findAll']>
    }
    '/listings/:id': {
        params: {
            id: string
        }
        returns: Controller<ListingsController['findOne']>
    }
}
