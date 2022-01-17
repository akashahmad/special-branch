import React from "react";
import { useEffect } from "react";
import  cookie  from 'react-cookies';

const AuthHOC = (props) => {

  const path = typeof window !== "undefined" && window.location.pathname;
  const authenticatedPaths = ["/home" , "/list" , "/message"];
  const isAuthenticated = cookie.load("username");
  useEffect(() => {
    if (path === "/"  && isAuthenticated) window.location.replace('/home');
    if (authenticatedPaths.includes(path) && !isAuthenticated)
    window.location.replace('/');
  }, [path]);
  return <>{props.children}</>;
};
export default AuthHOC;