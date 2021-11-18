import { Routes, Route } from "react-router-dom";
import Home from "./views/Home"
import Navbar from "./components/Navbar"
import './App.css';
import Quiz from "./views/Quiz";

function App () {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function NotFound () {
  return (
    "Not found"
  )
}

export default App;
