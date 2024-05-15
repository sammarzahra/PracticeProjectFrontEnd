import { Link } from "react-router-dom";
import Menu from "../../components/Menu";
import { useMediaQuery } from 'react-responsive';
import Header from "../../components/Header";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import { CircularProgress } from '@mui/material';

export default function Users1() {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const[showMenu,setShowMenu]=useState(false);

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
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
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
    <div className="flex flex-col md:flex-row h-screen">
      {isMobile ? (
        <div className="md:w-64 md:flex-shrink-0">
          <button className="focus:outline-none" onClick={() => setShowMenu(!showMenu)}>
            <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          {showMenu && <Menu />}
        </div>
      ) : (
        <div className="md:w-64 md:flex-shrink-0">
          <Menu />
        </div>
      )}

      <div className="pl-[2px] w-10/12 md:w-10/12  bg-[#F6F8FA] ">
        <Header name="Users"></Header>

        <div className="mt-5 ml-6 w-90% md:w-full h-auto bg-white rounded-xl border-[1.45px] border-[#4BCBEB] drop-shadow-md truncate mb-8">
          <h1 className="m-5 font-bold text-2xl">Online User</h1>
          {isLoading && (
            <div className="flex justify-center items-center min-h-screen">
              <div className="absolute top-[250px] animate-spin rounded-full h-16 w-16 border-4 border-blue-800 ">
                <CircularProgress />
              </div>
            </div>
          )}
          <div className="ml-4 mb-5 flex space-x-28">
            <h1 className="text-lg font-medium">Customer Name</h1>
            <h1 className="text-lg font-medium">Project Name</h1>
            <h1 className="text-lg font-medium">Start Date</h1>
            <h1 className="text-lg font-medium">End Date</h1>
            <h1 className="text-lg font-medium">Overdue days</h1>
          </div>
          <div className="h-[450px]">
            {currentItems.map((item, index) => {
              return (
                <div key={index} className="mb-3 ml-4 py-3 flex border-b space-x-28">
                  <div className="w-32">{item.customerName}</div>
                  <div className="px-11 w-32">{item.projectName}</div>
                  <div className="px-5 w-30">{formatDate(item.taskStart)}</div>
                  <div className="px-3 w-30">{formatDate(item.taskEnd)}</div>
                  <div className="w-32 gap-x-3 flex justify-end items-center gap-14">
                    {calculateDaysLeft(item.taskStart, item.taskEnd)}
                    <span className="inline-flex flex-col items-center justify-center w-4 h-4 bg-white pl-[100px] text-xs text-[#4BCBEB] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
                    <svg
                      className="ml-5"
                      width="28"
                      height="28"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 16C13 17.654 14.346 19 16 19C17.654 19 19 17.654 19 16C19 14.346 17.654 13 16 13C14.346 13 13 14.346 13 16ZM13 26C13 27.654 14.346 29 16 29C17.654 29 19 27.654 19 26C19 24.346 17.654 23 16 23C14.346 23 13 24.346 13 26ZM13 6C13 7.654 14.346 9 16 9C17.654 9 19 7.654 19 6C19 4.346 17.654 3 16 3C14.346 3 13 4.346 13 6Z"
                        fill="#4BCBEB"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
            <div className="mt-9 flex justify-center">
              <Pagination count={Math.ceil((userData?.length || 0) / itemsPerPage)} page={currentPage} onChange={handlePageChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
