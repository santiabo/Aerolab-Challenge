export const SORT_ASCENDANT = "SORT_ ASCENDANT";
export const SORT_DESCENDANT = "SORT_ DESCENDANT";
export const SORT_BY_DATE = "SORT_BY_DATE";


export const sortAscendantAction = () => {
  return {
    type: SORT_ASCENDANT
  }
}

export const sortDescendantAction = () => {
  return {
    type: SORT_DESCENDANT
  }
}

export const sortByDate = () => {
  return {
    type: SORT_BY_DATE
  }
}