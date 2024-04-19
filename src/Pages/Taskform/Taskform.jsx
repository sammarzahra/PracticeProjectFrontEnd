import React from "react";

function TaskForm({ onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-14 rounded-lg shadow-md relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          Close
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">Add Task</h2>
        <p className="mb-4">Enter the details below to add a new task:</p>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter task title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="3"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter task description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="attachment" className="block text-sm font-medium text-gray-700">
            Attachment
          </label>
          <div className="flex items-center">
            <div className="mr-2">
              <input id="file-upload" name="attachment" type="file" className="hidden" />
              <label
                htmlFor="file-upload"
                className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg"
              >
                Choose File
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            id="start-date"
            name="start-date"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <input
            type="date"
            id="end-date"
            name="end-date"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          onClick={onClose}
          className="bg-gray-400 px-4 py-2 rounded-md text-white hover:bg-gray-500"
        >
          Add Task
        </button>
        <button onClick={onClose} className="ml-2 px-4 py-2 rounded-md text-gray-700 hover:text-gray-900 border border-gray-300">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default TaskForm;
