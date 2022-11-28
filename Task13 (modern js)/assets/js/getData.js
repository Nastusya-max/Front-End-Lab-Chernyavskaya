import 'whatwg-fetch'

export const getData = async (str) => {
  let data
  try {
    const res = await fetch(str)
    if (!res.ok) {
      throw new error(res.statusText)
    }
    data = await res.json()
  } catch ({ message }) {
    throw new Error(message)
  }
  return data
}
