import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(url: string, options: any = {}) {
  const { method = 'GET', body, headers = {} } = options;
  
  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json', ...headers },
    body,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return await res.json();
}

const getQueryFn: QueryFunction = async ({ queryKey }) => {
  const url = queryKey.join("/") as string;
  const res = await fetch(url, { credentials: "include" });
  await throwIfResNotOk(res);
  return await res.json();
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
  },
});
