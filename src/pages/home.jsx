import { useState } from "react";
import RecentlyAddedNumber from "../components/recentlyAddedNumber";

const Home = ({ records, setRecords }) => {
  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div className="container mx-auto pt-12 lg:pt-36">
          <p className="text-3xl text-white font-semibold text-center mb-12">
            Add Phone Number
          </p>
          <div className="w-full lg:w-4/6 mx-auto px-5 lg:px-0">
            <RecentlyAddedNumber
              records={records}
              setRecords={setRecords}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
