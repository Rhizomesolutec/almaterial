const KEY = "ADMIN_AUTH";

export function isAdminAuthenticated() {
  return !!localStorage.getItem(KEY);
}

export function loginAdmin(username, password) {
  if (username === "admin" && password === "admin") {
    localStorage.setItem(KEY, "true");
    return true;
  }
  return false;
}

export function logoutAdmin() {
  localStorage.removeItem(KEY);
}

export default function useAuth() {
  return {
    isAuth: isAdminAuthenticated(),
    login: loginAdmin,
    logout: logoutAdmin,
  };
}
