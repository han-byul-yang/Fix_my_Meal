export const localStorageSetting = (name: string, value: string, expire: number) => {
  const localObj = {
    value,
    expire,
  }

  const localObjString = JSON.stringify(localObj)

  return localStorage.setItem(name, localObjString)
}
