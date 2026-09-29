export const authService = {
  login: (email) => {
    localStorage.setItem('user', email)
    return { success: true, user: email }
  },
  logout: () => {
    localStorage.removeItem('user')
    localStorage.removeItem('ptl_cart')
    return { success: true }
  },
  getUser: () => {
    return localStorage.getItem('user')
  },
  isLoggedIn: () => {
    return !!localStorage.getItem('user')
  }
}
