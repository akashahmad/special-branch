import cookie from "react-cookies";
import LoginLogo from "../assets/image/loginLogo.png";
import loginFormLogo from "../assets/image/loginFormLogo.png";
import { useEffect } from "react";
const Login = () => {

  const users = [
    {
      userName: "dgk",
      password: "dgk1234",
    },
    {
      userName: "lhr",
      password: "lhr1234",
    },
    {
      userName: "abt",
      password: "abt1234",
    },
  ];
  useEffect(() => {
    document.getElementById("form").addEventListener("submit", auth);
  },[]);

  function auth(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    const filteredItems = users.find(
      (item) => item.userName === username && item.password === password
    );

    if (filteredItems) {
      cookie.save("username", username, { path: "/", maxAge: 3600 });
      window.location.replace("/");

    } else {
      alert("Please enter valid information");
      return;
    }
  }
  return (
    <>
      {!cookie.load('username') ?
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
                <form className="login-form" id="form">
                  <div className="mt-12">
                    <p className="text-light-gray">User Name</p>
                    <input
                      className="w-full px-6 py-2 border-2 rounded-md outline-none mt-2"
                      id="username"
                      type="text"
                      required={true}
                      placeholder="User Name"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-light-gray">Password</p>
                    <input
                      className="w-full px-6 py-2 border-2 rounded-md outline-none mt-2"
                      id="password"
                      type="password"
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
                    <button
                      type="submit"
                      className="bg-dark-blue text-white w-full rounded-md py-3 font-bold hover:scale-105  transition ease-in-out"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        : 
     <div/>

        }
    </>
  );
};
export default Login;
