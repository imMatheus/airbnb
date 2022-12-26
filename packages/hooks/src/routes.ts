import type { AppController } from '../../../apps/server/src/app.controller'
import type { ListingsController } from '../../../apps/server/src/listings/listings.controller'

// Helper type
type Controller<T extends (...args: any) => any> = Awaited<ReturnType<T>>

export interface Routes {
    '/': {
        returns: Controller<AppController['health']>
    }

    '/listings': {
        returns: Controller<AppController['findAll']>
    }
}
