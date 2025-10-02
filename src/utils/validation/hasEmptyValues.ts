export function hasEmptyValues<T extends object>(obj: T): boolean {
  return Object.values(obj).includes("");
}
