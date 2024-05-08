import React, { useState, useEffect } from "react";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import axios from "axios";
import { useMediaQuery } from "@react-hook/media-query";

function Users1() {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Set your desired number of items per page

  useEffect(() => {
    fetchPeople();
  }, [currentPage]);

  const fetchPeople = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:3000/api/people?page=${currentPage}`
      );
      setPeople(response.data.data);
      setLoading(false);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching people:", error);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastTask = currentPage * itemsPerPage;
  const indexOfFirstTask = indexOfLastTask - itemsPerPage;
  console.log("length",people.length,"first index",indexOfFirstTask,"last index",indexOfLastTask);
 const currentTasks = people.slice(0, 4);

  const isSmallScreen = useMediaQuery("(max-width: 767px)");

  return (
    <div className="flex h-screen">
      {!isSmallScreen && <Menu />}

      <div
        className={`w-full ${
          isSmallScreen ? "flex justify-center" : ""
        } bg-[#F6F8FA]`}
      >
        <Header name="Users" />

        <div className="px:6 font-bold text-black ">Online User</div>
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-800"></div>
          </div>
        ) : (
          <section className="bg-gray-200 p-6 grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs text-[#06183A]-500 text-[Poppins] font-bold">
                    Customer Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">
                    Project Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">
                    Start Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">
                    End Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">
                    Overdue Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentTasks.map((person) => (
                  <tr key={person._id}>
                    {console.log("persons..",person)}
                    <td className="px-6 py-4 whitespace-nowrap">
                      {person.customerName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {person.projectName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {person.taskStart}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {person.taskEnd}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {person.overdueDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end">
              <button
                onClick={() => paginate(currentPage + 1)}
                // disabled={currentTasks.length < itemsPerPage}
                className="bg-[#4BCBEB] text-white font-semibold px-4 my-2 rounded disabled:bg-gray-300 "
              >
                Next
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Users1;
