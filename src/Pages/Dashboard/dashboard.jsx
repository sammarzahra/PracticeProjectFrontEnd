// import React from "react";

// export default function Dashboard() {
//   return (
//     <div className="px-[34]">
//       <div>
//         <header className="w-[1190px] h-[88px] left-[250px] border-dashed">
//           Dashboard
//         </header>
//         <div />
//         <div className="w-[250px] h-[1024px] border[0px, 1px, 0px, 0px]">

//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-white text-[#0F172A]">
        <div className="p-4">
          <div className="text-lg py-8 font-[Roboto] grid-rows-1 text-[#4BCBEB] font-bold">
            Task List Manager
          </div>
          <h1 className="text-lg font-bold mb-4">Menu</h1>
          <div
            className="w-[218px]
h-[216px];
top- [155px]
left-[16px]
gap-[8px]

"
          >
            <ul>
              <div className="text-[#4BCBEB] font-[Poppins] w-[81px] h-[21px] size-[4px] font-bold ">
                <li className="py-2 ">Dashboard</li>
              </div>
              <div className="text-black font-[Poppins] w-[81px] h-[21px] size-[4px]">
                {" "}
                <li className="py-2">User</li>
              </div>
              <div className="text-black font-[Poppins] w-[81px] h-[21px] size-[4px]">
                {" "}
                <li className="py-2">Task</li>
              </div>
              <div className="text-black font-[Poppins] w-[81px] h-[21px] size-[4px] ">
                {" "}
                <li className="py-2">Settings</li>
              </div>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-slate-500">
        {/* Header */}
        <header className=" bg-black w-[700px]font-[Poppins] text-[16px] text-[#bec6d8] font-[bold] p-4">
          Dashboard
        </header>

        {/* Main Content */}
        <main className="flex-1 p-4">
          {/* Image */}
          <div className="flex justify-center items-center h-full">
            <img
              src="your-image-url.jpg"
              alt="Your Image"
              className="max-w-full max-h-full"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-[#FFFFFF] text-[#0F172A] flex flex-col items-center justify-center">
//         <div className="p-4">
//           <div className="text-lg py-8 font-[Roboto]">Task List Manager</div>
//           <h1 className="text-lg font-bold mb-4">Menu</h1>
//           <ul>
//             <li className="py-2">Dashboard</li>
//             <li className="py-2">User</li>
//             <li className="py-2">Task</li>
//             <li className="py-2">Settings</li>
//           </ul>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="w-full font-[Poppins] text-[16px] text-[#0F172A] bg-[#FFFFFF]  p-4">
//           <div className="flex items-center justify-center">
//             <img
//               src="your-vector-url.svg"
//               alt="Vector"
//               className="max-w-full max-h-full"
//             />
//             <hr className="w-1/2 mx-4 border-t-[#0F172A] border-opacity-10" />
//             <span>Task Manager</span>
//           </div>
//         </header>

//         {/* Main Content */}
//         <main className="flex-1 p-4 grid grid-cols-3 gap-4">
//           {/* Image */}
//           <div className="col-span-2 flex justify-center items-center">
//             <img
//               src="your-image-url.jpg"
//               alt="Your Image"
//               className="max-w-full max-h-full"
//             />
//           </div>

//           {/* Tasks */}
//           <div className="col-span-1">
//             <h2 className="text-lg font-bold mb-4">Tasks</h2>
//             <ul>
//               <li className="py-2">Task 1</li>
//               <li className="py-2">Task 2</li>
//               <li className="py-2">Task 3</li>
//             </ul>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
