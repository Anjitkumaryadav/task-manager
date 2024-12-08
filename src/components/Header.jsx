import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Daily Task Manager</h1>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/tasks" className="mr-4">Tasks</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
