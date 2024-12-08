import { useState } from "react";

const AddTaskModal = ({ addTask }) => {
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState({ title: "", description: "", dueDate: "" });

  const handleSubmit = () => {
    addTask(task);
    setTask({ title: "", description: "", dueDate: "" });
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded">
            <h3 className="text-lg font-bold mb-4">Add New Task</h3>
            <input
              type="text"
              placeholder="Task Title"
              className="border rounded p-2 w-full mb-2"
              value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })}
            />
            <textarea
              placeholder="Description"
              className="border rounded p-2 w-full mb-2"
              value={task.description}
              onChange={(e) => setTask({ ...task, description: e.target.value })}
            />
            <input
              type="date"
              className="border rounded p-2 w-full mb-2"
              value={task.dueDate}
              onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
            />
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
              >
                Save
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTaskModal;
