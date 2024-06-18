import React, { useState } from "react";
import { useCookies } from "react-cookie";

// Create a context object
const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {

  const [cookies, setCookie, removeCookie] = useCookies(["appToken"]);

  const [userSessionData, setUserSessionData] = useState(undefined);

  // save token in cookies
  const setSession = (token) => {
    setCookie("appToken", token, {
      path: "/",
      maxAge: 900, //15minutes
    });
  };

  // retrieve value of token from cookies.appToken
  const getSession = () => {
    const token = cookies.appToken || null;
    return token;
  };

  // update the value of the userSessionData
  const setUserData = (userData) => setUserSessionData(userData);

  // get user data
  const getUserData = () => userSessionData;

  //logout fxn
  const logout = () => {
    removeCookie("appToken", { path: "/" });
    setUserData(undefined);
  };

  return (
    <AppContext.Provider
      value={{
        setSession,
        getSession,
        setUserData,
        getUserData,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };
export default AppContextProvider;