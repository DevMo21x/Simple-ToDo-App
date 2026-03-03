import TodaysDate from "./TodaysDate";

import Task from "./Task";
const TasksLayoutGrid = () => {
  return (
    <div className=" flex flex-col  items-start max-w-5xl mx-auto mt-15 border">
      <TodaysDate />
      <Task />
    </div>
  );
};

export default TasksLayoutGrid;
