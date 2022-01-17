import DustBin from "../../assets/image/icons/delete.png";
import Add from "../../assets/image/icons/add.png";
import { Link } from "react-router-dom";

const RecentlyAddedNumber = ({
  setRecords,
  records,
}) => {
  // Delete Function
  const deleteHandler = (index) => {
    let afterDelete = [...records]
    afterDelete.splice(index, 1);;
    setRecords(afterDelete);
  };

  // Add New Number
  const AddNumber = () => {
    let _number = [...records];
    let newData = "+923";
    _number?.push(newData);
    setRecords(_number);
    setTimeout(()=>{
      document.getElementById("idContentEditable"+(_number.length-1)).focus()
    },500)
  };

  // On Kyepress Fnction
  const handleKeypress = (event) => {
    if (event.code === "Enter" && records[records.length-1] !=="+923") {
      AddNumber();
    }
  };

  const updateNumber=(value, index)=>{
    const _records = [...records];
    _records[index] = value;
    setRecords([..._records]);
  }

  return (
    <>
      <div className="box-height bg-white rounded-md mt-5">
        <div className="flex justify-between justify-center items-center px-6 py-6">
          <div>
            <p className="dark-black text-lg font-bold">
              Recently Added Numbers
              <span className="text-xs">( {records?.length} Number )</span>
            </p>
          </div>
          <div>
            <img
              id="addButton"
              src={Add}
              width={36}
              alt="Add"
              className="cursor-pointer"
              onClick={(event) => {
                AddNumber(event);
              }}
            />
          </div>
        </div>
        {records?.length ? (
          <div className="p-5">
            {records?.map((single, index) => (
              <div
                className="mx-6 border rounded-md px-3 flex justify-between my-5"
                key={index+""}
              >
                <div>
                  <input
                    id={"idContentEditable" + index}
                    defaultValue={single}
                    name="new_number"
                    className="text-dark-black-two font-semibold text-base py-3 outline-none"
                    onChange={(event) => {
                      updateNumber(event.target.value, index);
                    }}
                    onKeyPress={handleKeypress}
                  />
                </div>
                <div
                  className="pl-3 lg:pl-6 lg:pr-3 border-l-2 flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    deleteHandler(index);
                  }}
                >
                  <img src={DustBin} alt="dustBin" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="flex justify-center">
              <p className="font-bold text-xl py-12">No Number Found</p>
            </div>
          </>
        )}
      </div>

      <div className="flex justify-center mt-6">
        <Link to="/list">
          <button className="transition ease-in-out bg-dark-blue add-button  hover:bg-white hover:text-dark-blue font-semibold rounded-md text-white py-2 mr-2 mt-1">
            Send Message
          </button>
        </Link>
      </div>
    </>
  );
};
export default RecentlyAddedNumber;
