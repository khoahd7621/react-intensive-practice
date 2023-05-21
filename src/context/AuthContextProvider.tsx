import { User } from "@/models/User";
import { createContext, useState } from "react";

export interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (data: { username: string; password: string }) => void;
  logout: () => void;
  updateProfile: (data: User) => void;
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
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      phone: "0123456789",
      address: "123 Street",
      optional: "Apartment 123",
      city: "City",
      country: "Japan",
      zip: "12345",
    });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const updateProfile = (data: User) => {
    setUser(data);
  };

  const AuthContextValue: AuthContextType = {
    user,
    isLoggedIn,
    login,
    logout,
    updateProfile,
  };

  return <AuthContext.Provider value={AuthContextValue}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
