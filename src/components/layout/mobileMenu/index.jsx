import { Link } from "react-router-dom";
const MobileMenu = ({ setToggle }) => {
  const closeMenu = () => {
    window.scrollTo(0, 0);
    setToggle(false);
  };
  return (
    <>
      <div className="mobile-menu z-30 flex flex-col w-full px-6 bg-gradient-to-b from-regal-blue to-regal-brown pt-44 overflow-y-scroll fixed left-0 right-0 bottom-0 h-screen">
        <div>
          <nav>
            <ul>
              <li
                className="text-4xl font-semibold mb-7 text-white"
                onClick={() => {
                  closeMenu();
                }}
              >
                <Link to="/">Send Message</Link>
              </li>

              <li
                className="text-4xl font-semibold mb-7 text-white"
                onClick={() => {
                  closeMenu();
                }}
              >
                <Link to="/list">View List</Link>
              </li>
              <li
                className="text-4xl font-semibold mb-7 text-white"
                onClick={() => {
                  closeMenu();
                }}
              >
                <Link to="/message">Message</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
