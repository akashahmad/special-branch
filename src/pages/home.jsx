import cookie from "react-cookies";
import RecentlyAddedNumber from "../components/recentlyAddedNumber";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from "react-loader-spinner";
const Home = ({ records, setRecords, setBackupData }) => {
  return (
    <>
        {cookie.load("username") ? (
          <div className="flex justify-center items-center w-full page-height">
            <div className="container mx-auto pt-12 lg:pt-36">
              <p className="text-3xl text-white font-semibold text-center mb-12">
                Add Phone Number
              </p>
              <div className="w-full lg:w-4/6 mx-auto px-5 lg:px-0">
                <RecentlyAddedNumber
                  records={records}
                  setRecords={setRecords}
                  setBackupData={setBackupData}
                />
              </div>
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
export default Home;
