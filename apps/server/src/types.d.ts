import type { AppController } from './app.controller';
import type { ListingsController } from './listings/listings.controller';
export * from '@prisma/client';

// Helper type
type Controller<T extends (...args: any) => any> = Awaited<ReturnType<T>>;

export interface Routes {
  '/': {
    returns: Controller<AppController['health']>;
  };
  '/listings': {
    returns: Controller<ListingsController['findAll']>;
  };
}
