import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
