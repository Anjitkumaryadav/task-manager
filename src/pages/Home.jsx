import { Link } from "react-router-dom";
const Home = () => {
    // Example task data for demonstration
    const tasks = {
      dsa: "No task for today!",
      webDev: "Create HTML website which is given in the task list.",
      college: "Complete DSTL unit-2 ",
    };
  
    return (
      <div className="relative h-screen w-full">
        {/* Background Section */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-lg"
          style={{
            backgroundImage: `url('/background.jpg')`, // Path to your image
          }}
        ></div>
  
        {/* Foreground Section */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          {/* Welcome Header */}
          <h1 className="text-gray-700 text-4xl font-bold mb-8">
            Welcome Sonali!
          </h1>
  
          {/* Tasks Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            {/* DSA Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h2 className="text-xl font-bold text-blue-600 mb-2">DSA Tasks</h2>
              <p className="text-gray-700">
                {tasks.dsa || "No tasks assigned for today"}
              </p>
            </div>
  
            {/* Web Development Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h2 className="text-xl font-bold text-green-600 mb-2">
                Web Development Tasks
              </h2>
              <p className="text-gray-700">
                {tasks.webDev || "No tasks assigned for today"}
              </p>
            </div>
  
            {/* College Work Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h2 className="text-xl font-bold text-purple-600 mb-2">
                College Work
              </h2>
              <p className="text-gray-700">
                {tasks.college || "No tasks assigned for today"}
              </p>
            </div>
          </div>
        <Link to="/tasks" className="mr-4"><button className="border bg-green-700 hover:bg-green-500 px-3 py-2 rounded-md mt-4 text-white">Get started</button></Link>
        </div>

      </div>
    );
  };
  
  export default Home;
  