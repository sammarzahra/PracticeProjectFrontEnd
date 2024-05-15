import React, { useState } from "react";
import axios from 'axios';
//  import axios from "axios";
// import PropTypes from "prop-types";
// import Modal from "../components/Modal";
 import DeleteConfirmationPopup from "../components/DeleteConfirmationPopup";
import EditModal2 from "./EditModal2";


const Dropdown = ({id}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [showModal2, setShowModal2] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};
	// function (taskId, newData) {
	// 	setSelectedTaskId(taskId);
	// 	setShowEditTask(true); // Show the edit form
	// 	axios
	// 	  .patch(`http://localhost:3000/api/tasks/${taskId}`, newData)
	// 	  .then((response) => {
	// 		const updatedTask = response.data; // Assuming the backend returns the updated task
	// 		// Update the task in your state or data
	// 		const updatedTasks = filteredTasks.map((task) =>
	// 		  task._id === taskId ? updatedTask : task
	// 		);
	// 		setFilteredTasks(updatedTasks);
	// 		setShowEditTask(false);
	// 	  })
	// 	  .catch((error) => {
	// 		console.error("Error editing task:", error);
	// 	  });
	//   }



	


	function handleModalSubmit(data) {
		axios
		  .delete(`http://localhost:3000/api/tasks/${data.data_id}`)
		  .then((response) => {
			// If deletion is successful, handle any necessary UI updates or notifications
			console.log("Task deleted successfully:", response);
			setShowModal(false); // Close the modal after successful deletion
		  })
		  .catch((error) => {
			console.error("Error deleting task:", error);
		  });
	  }
	  
			

	return (
		<div className="relative inline-block text-left ">
			<div>
				<button
					type="button"
					className="inline-flex justify-center items-center p-2  ml-40 rounded-md text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
					onClick={toggleDropdown}>
					<svg
						// className=" ml-56"
						width="25"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.75 12C9.75 13.2405 10.7595 14.25 12 14.25C13.2405 14.25 14.25 13.2405 14.25 12C14.25 10.7595 13.2405 9.75 12 9.75C10.7595 9.75 9.75 10.7595 9.75 12ZM9.75 19.5C9.75 20.7405 10.7595 21.75 12 21.75C13.2405 21.75 14.25 20.7405 14.25 19.5C14.25 18.2595 13.2405 17.25 12 17.25C10.7595 17.25 9.75 18.2595 9.75 19.5ZM9.75 4.5C9.75 5.7405 10.7595 6.75 12 6.75C13.2405 6.75 14.25 5.7405 14.25 4.5C14.25 3.2595 13.2405 2.25 12 2.25C10.7595 2.25 9.75 3.2595 9.75 4.5Z"
							fill="#4BCBEB"
						/>
					</svg>
				</button>
			</div>

			{isOpen && (
				<div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						
						<a
							href="#"
							onClick={() => setShowModal(true)}
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
							>
							Delete
						</a>

						<a
							href="#"
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
							View
						</a>
						<a
							href="#"
							onClick={() => setShowModal2(true)}
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
							Edit
						</a>
					</div>
				</div>
			)}
			{showModal && <DeleteConfirmationPopup onSubmit={handleModalSubmit} id={id}/>}
			{showModal2 && <EditModal2 onSubmit={handleModalSubmit} />}

			
		</div>
	);
};

//  Dropdown.propTypes = {
//    onDelete: PropTypes.func.isRequired,
//   };

export default Dropdown;