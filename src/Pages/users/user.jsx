import React  from "react";
// import Analytics from "/images/Analytics.png";
// import Task from "/images/Task.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
function Users() {
    const tasks = [
        {
          id: 1,
          customerName: "John Doe",
          customerImage: "https://picsum.photos/50", // Sample image URL
          projectName: "Project X",
          startDate: "2024-04-19",
          endDate: "2024-04-30",
          overdueDate: "2024-05-05",
        },
        // Add more tasks as needed
        {
            id: 1,
            customerName: "John Doe",
            customerImage: "https://picsum.photos/50", // Sample image URL
            projectName: "Project X",
            startDate: "2024-04-19",
            endDate: "2024-04-30",
            overdueDate: "2024-05-05",
          },
          {
            id: 1,
            customerName: "John Doe",
            customerImage: "https://picsum.photos/50", // Sample image URL
            projectName: "Project X",
            startDate: "2024-04-19",
            endDate: "2024-04-30",
            overdueDate: "2024-05-05",
          },
          {
            id: 1,
            customerName: "John Doe",
            customerImage: "https://picsum.photos/50", // Sample image URL
            projectName: "Project X",
            startDate: "2024-04-19",
            endDate: "2024-04-30",
            overdueDate: "2024-05-05",
          },
          {
            id: 1,
            customerName: "John Doe",
            customerImage: "https://picsum.photos/50", // Sample image URL
            projectName: "Project X",
            startDate: "2024-04-19",
            endDate: "2024-04-30",
            overdueDate: "2024-05-05",
          },
          {
            id: 1,
            customerName: "John Doe",
            customerImage:"https://picsum.photos/50", // Sample image URL
            projectName: "Project X",
            startDate: "2024-04-19",
            endDate: "2024-04-30",
            overdueDate: "2024-05-05",
          },
          {
            id: 1,
            customerName: "John Doe",
            customerImage: "https://picsum.photos/50", // Sample image URL
            projectName: "Project X",
            startDate: "2024-04-19",
            endDate: "2024-04-30",
            overdueDate: "2024-05-05",
          },
      ];
  return (
    <div className=" w-full h-full grid grid-rows-3 grid-flow-col gap-4">
      {/* This is sidebar */}
      <div class="row-span-3 bg-[#FFFFFF] w-[320px] ">
        <section className="flex items-center m-3 p-3 border border-gray-300 shadow-lg rounded">
          {/* <img src={Task} alt="Logo" className="mr-2 px-2" /> */}
          <span>
            <h2 className="text-1xl font-bold text-[#4BCBEB]">
              Task Manager List
            </h2>
          </span>
        </section>
        <div class="border-b border-[#F6F8FA] w-[10px]"></div>
        <h1 className="m-5 text-lg pl-6 pt-5 font-bold ">Menu</h1>
        {/* <Link to="/dashboard">Dashboard</Link> */}
        <div className="m-4 text-lg pl-6 p-3  ">
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className="m-4 text-lg pl-6 p-3 border-2  border-[#F6F8FA]">
          <Link to="/notifications">Users</Link>
        </div>
        <div className="m-4 text-lg pl-6 p-3 border-2  border-[#F6F8FA] font-bold text-[#4BCBEB] shadow-md rounded">
          <Link to="/tasks">Tasks</Link>
        </div>
        <div className="m-4 text-lg pl-6 p-3 border-2  border-[#F6F8FA]">
          <Link to="/settings">Settings</Link>
        </div>
        {/* <FA icon={faDashboard} /> */}
        {/* <h2 className="text-3xl font-bold text-white">Task Manager List</h2> */}
      </div>
      <div className="col-span-2">
        {/* this is Dashboard */}
        <div className="bg-[#FFFFFF] w-[1155px]  flex">
          <div className=" text-3xl p-6 font-bold right">User's</div>
          <div className="left p-6 pl-[700px] size-max">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className="right p-6 pl-[5px] ">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="p-5 pl-[3px] ">
            <Link to="/usmanshahid">Usman Shahid</Link>
            <p>Status 200</p>
          </div>
          <div className="p-6 pl-[2px] ">
            <FontAwesomeIcon icon={faGreaterThan} />
          </div>
        </div>
        {/* This is bottom part */}
        <section className="bg-gray-200 p-6 grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-4">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-[#06183A]-500 text-[Poppins] font-bold">Customer Name</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">Project Name</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">Start Date</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">End Date</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">Overdue Date</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {tasks.slice(0, 10).map((task) => (
        <tr key={task.id}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <img src={task.customerImage} alt={task.customerName} className="w-8 h-8 rounded-full mr-2" />
              <a href={task.customerLink} className="text-sm font-medium text-gray-900 hover:underline">{task.customerName}</a>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.projectName}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.startDate}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.endDate}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <div className="relative inline-block text-left">
              <button onClick={() => setShowMenu(task.id)} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {showMenu === task.id ? (
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7 3a1 1 0 0 1 2 0v1h4V3a1 1 0 1 1 2 0v1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V3zM5 7a1 1 0 1 1 0-2h10a1 1 0 0 1 0 2H5zm12 6a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2h14zm-2 4a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-2 0V15a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1z" clipRule="evenodd" />
                  </svg>
                )}
              </button>

              {showMenu === task.id && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <div className="py-1" role="none">
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left" role="menuitem">View</button>
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left" role="menuitem">Delete</button>
                  </div>
                </div>
              )}
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</section>

{/*         
        <section className="bg-gray-200 p-6 grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-4">
            
        <table className="min-w-full divide-y divide-gray-200">
           
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-[#06183A]-500   text-[Poppins] font-bold">Customer Name</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-[#06183A]-500  tracking-wider text-[Poppins] font-bold">Project Name</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-[#06183A]-500  tracking-wider text-[Poppins] font-bold">Start Date</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-[#06183A]-500  tracking-wider text-[Poppins] font-bold">End Date</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-[#06183A]-500  tracking-wider text-[Poppins] font-bold">Overdue Date</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {tasks.slice(0, 10).map((task) => (
        <tr key={task.id}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <img src={task.customerImage} alt={task.customerName} className="w-8 h-8 rounded-full mr-2" />
              <span className="text-sm font-medium text-gray-900">{task.customerName}</span>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.projectName}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.startDate}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.endDate}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.overdueDate}</td>
        </tr>
      ))}
    </tbody>
  </table> */}
          {/* {tasks.slice(0, 10).map((task) => (
            <div key={task.id} className="bg-white p-4 shadow-md rounded-lg">
              <div className="flex items-center">
                <img src={task.customerImage} alt={task.customerName} className="w-8 h-8 rounded-full mr-2" />
                <Link to={`/customer/${task.customerName}`} className="text-blue-500">{task.customerName}</Link>
              </div>
              <p className="text-gray-700">Project Name: {task.projectName}</p>
              <p className="text-gray-700">Start Date: {task.startDate}</p>
              <p className="text-gray-700">End Date: {task.endDate}</p>
              <p className="text-gray-700">Overdue Date: {task.overdueDate}</p>
            </div>
          ))} */}
        {/* </section> */}
        
          {/* <div className="flex flex-nowrap">
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
            <div className="flex-1 text-white bg-[#4BCBEB] rounded-lg ml-[300px] h-[34px] w-[5px] m-[70px] text-center p-2">
              <button>Add Task</button>
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
          </div> */}
        
      </div>
    </div>
  );
}
export default Users;