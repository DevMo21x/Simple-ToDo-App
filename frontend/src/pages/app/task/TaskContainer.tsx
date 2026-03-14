import { EllipsisVertical, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

const TaskContainer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="task-container border flex w-3xl h-20 justify-between items-center p-5 rounded-2xl hover:shadow-sm"
      style={{ borderColor: "#CCD7E4" }}
    >
      <div className="flex gap-5">
        <div className="radio-btn-container border w-6 rounded-4xl h-6 cursor-pointer"></div>

        {/* Container for Task content */}
        <div className="task-content-container">
          <p>Buy groceries for dinner</p>
          <div className="flex gap-2.5 items-center mt-1 text-[#7C8BA0]">
            <Calendar size={16} />
            <p>Due: 8th March</p>
          </div>
        </div>
      </div>

      {/* Label and dropdown menu container */}
      <div className="relative flex items-center gap-2 dropdown-container">
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
          Personal
        </span>
        <div>
          <EllipsisVertical
            size={16}
            onClick={toggleDropdown}
            className="cursor-pointer"
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg">
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Edit
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskContainer;
