import { Routes, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"
import Home from "./views/Home"
import Navbar from "./components/Navbar"
import theme from "./theme"
import './App.css';

function App () {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </div>
    </ChakraProvider>
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
