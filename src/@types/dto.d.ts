declare type DtoOf<T extends Record<string, any>> = {
  [key in keyof T]: T[key] | ((...args: any[]) => T[key])
}
