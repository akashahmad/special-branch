import search from "../../assets/image/icons/search.png";
const ListPageListing = ({ records, searchHandler }) => {
  return (
    <>
      <div className="box-height bg-white rounded-md mt-5 mx-5">
        <div className="flex flex-col lg:flex-row justify-between items-center pt-4 pb-10 px-16">
          <div>
            <p className="dark-black font-bold text-lg">Added Numbers</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="relative listing-search">
              <input
                className="outline-none border-2 rounded-md py-2 lg:w-96 px-12 my-6 lg:my-0"
                placeholder="Search"
                type="search"
                onChange={(event) => searchHandler(event.target.value)}
              />
              <img
                src={search}
                className="absolute top-9 lg:top-4 left-5"
                alt="search"
              />
            </div>
          </div>
        </div>
        <div className="pl-16 pr-12">
          <div className="flex flex-col lg:flex-row justify-between flex-wrap">
            {records?.map((single, index) => (
              <div
                className="border rounded-md px-3 mb-4 w-full lg:w-30"
                key={index}
              >
                <div>
                  <p className="text-dark-black-two font-semibold text-base py-3 text-center">
                    {single}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ListPageListing;
