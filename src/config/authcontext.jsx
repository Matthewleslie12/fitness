import {createContext, useContext, useEffect, useState} from "react";
import {auth} from "./firebase"; // Import your Firebase auth object

// Create an authentication context
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
};
