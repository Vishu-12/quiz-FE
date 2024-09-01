import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Home from "./pages";
import QuesAndAns from "./pages/playQuiz/QuesAndAns";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Home />} />
      <Route path="/play-quiz" element={<QuesAndAns />} />
    </Routes>
  );
}

export default App;
