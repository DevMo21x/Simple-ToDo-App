import { Plus } from "lucide-react";
const CreateNewTask = () => {
  return (
    <div className="flex justify-between create-task-container p-5 border-dashed border-2 border-gray-300 rounded-2xl cursor-pointer hover:border-gray-400 transition-colors duration-300 ease-in-out">
      <div className="flex gap-5">
        <div className="radio-btn-container border-dashed border-2 border-gray-300 w-6 rounded-4xl h-6"></div>
        <p className="text-[#AFB1B7]">Add a new task...</p>
      </div>

      <div>
        <Plus color="#AFB1B7" />
      </div>
    </div>
  );
};

export default CreateNewTask;
