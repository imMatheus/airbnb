import useSWR from "swr";
import type { AppController } from "../../../apps/server/src/app.controller";

export function useQuery() {
  const { data, error, isLoading } = useSWR<
    Awaited<ReturnType<AppController["getHello"]>>
  >("/api/user/123", (url) => fetch(url).then((res) => res.json()));
}
