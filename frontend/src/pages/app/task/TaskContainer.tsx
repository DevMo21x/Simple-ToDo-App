import { EllipsisVertical, Calendar } from "lucide-react";
// import { Link } from "react-router-dom";
const TaskContainer = () => {
  return (
    <div className="task-container border flex w-3xl h-20 justify-between items-center p-5 rounded-2xl hover:shadow-sm"
    style={{borderColor: '#CCD7E4'}}>
      <div className="flex gap-5 ">
        <div className="radio-btn-container border w-6 rounded-4xl h-6 cursor-pointer"></div>

        {/* Container for Task content */}
        <div className="task-content-container">
          <p>Buy groceries for dinner</p>
          <div className="flex gap-2.5 items-center mt-1 text-[#7C8BA0]">
            <Calendar size={16} />
            <p>Due: 8th march</p>
          </div>
        </div>
      </div>

      {/* Label and dropdown menu container */}
      <div className="flex items-center gap-2">
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
          Personal
        </span>
        <EllipsisVertical size={16} />
      </div>
    </div>
  );
};

export default TaskContainer;
