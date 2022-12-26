import type { AppController } from './app.controller';
import type { ListingsController } from './listings/listings.controller';

// Helper type
type Controller<T extends (...args: any) => any> = Awaited<ReturnType<T>>;

export type Routes = {
  '/': {
    returns: Controller<AppController['health']>;
  };
  '/listings': {
    returns: Controller<AppController['findAll']>;
  };
};

export type F = Routes['/listings']['returns'];
