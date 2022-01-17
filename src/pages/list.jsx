import ListPageListing from "../components/List";
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
      <div className="flex justify-center items-center w-full pt-16 lg:pb-32 lg:pt-36">
        <div className="container mx-auto">
          <p className="text-3xl text-white font-semibold text-center mb-12">
            List
          </p>
          <ListPageListing records={records} searchHandler={searchHandler} />
        </div>
      </div>
    </>
  );
};

export default List;
