const setToken = (token: string) => localStorage.setItem("access-token", token);

const getToken = () => localStorage.getItem("access-token");

const deleteToken = () => localStorage.removeItem("access-token");

export const localStorageToken = {
  setToken,
  getToken,
  deleteToken,
};
