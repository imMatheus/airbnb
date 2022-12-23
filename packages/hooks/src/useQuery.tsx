import useSWR from "swr";
import type { AppController } from "../../../apps/server/src/app.controller";
import type { Routes } from "./routes";

interface Params {}

export function useQuery(url: keyof Routes) {
  const fullUrl = `http://localhost:4000${url}`;

  const { data, error, isLoading } = useSWR<any>(fullUrl, (url) =>
    fetch(url).then((res) => res.json())
  );
}
