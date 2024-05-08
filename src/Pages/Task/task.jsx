import React, { useState, useEffect } from "react";
// import Analytics from "/images/Analytics.png";
// import Task from "/images/Task.png";
import Cover1 from "../../images/Cover1.png";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBell,
//   faUser,
//   faGreaterThan,
// } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
// import TaskForm from "../Taskform/Taskform";
// import EditForm from "../Taskform/EditTask";
import axios from "axios";
// import Dashboardicon from "../../svg-components/dashboardicon";
// import UserIcon from "../../../svg components/UserIcon";
// import Taskicon from "../../svg-components/Taskicon";
// import Setting from "../../svg-components/Setting";
// import Bell from "../../svg-components/Bell";
// import Pic from "../../svg-components/Pic";
// import Arrow from "../../svg-components/Arrow";
// import Calender from "../../svg-components/calender";
import AddTask from "../../../svg components/AddTask";
import Modal from "../../components/Modal";
// import Dashboard2 from "../../svg-components/Dashboard2";
import Task2 from "../../../svg components/Task2";
import Menu from "../../components/Menu";
import User from "../../../svg components/User";
import Notification from "../../../svg components/Notification";
function Tasks() {
  // =======================================================================================
  const [loading, Setloading] = useState(true);
  const [submittedData, setSubmittedData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-purple-500",
  ];
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  function fetchTasks() {
    Setloading(true);
    axios
      .get("http://localhost:3000/api/tasks")
      .then((response) => {
        const filteredTasks = response.data.data;
        setSubmittedData(filteredTasks);
        setFilteredTasks(filteredTasks);
        Setloading(false);
        console.log(filteredTasks.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }
  function handleModalSubmit(data) {
    axios
      .post("http://localhost:3000/api/tasks/addTasks", data)
      .then((response) => {
        setSubmittedData([...submittedData, data]); // Update frontend state with the new task
        setFilteredTasks([...filteredTasks, data]); // Update filtered tasks to include the new task
        setShowModal(false);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredTasks = submittedData.filter((task) =>
      task.title.toLowerCase().includes(query)
    );
    setFilteredTasks(filteredTasks);
    console.log(filteredTasks);
  };
  // ===============================================================dots=============
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
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // const indexOfLastTask = currentPage * itemsPerPage;
  // const indexOfFirstTask = indexOfLastTask - itemsPerPage;
  // const currentTasks = people.slice(indexOfFirstTask, indexOfLastTask);
  // ====================================================================
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-64">
        <Menu />
      </div>

      <div className="w-full md:w-10/12 overflow-auto bg-[#F6F8FA]">
        <div className="flex h-16 bg-white items-center justify-between px-4 md:px-16">
          <p className="font-extrabold text-2xl text-black">Task</p>
          <div className="flex items-center space-x-4">
            <Notification />
            <User />
          </div>
        </div>

        <section className="bg-slate-100 px-4 md:px-16 mt-7">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-60 mb-4 md:mb-0">
              <h1 className="font-bold text-[16px] text-[#0F172A] font-Poppins pt-14">
                Start Date:
              </h1>
              <input
                className="px-3 w-[200px] font-Poppins text-[10px] text-[#747576] md:w-4/5 h-[36px] mt-2 rounded-lg"
                type="date"
                placeholder="15-Apr-2024"
                required
              />
            </div>
            <div className="w-full md:w-60">
              <h1 className="font-bold text-[16px] text-[#0F172A] font-Poppins pt-14">
                End Date:
              </h1>
              <input
                className="px-[24px] font-Poppins text-[10px] text-[#747576] w-[200px] md:w-4/5 h-[36px] mt-2 rounded-lg"
                type="date"
                placeholder="15-Apr-2024"
                required
              />
            </div>
            <button
              className="h-[36px] w-[140px] ml-auto pt-14"
              onClick={() => setShowModal(true)}
            >
              <AddTask />
            </button>
          </div>
          {showForm && <AddTask onClose={toggleForm} />}
          {showEditForm && <EditForm onClose={() => setShowEditForm(false)} />}
          <h1 className="mt-5 font-bold text-[#0F172A] text-[16px] pt-4">
            Enter Title:
          </h1>
          <div className="flex">
            <input
              className="px-3 w-[314px] h-[36px] mt-2 rounded-l-lg"
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              required
            />
            <button className="h-[36px] w-[120px] bg-[#4BCBEB] text-white rounded-r-lg m mt-2">
              Search
            </button>
          </div>
          <div className="pt-14 grid h-screen w-full grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 px-4 md:px-10">
            {filteredTasks.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl lg:w-[100%] md:w-[70%] shadow-md "
              >
                <div className={`h-6 mb-4 ${getRandomColor()} rounded-t-xl`} />
                <div className="flex">
                  <p className="text-sm pb-3 font-bold px-3">Title:</p>
                  <span
                    className="text-[#4BCBEB] hover:bg-gray-50 cursor-pointer absolute top-2 right-2"
                    onClick={() => toggleOptions(item.id)}
                  >
                    <FontAwesomeIcon icon={faEllipsisV} />
                    {showOptions[item.id] && selectedTaskId === item.id && (
                      <div
                        className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <div className="py-1" role="none">
                          <button
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-right"
                            role="menuitem"
                            onClick={() => handleAddClick(item.id)}
                          >
                            Add
                          </button>
                          <button
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-right"
                            role="menuitem"
                            onClick={() => handleDeleteClick(item.id)}
                          >
                            Delete
                          </button>
                          <button
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-right"
                            role="menuitem"
                            onClick={() => handleEditClick(item.id)}
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    )}
                  </span>
                </div>
                <p className="px-3 pb-3">{item.title}</p>
                <div className="text-sm font-bold mt-2 px-3">Description:</div>
                <div className="px-3 pb-3">{item.description}</div>
                <div className="text-sm pb-3 font-bold mt-2 px-3">
                  Attachment:
                </div>
                <img
                  src={Cover1}
                  alt="Attachment"
                  className="mt-1 w-full h-24 object-cover rounded-lg"
                />
                <div className="flex justify-between mt-2">
                  <div className="text-sm pb-3 font-bold px-3">Start Date:</div>
                  <div className="text-sm pb-3 font-bold mr-3">End Date:</div>
                </div>
                <div className="flex justify-between mt-1">
                  <div className="text-sm px-3">
                    {formatDate(item.startDate)}
                  </div>
                  <div className="text-sm mr-3 mb-3">
                    {formatDate(item.endDate)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      {showModal && <Modal onSubmit={handleModalSubmit} />}
    </div>
  );
}
export default Tasks;
