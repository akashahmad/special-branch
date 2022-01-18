import cookie from "react-cookies";
import MessageBox from "../components/message";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from "react-loader-spinner";
const Message = () => {
  return (
    <>
      {cookie.load("username") ? (
        <div className="flex justify-center items-center w-full page-height">
          <div className="container mx-auto  pb-16 lg:pb-32 pt-12 lg:pt-36">
            <p className="text-3xl text-white font-semibold text-center mb-12">
              Message
            </p>
            <MessageBox />
          </div>
        </div>
      ) : (
        <div className="w-full mx-auto flex justify-center items-center mt-10">
          <TailSpin color="#1d4d8d" height={660} width={330} />
        </div>
      )}
    </>
  );
};

export default Message;
