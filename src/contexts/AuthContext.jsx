import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import baseURL from "../../service/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);

  const openLoginPopup = () => setLoginPopupOpen(true);
  const closeLoginPopup = () => setLoginPopupOpen(false);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.get(
          `${baseURL}/api/auth/verify-token`,
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(res.data.user);
      } catch (err) {
        console.error("Token verification failed:", err);
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    verifyToken();
  }, []);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = async () => {
    try {
      await axios.post(
        `${baseURL}/api/auth/logout`,
        {},
        {
          withCredentials: true,
        }
      );
    } catch (err) {
      console.error("Logout failed", err);
    }
    setIsAuthenticated(false);
    setUser(null);
  };

  if (loading) {
    return <divi>Loading . . . . ⏳</divi>;
  }
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        loading,
        isLoginPopupOpen,
        openLoginPopup,
        closeLoginPopup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
