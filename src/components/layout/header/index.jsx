import loginFormLogo from "../../../assets/image/loginFormLogo.png";
import { Link, useLocation } from "react-router-dom";
import { Pivot as Hamburger } from "hamburger-react";
const Header = ({ setToggle, toggle }) => {
  const { pathname } = useLocation();
  const navActiveHandler = (value) => {
    return pathname === value
      ? "bg-white text-dark-blue"
      : "bg-dark-blue text-white";
  };

  return (
    <>
      <div
        className={`layout-border py-4 sticky lg:absolute top-0 left-0 right-0 z-40 bg-gradient-to-r from-regal-blue to-regal-brown lg:bg-transparent ${
          pathname === "/" ? "hidden" : "none"
        }`}
      >
        <nav
          className={`container mx-auto  flex justify-between items-center px-5 lg:px-0`}
        >
          <div>
            <Link
              to="/"
              onClick={() => {
                setToggle(false);
              }}
            >
              <img src={loginFormLogo} width={65.39} alt="Police-logo" />
            </Link>
          </div>
          <div className="flex hidden lg:block">
            <Link className="mr-7" to="/home">
              <button
                className={`transition ease-in-out layout-button font-semibold rounded-md ${navActiveHandler(
                  "/home"
                )}`}
              >
                Send Message
              </button>
            </Link>
            <Link to="/list" className="mr-7">
              <button
                className={`transition ease-in-out layout-button font-semibold rounded-md ${navActiveHandler(
                  "/list"
                )}`}
              >
                View List
              </button>
            </Link>
            <Link to="/message">
              <button
                className={`transition ease-in-out layout-button font-semibold rounded-md ${navActiveHandler(
                  "/message"
                )}`}
              >
                Message
              </button>
            </Link>
          </div>
          <div
            className="hamburger-mobile block lg:hidden"
            onClick={() => setToggle(!toggle)}
          >
            <Hamburger toggled={toggle} />
          </div>
        </nav>
      </div>
    </>
  );
};
export default Header;
