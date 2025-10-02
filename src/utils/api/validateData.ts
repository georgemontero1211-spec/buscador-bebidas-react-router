import { z, ZodType } from "zod";

export function validateData<T extends ZodType>(
  data: unknown,
  schema: T
): z.infer<T> {
  const result = schema.safeParse(data);

  if (!result.success) {
    console.error(result.error);
    throw new Error("Invalid API response");
  }

  return result.data;
}
