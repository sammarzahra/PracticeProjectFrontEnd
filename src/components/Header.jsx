import User from "../../../svg components/User";
import Notification from "../../../svg components/Notification";
import { Link } from "react-router-dom";
const Header = ({name}) => {
  return (
    <div className="flex h-16 bg-white">
    <p className="px-9 py-3 font-extrabold text-2xl text-black">
      {name}
    </p>
    <div className="ml-[650px]   flex">
      <Link to="/notifications">
        <Notification />
      </Link>
      <User />
    </div>
  </div>
  )
}

export default Header