import "./App.css";
import Dashboard from "./Pages/Dashboard/dashboard";
import LoginPage from "./Pages/Login/login";
import Resetpass from "./Pages/ResetPassword/Resetpass";
import Tasks from "./Pages/Task/task";
import UpdatePass from "./Pages/UpdatePassword/Update";
import Signup from "./Pages/signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Users from "./Pages/users/user";
import Users1 from "./Pages/users/user1";
// import Users3 from "./Pages/users/user3";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/ResetPass" element={<Resetpass />}></Route>
          <Route path="/UpdatePass" element={<UpdatePass />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/tasks" element={<Tasks />}></Route>
          <Route path="/Users" element={<Users1 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
