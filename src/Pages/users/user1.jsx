import { Link } from "react-router-dom";
import Menu from "../../components/Menu";
import { useMediaQuery } from "react-responsive";
import Header from "../../components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import { CircularProgress } from "@mui/material";

export default function Users1() {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [showMenu, setShowMenu] = useState(false);

  const itemsPerPage = 6;

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const tasksResponse = await axios.get("http://localhost:3000/api/people");
      setUserData(tasksResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };

  const calculateDaysLeft = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffInMs = end - start;
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="relative flex flex-col md:flex-row h-screen">
      {isMobile ? (
        <div className="relative md:w-60 md:flex-shrink-0">
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
            <div className="absolute top-0 left-0 w-full h-full z-40 bg-white shadow-lg">
              <Menu />
            </div>
          )}
        </div>
      ) : (
        <div className="md:w-64 md:flex-shrink-0">
          <Menu />
        </div>
      )}

      <div className="pl-[2px] w-full md:w-10/12 bg-[#F6F8FA]">
        <Header name="Users"></Header>

        <div className="mt-5 ml-6 w-full md:w-full h-auto bg-white rounded-xl border-[1.45px] border-[#4BCBEB] drop-shadow-md truncate mb-8">
          <h1 className="m-5 font-bold text-2xl">Online User</h1>
          {isLoading && (
            <div className="flex justify-center items-center min-h-screen">
              <div className="absolute top-[250px] animate-spin rounded-full h-16 w-16 border-4 border-blue-800">
                <CircularProgress />
              </div>
            </div>
          )}
          <div className="overflow-x-auto">
            <div className="grid grid-cols-1 sm:grid-cols-5 ml-4 mb-5 space-y-2 sm:space-y-0">
              <h1 className="text-lg font-medium">Customer Name</h1>
              <h1 className="text-lg font-medium">Project Name</h1>
              <h1 className="text-lg font-medium">Start Date</h1>
              <h1 className="text-lg font-medium">End Date</h1>
              <h1 className="text-lg font-medium">Overdue days</h1>
            </div>
            <div className="h-[450px]">
              {currentItems.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-5 mb-3 ml-4 py-3 border-b space-y-2 sm:space-y-0"
                >
                  <div className="w-32">{item.customerName}</div>
                  <div className="w-32">{item.projectName}</div>
                  <div className="w-30">{formatDate(item.taskStart)}</div>
                  <div className="w-30">{formatDate(item.taskEnd)}</div>
                  <div className="flex items-center space-x-3">
                    {calculateDaysLeft(item.taskStart, item.taskEnd)}
                    <span className="inline-flex items-center justify-center w-4 h-4 bg-white text-xs text-[#4BCBEB] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
              <div className="mt-9 flex justify-center">
                <Pagination
                  count={Math.ceil((userData?.length || 0) / itemsPerPage)}
                  page={currentPage}
                  onChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
