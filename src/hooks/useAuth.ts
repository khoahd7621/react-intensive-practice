import { useContext } from "react";

import { AuthContext, AuthContextType } from "@/context/AuthContextProvider";

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthContextProvider");
  }

  return context;
};

export default useAuth;
