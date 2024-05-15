import "./App.css";
import Dashboard from "./Pages/Dashboard/dashboard";
import LoginPage from "./Pages/Login/login";
import Resetpass from "./Pages/ResetPassword/Resetpass";
import Tasks from "./Pages/Task/task";
import UpdatePass from "./Pages/UpdatePassword/Update";
// import Signup from "./Pages/signup/Signup";
import SignUp from "./Pages/signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Users from "./Pages/users/user";
import Users1 from "./Pages/users/user1";
import Notifications from "./Pages/Notifications/notifications";
// import { useEffect } from "react";
//  import { useSelector, useDispatch } from "react-redux";
// import { setToken, setName, setEmail,logout } from "./Redux/authSlice";
// import Users3 from "./Pages/users/user3";
// import { useSelector, useDispatch } from "react-redux";
// import { setToken, setName, setEmail, logout } from "./Redux/authSlice";
// import { useAppDispatch } from "./Redux/store";
import { snapshot, useSnapshot } from "valtio";
import { store } from "./GlobalStateManagement/globalStore";

function App() {
  // const token = useSelector((state) => state.auth.token);
  // const dispatch = useDispatch();
  // const appDispatch = useAppDispatch();

  // useEffect(() => {
  //   const storedToken = localStorage.getItem("token");

  //   if (storedToken) {
  //     // Automatically log in if token is present
  //     appDispatch(setToken(storedToken));
  //     // Assuming you have stored the name and email in local storage as well
  //     appDispatch(setName(localStorage.getItem("name")));
  //     appDispatch(setEmail(localStorage.getItem("email")));
  //   } else {
  //     // Automatically log out if token is not present
  //     appDispatch(logout());
  //   }
  // }, [appDispatch]);
  // // useEffect(() => {
  // //   // Dispatch an action here if needed
  // // }, []);
  const storecopy = useSnapshot(store);
  console.log("storecopystorecopystorecopystorecopy", storecopy);
  const isAuthenticated = storecopy.data?.user?.email && true;
  const userRole = storecopy.data?.user?.role;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}>
          {" "}
        </Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/Users" element={<Users1 />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/tasks" element={<Tasks />}></Route>

        {/* <Route path="/tasks" element={<Tasks />}></Route>  */}
        {/* <Route path="/Dashboard" element={<Dashboard />}></Route> */}
        {/* <Route path="/notifications" element={<Notifications/>}></Route> */}

        {/* <Route path="/Dashboard" element={<Dashboard />}></Route> */}
        {isAuthenticated && (
          <>
            {userRole === "user" && (
              
              <>
                <Route path="/Dashboard" element={<Dashboard />}></Route>
                <Route
                  path="/notifications"
                  element={<Notifications />}
                ></Route>

                <Route path="/ResetPass" element={<Resetpass />}></Route>
                <Route path="/UpdatePass" element={<UpdatePass />}></Route>
                <Route path="/tasks" element={<Tasks />}></Route>
                <Route path="/Users" element={<Users1 />}></Route>
                <Route path="/Dashboard" element={<Dashboard />}></Route>

              </>
            )}
            {userRole === "admin" && (
              <>
                <Route path="/Dashboard" element={<Dashboard />}></Route>
                <Route path="/tasks" element={<Tasks />}></Route>
                <Route path="/Users" element={<Users1 />}></Route>
                <Route
                  path="/notifications"
                  element={<Notifications />}
                ></Route>
              </>
            )}
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
