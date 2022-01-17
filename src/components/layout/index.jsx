import Header from "./header";
import Footer from "./footer";
import MobileMenu from "./mobileMenu";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const Layout = (props) => {
  const [mobileNav, setMobilenav] = useState(false);
  const { pathname } = useLocation();
  return (
    <>
      <div
        className={` ${
          pathname === "/"
            ? ""
            : "bg-gradient-to-r from-regal-blue to-regal-brown min-h-screen"
        }`}
      >
        <Header setToggle={setMobilenav} toggle={mobileNav} />
        {mobileNav && <MobileMenu setToggle={setMobilenav}/>}
        {props.children}
        <Footer />
      </div>
    </>
  );
};
export default Layout;
