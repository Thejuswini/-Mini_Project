import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import "./Styles/global.css"; // Import global styles

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* ✅ Route for Login */}
          <Route path="/" element={<Login />} />
          
          {/* ✅ Route for Signup */}
          <Route path="/signup" element={<Signup />} />
          
          {/* ✅ Route for Home */}
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
