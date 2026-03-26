import "./App.css";
import HomePage from "./pages/home/HomePage";
import ToDoApp from "./pages/app/ToDoApp";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/to-do-app" element={<ToDoApp />} />
      <Route path="/pricing" />
    </Routes>
  );
}

export default App;
