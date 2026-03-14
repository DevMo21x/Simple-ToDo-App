import { Plus } from "lucide-react";
import { useState } from "react";
const CreateNewTask = () => {
  const [isClicked, setIsClicked] = useState(false);

  const boxStyle = {
    border: isClicked ? "2px solid #AFB1B7" : undefined,
  };

  const setIsClickedToTrue = () => {
    if (!isClicked) {
      setIsClicked(true);
    }
  };

  const setIsClickedToFalse = () => {
    setIsClicked(false);
  };

  return (
    <div
      className="create-task-container p-5 border-dashed border-2 border-gray-300 rounded-2xl cursor-pointer hover:border-gray-400 transition-colors duration-300 ease-in-out"
      style={boxStyle}
      onClick={setIsClickedToTrue}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-5">
          <div className="radio-btn-container border-dashed border-2 border-gray-300 w-6 rounded-4xl h-6">
            {}
          </div>

          {!isClicked ? (
            <p className="text-[#AFB1B7] ">Add a new task...</p>
          ) : (
            <input
              className="w-100 outline-none"
              type="text"
              placeholder="What need to be done?"
            />
          )}
        </div>

        {!isClicked && (
          <div>
            <Plus color="#AFB1B7" />
          </div>
        )}
      </div>

      {isClicked && (
        <div className="flex justify-between items-center ">
          {/* Filters container */}
          <div
            className="ml-15 border rounded-2xl p-0.5"
            style={{ borderColor: "#CCD7E4" }}
          >
            <select className="cursor-pointer outline-none">
              <option value={"work"}>Work</option>
              <option value={"personal"}>Personal</option>
              <option value={"urgent"}>Urgent</option>
            </select>
          </div>
          {/* // buttons container div */}
          <div className="flex gap-2.5 ">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition cursor-pointer">
              Add Task
            </button>
            <button
              onClick={setIsClickedToFalse}
              className="bg-white text-black px-4 py-2 rounded border border-gray-300 hover:bg-gray-200 transition cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNewTask;
