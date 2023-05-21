import { User } from "@/models/User";
import { createContext, useState } from "react";

export interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (data: { username: string; password: string }) => void;
  logout: () => void;
}

// Create the user context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create the user context provider
const AuthContextProvider = ({ children }: React.PropsWithChildren) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = (data: { username: string; password: string }) => {
    setIsLoggedIn(true);
    setUser({
      id: 0,
      username: data.username,
      fullName: "John Doe",
      email: "johndoe@example.com",
      phone: "0123456789",
      address: "123 Street, City, Country",
    });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const AuthContextValue: AuthContextType = {
    user,
    isLoggedIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={AuthContextValue}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
