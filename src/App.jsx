import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TaskManager from "./pages/TaskManager";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app min-h-screen bg-opacity-50 inset-0 bg-gray-300">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
