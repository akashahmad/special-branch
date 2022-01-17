const MessageBox = () => {
  return (
    <>
      <div className="w-full lg:w-4/6 mx-auto message-page px-5 lg:px-0">
        <form>
          <textarea className=" rounded-md h-64 outline-none px-8 py-4" required={true}></textarea>
          <div className="flex justify-center mt-6">
            <button type="submit" className="transition ease-in-out bg-dark-blue add-button  hover:bg-white hover:text-dark-blue font-semibold rounded-md text-white py-2 mr-2 mt-1">
              Update Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default MessageBox;
