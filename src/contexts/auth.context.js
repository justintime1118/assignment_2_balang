const { createContext, useState, useContext } = require("react");

const initialValue = {
  isLoggedIn: false,
  signIn: () => {},
  logOut: () => {},
};

const AuthContext = createContext(initialValue);

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signIn = () => {
    setIsLoggedIn(true);
    alert("고객님, 오늘도 발랑하세요~^^");
  };
  const logOut = () => {
    setIsLoggedIn(false);
    alert("로그아웃 되었습니다");
  };

  const value = {
    isLoggedIn,
    signIn,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
