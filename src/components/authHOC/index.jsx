import React from "react";
import { useEffect } from "react";
import cookie from "react-cookies";

const AuthHOC = (props) => {
  const path = typeof window !== "undefined" && window.location.pathname;
  const authenticatedPaths = ["/", "/list", "/message"];
  const isAuthenticated = cookie.load("username");
  useEffect(() => {
    if (path === "/login" && isAuthenticated) window.location.replace("/");
    if (authenticatedPaths.includes(path) && !isAuthenticated)
      window.location.replace("/login");
  }, [path]);
  return <>{props.children}</>;
};
export default AuthHOC;
