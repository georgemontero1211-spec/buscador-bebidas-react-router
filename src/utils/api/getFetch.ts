import { z, ZodType } from "zod";
import { fetchData } from "./fetchData";
import { validateData } from "./validateData";

export async function getFetch<T extends ZodType>(
  url: string,
  schema: T
): Promise<z.infer<T>> {
  const raw = await fetchData(url);
  return validateData(raw, schema);
}
