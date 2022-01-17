import LoginLogo from "../assets/image/loginLogo.png";
import loginFormLogo from "../assets/image/loginFormLogo.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="flex justify-between screen-height">
        <div className="bg-gradient-to-b from-regal-blue to-regal-brown w-2/5 hidden lg:block">
          <div className=" flex justify-center items-center h-full">
            <img src={LoginLogo} alt="police-logo" />
          </div>
        </div>
        <div className="w-full lg:w-3/5 px-4 lg:px-44 py-0 lg:py-24 overflow-y-scroll flex justify-center items-center">
          <div className="w-full px-12 py-12 border-2 border-opacity-50 shadow-md rounded-md">
            <div>
              <img src={loginFormLogo} alt="Police-Logo" />
            </div>
            <div className="w-full">
              <p className="text-3xl text-dark-gray font-black mt-10">
                Login to your Account
              </p>
              <p className="text-dark-gray mt-2 text-base">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <form>
                <div className="mt-12">
                  <p className="text-light-gray">Email</p>
                  <input
                    className="w-full px-6 py-2 border-2 rounded-md outline-none mt-2"
                    type="email"
                    required={true}
                    placeholder="mail@abc.com"
                  />
                </div>
                <div className="mt-6">
                  <p className="text-light-gray">Password</p>
                  <input
                    className="w-full px-6 py-2 border-2 rounded-md outline-none mt-2"
                    required={true}
                    placeholder="*****************"
                  />
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between mt-3">
                  <div>
                    <input type="checkbox" className="mr-2" />
                    <label htmlFor="vehicle1">Remember Me</label>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark-blue cursor-pointer pt-5 lg:pt-0">
                      Forgot Password?
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link to="/home">
                    <button
                      type="submit"
                      className="bg-dark-blue text-white w-full rounded-md py-3 font-bold"
                    >
                      Login
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
