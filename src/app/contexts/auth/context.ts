import { createSafeContext } from "utils/createSafeContext";

interface AuthContextType {
  AuthContext: {
    isAuthenticated: boolean;
    user: { id: string; name: string } | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
  };
  useAuthContext: any;
}

export const [AuthContext, useAuthContext] = createSafeContext<AuthContextType>(
  "useAuthContext must be used within AuthProvider",
);
