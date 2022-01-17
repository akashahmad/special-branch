import MessageBox from "../components/message";
import AuthHOC from "../components/authHOC";
import cookie from "react-cookies";
import ContentLoader from "react-content-loader";
const Message = () => {
  return (
    <>
      <AuthHOC>
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
          <div className="flex justify-center mt-10">
            <ContentLoader
              height={640}
              width={800}
              viewBox="0 0 350 300"
              backgroundColor="#f0f0f0"
              foregroundColor="#d580ff"
            >
              <rect x="40" y="100" rx="9" ry="9" width="975" height="170" />
            </ContentLoader>
          </div>
        )}
      </AuthHOC>
    </>
  );
};

export default Message;
