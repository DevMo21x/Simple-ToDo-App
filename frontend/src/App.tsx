import "./App.css";
import HomePage from "./pages/home/HomePage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/pricing"/>
      <Route />
    </Routes>
  )
}

export default App;
