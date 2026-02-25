import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  )

  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  )

  const login = (responseData) => {
    // assuming backend returns { user: {...}, token: "..." }

    const { user, token } = responseData

    setUser(user)
    setToken(token)

    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("token", token)
  }

  const logout = () => {
    setUser(null)
    setToken(null)

    localStorage.removeItem("user")
    localStorage.removeItem("token")
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)