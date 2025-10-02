import axios from "axios";
import { z, ZodType } from "zod";

export function hasEmptyValues<T extends object>(obj: T): boolean {
  return Object.values(obj).includes("");
}

export async function getFetch<T extends ZodType>(
  url: string,
  schema: T
): Promise<z.infer<T>> {
  const { data } = await axios.get(url);
  const result = schema.safeParse(data);

  if (!result.success) {
    console.error(result.error);
    throw new Error("Invalid API response");
  }

  return result.data;
}
