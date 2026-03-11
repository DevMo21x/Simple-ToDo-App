import AppHeading from "./AppHeading";
import SideMenu from "./menu/SideMenu";
import TasksContentLayout from "./task/TasksContentLayout";
const ToDoApp = () => {
  return (
    <div className="flex ">
      <div>
        <AppHeading />
        <SideMenu />
      </div>
      <div className="mt-38 ml-20">
        <TasksContentLayout />
      </div>
    </div>
  );
};

export default ToDoApp;
