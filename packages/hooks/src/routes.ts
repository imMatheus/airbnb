import type { AppController } from "../../../apps/server/src/app.controller";

export type Routes = "/listing";
// | `/listing/:id`
// | '/listing/:id/comments'

type Controller<T extends (...args: any) => any> = Awaited<ReturnType<T>>;

interface Path {
  "/listing": {
    returns: { a: "b" };
  };
  "/listing/:id": {
    params: {
      id: string;
    };
    returns: Controller<AppController["getHello"]>;
  };
}
