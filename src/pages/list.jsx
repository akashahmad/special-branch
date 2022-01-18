import cookie from "react-cookies";
import ListPageListing from "../components/listing";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from "react-loader-spinner";

const List = ({ records, setRecords, backupData }) => {

  // Search Handler
  const searchHandler = (value) => {
    const filteredItems = backupData.filter(
      (item) => item.indexOf(value) !== -1
    );
    setRecords(filteredItems);
  };

  return (
    <>
      {cookie.load("username") ? (
        <div className="flex justify-center items-center w-full pt-16 lg:pb-32 lg:pt-36 page-height">
          <div className="container mx-auto">
            <p className="text-3xl text-white font-semibold text-center mb-12">
              List
            </p>
            <ListPageListing records={records} searchHandler={searchHandler} />
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

export default List;
