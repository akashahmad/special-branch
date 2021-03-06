import { useLocation } from "react-router-dom";
import cookie from "react-cookies";
const Footer = () => {
  const { pathname } = useLocation();
  return (
    <>
      {cookie.load("username") ? (
        <div
          className={`relative bottom-0 flex flex-col lg:flex-row justify-center items-center lg:justify-between container mx-auto py-6 ${
            pathname === "/" ||
            pathname === "/list" ||
            pathname === "/message"
              ? "block"
              : "hidden"
          }`}
        >
          <div>
            <p className="text-lg text-white font-bold">
              Special 1889 Branch Punjab
            </p>
          </div>
          <div className="flex pt-5 lg:pt-0">
            <div className="mr-12">
              <p className="text-lg text-white font-bold cursor-pointer">
                Terms & Conditions
              </p>
            </div>
            <div>
              <p className="text-lg text-white font-bold cursor-pointer">
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </>
  );
};
export default Footer;
