import "./App.css";
import HomePage from "./pages/home/HomePage";
import ToDoApp from "./pages/app/ToDoApp";
// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  // const [toDoList, setToDoList] = useState([]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/to-do-app" element={<ToDoApp />} />
      <Route path="/pricing" />
    </Routes>
  );
}

export default App;
