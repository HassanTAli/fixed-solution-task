import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Posts from "../Pages/Posts";
import Users from "../Pages/Users";

import "./App.css";

const App = () => {
  return (
    <div className="bg-dark">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/post/:userId" element={<Posts />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
