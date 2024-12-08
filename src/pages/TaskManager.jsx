const TaskManager = () => {
  return (
    <div className="container mx-auto p-6 ">
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>{" "}
      <hr className="text-black" />
      <div className="text-center text-2xl font-semibold mb-4">DSA</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div className="rounded-md px-2 py2 bg-white shadow-md">No task</div>
      </div>

      <div className="text-center text-2xl font-semibold mt-44 mb-4">
        <hr /> Web devlopment
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div className="rounded-md px-2 py2 bg-white shadow-md text-center">
          <div>Your task is here- </div><div>|</div>
          <a
            href="https://drive.google.com/file/d/1-XAeAuWDspCjeU9Iio2xhorTpBLOy4-U/view?usp=sharing" // Path to your image
            download="downloaded-image.jpg" // Name of the file after download
            target="_blank"
            className="bg-gray-600 text-white px-2 py-1 rounded shadow hover:bg-gray-800 transition "
          >
            Download Image
          </a>
        </div>
      </div>

      <div className="text-center text-2xl font-semibold mt-44">
        College subjects
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div className="rounded-md px-2 py2 bg-white shadow-md">
          Task:- DSTL Unit-2 Complete with DPP solve.
          <div> </div>
        </div>
        
      </div>
    </div>
  );
};

export default TaskManager;
