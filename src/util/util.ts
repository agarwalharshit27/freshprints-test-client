import { IHistory } from "./interface"

export const updateSearchHistory = (arr: IHistory[]) => {
  localStorage.setItem("searchHistory", JSON.stringify(arr))
  return
}

export const getSearchHistory = () => {
  const data = localStorage.getItem("searchHistory")
  if (data) {
    return JSON.parse(data)
  }
  return []
}

export const clearSearchHistory = () => {
  localStorage.setItem("searchHistory", "")
  return
}