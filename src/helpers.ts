type Obj = Record<string, unknown>

export function toString(obj: Obj): string
export function toString(obj: Obj | null | undefined): string | null
export function toString(obj: Obj | null | undefined): string | null {
  if (!obj) return 'null'
  return JSON.stringify(obj)
}
