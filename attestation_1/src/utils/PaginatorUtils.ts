export const getPageInit = (key: string): number => {
  if (localStorage.getItem(key)) {
    if (!Number.isNaN(localStorage.getItem(key))) {
      return Number(localStorage.getItem(key));
    }
  }
  return 0;
};

export const getLimitInit = (key: string): number => {
  if (localStorage.getItem(key)) {
    if (!Number.isNaN(localStorage.getItem(key))) {
      return Number(localStorage.getItem(key));
    }
  }
  return 6;
};

export const setToLocalStorage = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

// export const setLimit = (limit: string): void => {
//   localStorage.setItem("limit", limit);
// };
//
// export const setTotal = (total: string): void => {
//   localStorage.setItem("total", total);
// };
//
// export const setPage = (page: string): void => {
//   localStorage.setItem("page", page);
// };
