import { v4 as uuidv4 } from "uuid";

const HomeAddNumber = ({ newNumber, setNewNumber, setRecords, records }) => {
  const AddNumber = () => {
    // event.preventDefault();
    // event.target.new_number.value = "";
    let _number = [...records];
    let newData = { number: newNumber, id: uuidv4() };
    _number?.push(newData);
    setRecords(_number);
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          AddNumber(event);
        }}
      >
        <div className="flex w-full bg-white rounded-md justify-between ">
          <div>
            <input
              type="number"
              placeholder="+923********"
              name="new_number"
              className="outline-none py-3 rounded-md pl-4"
              onChange={(event) => {
                setNewNumber(event.target.value);
              }}
            />
          </div>
          <div>
            <button
              className="bg-dark-blue add-button font-semibold rounded-md text-white py-2 mr-2 mt-1"
              type="submit"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default HomeAddNumber;
