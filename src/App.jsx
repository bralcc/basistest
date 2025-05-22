import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Box from "./components/Box";
import Exercises from "./pages/Exercises";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Exercise1 from "./pages/Exercise1";
import Testpage from "./pages/Testpage";

function App() {
  return (
    <>
      <Box as="header">
        <Navbar />
      </Box>
      <Box as="main" className="bg-background text-text p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/exercise1" element={<Exercise1 />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/testpage" element={<Testpage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
