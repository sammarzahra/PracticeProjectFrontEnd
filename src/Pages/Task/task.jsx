import React, { useState, useEffect } from "react";
import Cover1 from "../../images/Cover1.png";
import axios from "axios";
import AddTask from "../../../svg components/AddTask";
import Modal from "../../components/Modal";
import Dropdown from "../../components/DropDwon";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import { useMediaQuery } from "react-responsive";

function Tasks() {
  const [submittedData, setSubmittedData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [loading, setloading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

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
    setloading(true);
    axios
      .get("http://localhost:3000/api/tasks")
      .then((response) => {
        const filteredTasks = response.data.data;
        setSubmittedData(filteredTasks);
        setFilteredTasks(filteredTasks);
        setloading(false);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }

  function handleModalSubmit(data) {
    setSubmittedData([...submittedData, data]);
    setFilteredTasks([...filteredTasks, data]);
    setShowModal(false);
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
  };

  return (
    <div className="relative flex flex-col md:flex-row h-screen">
      {isMobile ? (
        <div className="relative">
          <button
            className="absolute top-2 left-2 focus:outline-none z-50"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {showMenu && (
            <div className="absolute top-0 left-0 w-full h-full z-40  shadow-lg">
              <Menu />
            </div>
          )}
        </div>
      ) : (
        <div className="md:w-64">
          <Menu />
        </div>
      )}

      <div className="w-full md:w-10/12 bg-[#F6F8FA] h-auto">
        <Header name="Task" />
        <section className="bg-slate-100 px-4 md:px-16">
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
            <button className="h-[36px] w-[120px] bg-[#4BCBEB] text-white rounded-r-lg mt-2">
              Search
            </button>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-screen">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-800"></div>
            </div>
          ) : (
            <div className="pt-14 grid h-auto w-full grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 px-2 md:px-10">
              {filteredTasks.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl lg:w-[100%] md:w-[70%] shadow-md"
                >
                  <div className={`h-6 mb-6 ${getRandomColor()} rounded-t-xl`} />
                  <div className="flex">
                    <p className="text-sm pb-3 font-bold px-3">Title:</p>
                    <div>
                      <Dropdown id={item._id} />
                    </div>
                  </div>
                  <p className="px-3 pb-3">{item.title}</p>
                  <div className="text-sm font-bold mt-2 px-3">Description:</div>
                  <div className="px-3 pb-3">{item.description}</div>
                  <div className="text-sm pb-3 font-bold mt-2 px-3">File:</div>
                  <img
                    src={`http://localhost:3000/uploads/${item.attachment}`}
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
          )}

          {showModal && <Modal onSubmit={handleModalSubmit} />}
        </section>
      </div>
    </div>
  );
}

export default Tasks;
