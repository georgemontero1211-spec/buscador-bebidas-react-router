import axios from "axios";

export async function fetchData(url: string): Promise<unknown> {
  const { data } = await axios.get(url);
  return data;
}
