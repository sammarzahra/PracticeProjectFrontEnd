import React, { useState, useEffect } from "react";
// import Analytics from "/images/Analytics.png";
// import Task from "/images/Task.png";
// import { Link } from "react-router-dom";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
// 	faBell,
// 	faUser,
// 	faGreaterThan,
// } from "@fortawesome/free-solid-svg-icons";
 import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
  import TaskForm from "../Taskform/Taskform";
  import EditForm from "../Taskform/EditTask";
import axios from "axios";
import Menu from "../../components/Menu";
import Header from "../../components/Header";

function Tasks() {
	const [loading, setLoading] = useState(true);

	const [tasks, setTasks] = useState([]); // State to store fetched tasks
  const [currentPage, setCurrentPage] = useState(1); // State to manage current page
  const itemsPerPage = 5; // Number of tasks per page
  useEffect(() => {
	const fetchTasks = async () => {
	  try {
		setLoading(true); // Set loading to true before fetching tasks
		const response = await axios.get(
		  `http://localhost:3000/api/tasks?page=${currentPage}`
		);
		setTasks(response.data.data); // Store fetched tasks in state
    {console.log(setTasks)}
		setLoading(false); // Set loading to false after tasks are fetched
	  } catch (error) {
		console.error("Error fetching tasks:", error);
	  }
	};
	fetchTasks();
  }, [currentPage]); // Dependency array to re-run effect when currentPage changes
  // Calculate total number of pages based on total tasks and itemsPerPage
  
//   const totalPages = Math.ceil(tasks.length / itemsPerPage);
  // Logic to paginate tasks
const paginate = (pageNumber) => setCurrentPage(pageNumber);
const indexOfLastTask = currentPage * itemsPerPage;
const indexOfFirstTask = indexOfLastTask - itemsPerPage;
const currentTasks = tasks.slice(indexOfLastTask,indexOfLastTask-indexOfFirstTask);
  console.log("currentTasks", currentTasks);
	

	const [showOptions, setShowOptions] = useState({});
    const [selectedTaskId, setSelectedTaskId] = useState(null);
    const toggleOptions = (taskId) => {
    setShowOptions((prevOptions) => ({
      ...prevOptions,
      [taskId]: !prevOptions[taskId],
    }));
    setSelectedTaskId(taskId);
  };
    const [showForm, setShowForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const toggleForm = () => {
      setShowForm(!showForm);
    };
    const handleEditClick = (taskId) => {
      setSelectedTaskId(taskId);
      setShowEditForm(true); // Set showEditForm to true
    };
    const handleAddClick = (taskId) => {
      setSelectedTaskId(taskId);
      setShowForm(true);
    };
    const handleDeleteClick = (taskId) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
    };

	return (
    <div className="flex h-screen">
    <Menu/>

    <div className=" pl-[2px] w-10/12 bg-[#F6F8FA]">
    
    <Header name="Tasks"/>
	{loading ? (
       <div className="flex items-center justify-center h-screen">
	   <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-800"></div>
	 </div>
      ) : (

				/*============================================================= This is bottom part */
				<section className="bg-slate-100 row-span-2 col-span-2">
          <div className="flex flex-nowrap">
            <div className="p-8 m-3">
              <h2 className=" text-xl font-bold">Start date: </h2>
              <input
                type="input"
                id="dateInput"
                placeholder="15-Apr-2024"
                className="m-2 border-2 border-[#4BCBEB] rounded p-1"
              />
            </div>
            <div className="p-8 m-3">
              <h2 className=" text-xl font-bold">End date: </h2>
              <input
                type="input"
                id="dateInput"
                placeholder="15-Apr-2024"
                className="m-2 border-2 border-[#4BCBEB] rounded p-1"
              />
            </div>
            {showForm && <TaskForm onClose={toggleForm} />}
            {showEditForm && <EditForm onClose={() => setShowEditForm(false)} />}
            <div className="flex-1 text-white bg-[#4BCBEB] rounded-lg ml-[300px] h-[34px] w-[5px] m-[70px] text-center p-2">
              <button onClick={toggleForm}>Add Task</button>
            </div>
          </div>
          <div className="flex ">
            <div className="pl-12 m-3 flex-1 ">
              <h2 className=" text-xl font-bold ">Enter Title: </h2>
              <input
                type="input"
                id="dateInput"
                placeholder="15-Apr-2024"
                className="m-2 border-2 border-[#4BCBEB] rounded p-1"
              />
            </div>
            <div className="flex-1 text-white bg-[#4BCBEB] rounded-lg mr-[800px] h-[34px] w-[90px]  text-center p-2 mt-12">
              <button>Search</button>
            </div>
          </div>
          <div className="bg-gray-200 p-2 grid  grid-cols-3 gap-4">
            {currentTasks.map((task) => (
              <div
                key={task.id}
                className="bg-white rounded-lg p-4 shadow-md relative">
                <h1 className="text-lg font-bold">Title</h1>
                <h3>{task.title}</h3>
                <h1 className="text-lg font-bold">Description</h1>
                <p className="text-gray-500">{task.description}</p>
                <div className="mt-4">
                  <h4 className="text-lg font-bold">Attachment:</h4>
                  <img
                    src={task.image}
                    alt="Attachment"
                    className="mt-2 w-full"
                  />
                  <div className="mt-4">
                    <h1 className="text-lg font-bold">Start Date</h1>
                    <p>{task.startDate}</p>
                    <h1 className="text-lg font-bold">End Date</h1>
                    <p>{task.endDate}</p>
                    {/* Add more task details here */}
                  </div>
                </div>
                <div>
                  {Array.from({ length: itemsPerPage }, (_, index) => (
                    <button key={index} onClick={() => paginate(index + 1)}>
                      {index + 1}
                    </button>
                  ))}
                </div>
                <span
                  className="text-[#4BCBEB] hover:bg-gray-50 cursor-pointer absolute top-2 right-2"
                  onClick={() => toggleOptions(task.id)}
                >
                  <FontAwesomeIcon icon={faEllipsisV} />
                  {showOptions[task.id] && selectedTaskId === task.id && (
                    <div
                      className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu">
                      <div className="py-1" role="none">
                        <button
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-right"
                          role="menuitem"
                          onClick={() => handleAddClick(task.id)}>
                          Add
                        </button>
                        <button
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-right"
                          role="menuitem"
                          onClick={() => handleDeleteClick(task.id)}>
                          Delete
                        </button>
                        <button
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-right"
                          role="menuitem"
                          onClick={() => handleEditClick(task.id)}>
                          Edit
                        </button>
                      </div>
                    </div>
                   )}
                </span>
              </div>
            ))}
          </div>
        </section>
	  )}
      </div>
	  
    </div>
  );
}
export default Tasks;
// import React, { useState, useEffect } from "react";
// // import Analytics from "/images/Analytics.png";
// // import Task from "/images/Task.png";
// import cover1 from "../../images/cover1"
// // import { Link } from "react-router-dom";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
// //  faBell,
// //  faUser,
// //  faGreaterThan,
// // } from "@fortawesome/free-solid-svg-icons";
// // import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
// // import TaskForm from "./TaskForm";
// // import EditForm from "./EditForm";
// import axios from "axios";
// // import Dashboardicon from "../../svg-components/dashboardicon";
// // import Usericon from "../../svg-components/usericon";
// // import Taskicon from "../../svg-components/Taskicon";
// // import Setting from "../../svg-components/Setting";
// // /import Bell from "../../svg-components/Bell";
// // import Pic from "../../svg-components/Pic";
// // import Arrow from "../../svg-components/Arrow";
// // import Calender from "../../svg-components/calender";
// import AddTask from "../../svg-components/AddTask";
// import Modal from "../../components/Modal";
// // import Dashboard2 from "../../svg-components/Dashboard2";
// // import Task2 from "../../svg-components/Task2";
// function Tasks() {
//   // =======================================================================================
//   const[loading , Setloading] = useState(true);
//   const [submittedData, setSubmittedData] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredTasks, setFilteredTasks] = useState([]);
//   const colors = [
//     "bg-red-500",
//     "bg-blue-500",
//     "bg-yellow-500",
//     "bg-green-500",
//     "bg-purple-500",
//   ];
//   const getRandomColor = () => {
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     return colors[randomIndex];
//   };
//   useEffect(() => {
//     fetchTasks();
//   },[] );
//   function fetchTasks() {
//     Setloading(true);
//     axios
//       .get("http://localhost:3000/api/tasks")
//       .then((response) => {
//         const filteredTasks = response.data.data;
//         setSubmittedData(filteredTasks);
//         setFilteredTasks(filteredTasks);
//         Setloading(false);
//         console.log(filteredTasks.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching tasks:", error);
//       });
//   }
//   function handleModalSubmit(data) {
//     axios.post('http://localhost:3000/api/tasks/addTasks', data)
//       .then(response => {
//         setSubmittedData([...submittedData, data]); // Update frontend state with the new task
//         setFilteredTasks([...filteredTasks, data]); // Update filtered tasks to include the new task
//         setShowModal(false);
//         console.log(response);
//       })
//       .catch(error => {
//         console.error('Error adding task:', error);
//       });
//   }
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return `${date.getFullYear()}-${(date.getMonth() + 1)
//       .toString()
//       .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
//   };
//   const handleSearchChange = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);
//     const filteredTasks = submittedData.filter((task) =>
//       task.title.toLowerCase().includes(query)
//     );
//     setFilteredTasks(filteredTasks);
//     console.log(filteredTasks);
//   };
//   // const paginate = (pageNumber) => setCurrentPage(pageNumber);
// // const indexOfLastTask = currentPage * itemsPerPage;
// // const indexOfFirstTask = indexOfLastTask - itemsPerPage;
// // const currentTasks = people.slice(indexOfFirstTask, indexOfLastTask);
//   // ===================================================================================
//   return (
//     <div className="flex h-screen">
//         <Menu/>
    
//         <div className=" pl-[2px] w-10/12 bg-[#F6F8FA]">
        
//        <Header name="Tasks"/>
//     {/* {loading ? (
//           <div className="flex items-center justify-center h-screen">
//     	   <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-800"></div>
//      	 </div>
//           ) : ( */}
   
//     <div className=" w-full h-screen grid grid-rows-3 grid-flow-col ">
//       {/*================================== This is sidebar============================= */}
//       {/* <div class="row-span-3 h-screen bg-[#FFFFFF] w-[320px] shadow-xl ">
//         <section className="flex items-center m-3 p-3 border border-gray-300 shadow-lg rounded">
//           <img src={Task} alt="Logo" className="mr-2 px-2" />
//           <span>
//             <h2 className="text-2xl font-medium text-[#4BCBEB]">
//               Task Manager List
//             </h2>
//           </span>
//         </section>
//         <div class="border-b border-[#F6F8FA] w-[10px]"></div>
//         <h1 className="m-5 text-lg pl-6 pt-5 font-bold ">Menu</h1>
//         <div className="m-4 flex items-center text-lg pl-6 p-3  ">
//           <Dashboard2 />
//           <div className="pl-4">
//             <Link to="/dashboard">Dashboard</Link>
//           </div>
//         </div>
//         <div className="m-4 flex items-center text-lg pl-6 p-3 border-2  border-[#F6F8FA]">
//           <Usericon />
//           <div className="pl-4">
//             <Link to="/users">Users</Link>
//           </div>
//         </div>
//         <div className="m-4 flex items-center text-lg pl-6 p-3 border-2 font-bold text-[#4BCBEB] shadow-md rounded-xl border-[#F6F8FA] ">
//           <Task2/>
//           <div className="pl-4">
//             <Link to="/tasks">Tasks</Link>
//           </div>
//         </div>
//         <div className="m-4 flex items-center text-lg pl-6 p-3 border-2  border-[#F6F8FA]">
//           <Setting />
//           <div className="pl-4">
//             <Link to="/settings">Settings</Link>
//           </div>
//         </div>
//       </div> */}
//       {/*================================================================ this is Dashboard */}
//       {/* <div className="col-span-2">
//         {/* Dashboard */}
//         {/* <div className="bg-[#FFFFFF] w-[1155px]  flex">
//           <div className="text-3xl p-6 font-bold right">Tasks</div>
//           <div className="left p-6 pl-[700px] size-max">
//             <Bell />
//           </div>
//           <div className="right p-6 pl-[5px] ">
//             <Pic />
//           </div>
//           <div className="p-5 pl-[3px] ">
//             <Link to="/usmanshahid">Usman Shahid</Link>
//             <p>Status 200</p>
//           </div>
//           <div className="p-6 pl-[2px] ">
//             <Arrow />
//           </div>
//         </div> */} 
//         {/*============================================================= This is bottom part */}
//         <section className="bg-slate-100   px-4 md:px-16 mt-7">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="w-full md:w-60 mb-4 md:mb-0">
//               <h1 className="font-bold text-xl">Start Date:</h1>
//               <input
//                 className="px-3 w-full md:w-4/5 h-10 mt-2 rounded-lg"
//                 type="date"
//                 placeholder="15-Apr-2024"
//                 required
//               />
//             </div>
//             <div className="w-full md:w-60">
//               <h1 className="font-bold text-xl">End Date:</h1>
//               <input
//                 className="px-3 w-full md:w-4/5 h-10 mt-2 rounded-lg"
//                 type="date"
//                 placeholder="15-Apr-2024"
//                 required
//               />
//             </div>
// {/* =======================masla----------------------------------------------- */}
//             <button className="h-10 ml-auto" onClick={() => setShowModal(true)}>
//               <AddTask/>
//             </button>
//           </div>
//           <h1 className="mt-5 font-bold">Enter Title:</h1>
//           <div className="flex">
//           {/* <div className="pl-12 m-3 flex-1 "> */}
//             <input
//               className="px-3 w-full md:w-[31%] h-10 mt-2 rounded-l-lg"
//               type="search"
//               placeholder="Search"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               required
//             />
//             {/* </div> */}
//             <button className="h-10 w-20 bg-[#4BCBEB] text-white rounded-r-lg m mt-2">
//               Search
//             </button>
//           </div>
//           <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-11 px-4 md:px-16">
//           {filteredTasks.map((item, index) => (
//             <div key={index} className="bg-white  rounded-xl  shadow-md ">
//               <div className={`h-6 mb-4 ${getRandomColor()} rounded-t-xl`} />
//               <div className="flex">
//                 <p className="text-sm font-bold px-3">Title:</p>
//                 <svg
//                   className="ml-60"
//                   width="25"
//                   height="25"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M9.75 12C9.75 13.2405 10.7595 14.25 12 14.25C13.2405 14.25 14.25 13.2405 14.25 12C14.25 10.7595 13.2405 9.75 12 9.75C10.7595 9.75 9.75 10.7595 9.75 12ZM9.75 19.5C9.75 20.7405 10.7595 21.75 12 21.75C13.2405 21.75 14.25 20.7405 14.25 19.5C14.25 18.2595 13.2405 17.25 12 17.25C10.7595 17.25 9.75 18.2595 9.75 19.5ZM9.75 4.5C9.75 5.7405 10.7595 6.75 12 6.75C13.2405 6.75 14.25 5.7405 14.25 4.5C14.25 3.2595 13.2405 2.25 12 2.25C10.7595 2.25 9.75 3.2595 9.75 4.5Z"
//                     fill="#4BCBEB"
//                   />
//                 </svg>
//               </div>
//               <p className="px-3">{item.title}</p>
//               <div className="text-sm font-bold mt-2 px-3">Description:</div>
//               <div className="px-3">{item.description}</div>
//               <div className="text-sm font-bold mt-2 px-3">Attachment:</div>
//               <img
//                 src={cover1}
//                 alt="Attachment"
//                 className="mt-1 w-full h-24 object-cover rounded-lg"
//               />
//               <div className="flex justify-between mt-2">
//                 <div className="text-sm font-bold px-3">Start Date:</div>
//                 <div className="text-sm font-bold mr-3">End Date:</div>
//               </div>
//               <div className="flex justify-between mt-1">
//                 <div className="text-sm px-3">{formatDate(item.startDate)}</div>
//                 <div className="text-sm mr-3 mb-3">
//                   {formatDate(item.endDate)}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       {/* </div> */}
//       {showModal && <Modal onSubmit={handleModalSubmit} />}
//       </section>
//       </div>
//       </div>
//       </div>
      
//   );
// }
// export default Tasks;