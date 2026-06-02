import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('ecovision_user')
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  })

  const login = (token, userData) => {
    localStorage.setItem('ecovision_token', token)
    localStorage.setItem('ecovision_user', JSON.stringify(userData))
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem('ecovision_token')
    localStorage.removeItem('ecovision_user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
