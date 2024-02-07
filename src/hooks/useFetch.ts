import axios from "axios";
import useSWR from "swr";

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async () => {
    const response = await axios.get(url);
    return response.data.response;
  });

  return { data, error, key: url };
}
