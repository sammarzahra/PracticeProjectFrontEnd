import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { useMediaQuery } from "@react-hook/media-query";
import { useSnapshot } from "valtio";
import { store } from "../../GlobalStateManagement/globalStore";

function Dashboard() {
  const snapshot = useSnapshot(store);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const onChange = (newDate) => {
    setDate(newDate);
  };
  const [selectedOption, setSelectedOption] = useState("Weekly");
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    // You can add logic here to handle the selected option
  };
  const state = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
    datasets: [
      {
        label: "Class Strength",
        backgroundColor: [
          "#4BCBEB",
          "#4BCBEB",
          "#4BCBEB",
          "#4BCBEB",
          "#4BCBEB",
          "#4BCBEB",
          "#4BCBEB",
        ],
        fill: false,
        lineTension: 0.5,
        borderColor: "#4BCBEB",
        borderWidth: 2,
        data: [10, 14, 17, 16, 19, 16, 17],
      },
    ],
  };
  const isLargeScreen = useMediaQuery("(min-width: 768px)");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className=" flex flex-col md:flex-row  h-auto ">
      {!isLargeScreen && (
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      )}

      {isLargeScreen && <Menu />}

      <div className="  w-100% h-auto md:w-10/12 bg-[#F6F8FA]">
        <Header name="Dashboard" />

        {/*=================pl-[2px]============================ This is bottom part =======================================*/}
        <section className="bg-white row-span-2 col-span-2 m-14 ">
          <h1 className="text-2xl font-bold  p-6">Analytics</h1>
          {/* ==========================This is bottom grid section for progress bar================================= */}
          {loading ? (
            <div className="flex items-center justify-center h-screen">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-800"></div>
            </div>
          ) : (
            <section className="  grid grid-cols-4 gap-4">
              <div className=" bg-[#F4F2FF] h-32 m-4 rounded-2xl  p-4">
                <h1 className=" pb-3 font-medium">Total Task</h1>
                <div className="mb-1 text-xl font-medium text-[#64748B]  pb-2">
                  35
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <div className="bg-[#4BCBEB] h-4 rounded-full  w-full"></div>
                </div>
              </div>

              <div className=" bg-[#E2EFFC] h-32 m-4 rounded-2xl p-4">
                <h1 className=" pb-3 font-medium">Completed Task</h1>
                <div className="mb-1 text-xl font-medium text-[#64748B] pb-2">
                  12/30
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div className="bg-[#5CB85C] h-4 rounded-full w-2/5"></div>
                </div>
              </div>

              <div className=" bg-[#FBEDD2] h-32 m-4 rounded-2xl p-4">
                <h1 className=" pb-3 font-medium">Pending Task</h1>
                <div className="mb-1 text-xl font-medium text-[#64748B] pb-2">
                  10/30
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                  <div className="bg-[#F0AD4E] h-4 rounded-full  w-1/5"></div>
                </div>
              </div>

              <div className=" bg-[#E0F6F4] h-32 m-4 rounded-2xl p-4">
                <h1 className=" pb-3 font-medium"> Decline Task</h1>
                <div>
                  <div className="mb-1 text-xl font-medium text-[#64748B] pb-2">
                    13/30
                  </div>
                  <div clasName="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                    <div className="bg-[#D9534F] h-4 rounded-full  w-2/5"></div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ======================================This is another grid for chart and calender========================== */}

          <section className=" bg-slate-300 grid grid-cols-2  col-auto">
            <div className="flex-1 bg-white p-4 ">
              <div className=" flex">
                <h1 className="text-2xl font-bold p-6 m-1">
                  Total Task Ratio{" "}
                </h1>
                <span className="dropdownbutton text-[#4BCBEB]  text-xl p-8  ml-24 font-bold ">
                  <select value={selectedOption} onChange={handleSelectChange}>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Daily">Daily</option>
                  </select>
                </span>
              </div>
              <div className=" h-60  w-auto ">
                <Line
                  data={state}
                  options={{
                    scales: {
                      x: {
                        display: true,
                        title: {
                          display: true,
                        },
                        grid: {
                          display: false, // Hide x-axis grid lines
                        },
                      },
                      y: {
                        display: true,
                        title: {
                          display: true,
                        },
                        grid: {
                          display: true, // Hide y-axis grid lines
                        },
                        ticks: {
                          beginAtZero: false,
                        },
                      },
                    },
                    plugins: {
                      legend: {
                        display: false, // Hide legend
                      },
                    },
                    responsive: true,
                  }}
                />
              </div>
            </div>
            <div className=" bg-white p-4">
              <h1 className=" text-2xl font-bold p-8 m-1 mr-[16]">Calender</h1>
              <div className=" bg-white pl-[80px]">
                <Calendar onChange={onChange} value={date} />
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
export default Dashboard;
