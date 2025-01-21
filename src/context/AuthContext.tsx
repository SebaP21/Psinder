import React, {
    createContext,
    useState,
    useContext,
    useEffect,
    ReactNode,
  } from "react";
  import axios from "axios";
  
  // Interfejs użytkownika
  interface User {
    id: string;
    email: string;
  }
  
  // Typ kontekstu autentykacji
  interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (userData: User, token: string) => void;
    logout: () => void;
  }
  
  // Tworzymy kontekst autentykacji
  const AuthContext = createContext<AuthContextType | undefined>(undefined);
  
  // Hook do uzyskiwania dostępu do kontekstu
  export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };
  
  // Interfejs dla komponentu AuthProvider
  interface AuthProviderProps {
    children: ReactNode;
  }
  
  // Komponent AuthProvider - zarządza stanem autentykacji
  export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(
      localStorage.getItem("token") || null
    );
  
    // Ustawienie nagłówka autoryzacji w axiosie
    useEffect(() => {
      if (token) {
        axios.defaults.headers["Authorization"] = `Bearer ${token}`;
      } else {
        delete axios.defaults.headers["Authorization"];
      }
    }, [token]);
  
    // Funkcja logowania użytkownika
    const login = (userData: User, token: string) => {
      setUser(userData);
      setToken(token);
      localStorage.setItem("token", token); // Zapisujemy token w localStorage
    };
  
    // Funkcja wylogowywania użytkownika
    const logout = () => {
      setUser(null);
      setToken(null);
      localStorage.removeItem("token"); // Usuwamy token z localStorage
    };
  
    return (
      <AuthContext.Provider value={{ user, token, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  