// import dayjs from "dayjs";
const Task = () => {
  return (
    // card container
    <div className="flex gap-10  p-2 w-full mt-5">
      <input type="radio" />
      <p className="flex-1">Title:</p>
      <p className="flex-1">Description:</p>
      <p className="flex-1">Date:</p>
      <p className="flex-1">Priority:</p>
      <p className="flex-1">Category: </p>
      <p className="flex-1">Status:</p>
      <button className="flex-1">Completed</button>
      <button className="flex-1">Delete</button>
    </div>
  );
};

export default Task;
