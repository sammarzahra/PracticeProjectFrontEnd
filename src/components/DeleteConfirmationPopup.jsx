import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Deleteicon2 from "../../svg components/Deleteicon2";
function DeleteConfirmationPopup({ id: taskId, taskTitle, fetchTask }) {
  const [cross, setCross] = useState(true);
  // const [ShowPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state
  console.log("taskId: ", taskId);
  console.log("Here is the task now delete");
  // const fetchRemainingTasks = async () => {
  //     try {
  //         const response = await axios.get("http://localhost:3000/api/tasks");
  //         const remainingTasks = response.data;
  //         return remainingTasks;
  //      console.log(remainingTasks);
  //     } catch (error) {
  //         console.error("Error fetching remaining tasks:", error);
  //         return []; // Return an empty array in case of error
  //     }
  // };
  function crossDisplay() {
    setCross(!cross);
  }
  const handleCancel = () => {
    setCross(false); // Hide the popup when cancel is clicked
  };
  // const handleDelete = (task_Id) => {
  //  axios
  //      .delete(`http://localhost:3000/api/tasks/${taskId}`)
  //      .then((response) => {
  //          setCross(false); // Hide the popup after successful deletion
  //          console.log("Task deleted successfully:", response);
  //      })
  //      .catch((error) => {
  //          console.error("Error deleting task:", error);
  //      });
  // };
  const handleDelete = async (task_Id) => {
    setLoading(true); // Set loading state to true
    try {
      await axios.delete(`http://localhost:3000/api/tasks/${taskId}`);
      setCross(false); // Hide the popup after successful deletion
      console.log("Task deleted successfully");
      // Fetch remaining tasks after deletion
      const remainingTasks = await fetchTask();
      console.log("Remaining tasks:", remainingTasks);
    } catch (error) {
      console.error("Error deleting task:", error);
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };
  return (
    <>
      {cross && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#000000] bg-opacity-70">
          <div className="bg-white p-8 w-[632px] h-[436px] rounded-lg">
            <button
              onClick={() => setCross(false)}
              className=" flex ml-[550px]  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex items-center justify-center mb-4  ">
              <Deleteicon2 />
            </div>
            {/* </div> */}
            <h2 className="text-[22px] justify-center flex  font-Poppins text-[#2C2C2E]">
              Are you sure you want to delete this Task {taskTitle}?
            </h2>
            <div className="flex justify-center">
              <button
                className="bg-[#4BCBEB]  h-[56px] text-white text-[20px] font-Poppins ml-8 mt-3 rounded-md relative"
                style={{ width: "167px", height: "56px" }} // Set fixed dimensions for the button
                disabled={loading} // Disable button when loading is true
                type="Button"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="bg-[#D9D9D9] text-[#2C2C2E] text-[20px] font-Poppins  ml-8 mt-3 rounded-md relative"
                style={{ width: "167px", height: "56px" }} // Set fixed dimensions for the button
                onClick={handleCancel}
                type="Button"
                disabled={loading} // Disable button when loading is true
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
DeleteConfirmationPopup.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default DeleteConfirmationPopup;
