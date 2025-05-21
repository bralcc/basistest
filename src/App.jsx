import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Box from "./components/Box";
import Exercises from "./pages/Exercises";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Box as="header">
        <Navbar />
      </Box>
      <Box as="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
