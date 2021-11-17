import { Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home"
import Navbar from "./components/Navbar"
import './App.css';

function App () {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
  );
}

function About () {
  return (
    <>
      <main>
        <h2>Welcome to the about page!</h2>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  )
}

export default App;
