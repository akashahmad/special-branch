import MessageBox from "../components/message";
const Message = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div className="container mx-auto  pb-16 lg:pb-32 pt-12 lg:pt-36">
          <p className="text-3xl text-white font-semibold text-center mb-12">
            Message
          </p>
          <MessageBox />
        </div>
      </div>
    </>
  );
};

export default Message;
