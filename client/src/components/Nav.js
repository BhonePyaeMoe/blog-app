import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { GoOrganization } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="sticky top-0 flex justify-center border-b-2 border-gray-200 bg-white gap-1 z-10">
      <NavLink
        to="/"
        className="text-3xl py-3 px-14 hover:text-blue-500 border-b-2 border-white"
      >
        <IoHomeOutline />
      </NavLink>
      <NavLink
        to="/Video"
        className="text-3xl py-3 px-14 hover:text-blue-500 border-b-2 border-white"
      >
        <MdOutlineSlowMotionVideo />
      </NavLink>
      <NavLink
        to="/Community"
        className="text-3xl py-3 px-14 hover:text-blue-500 border-b-2 border-white"
      >
        <GoOrganization />
      </NavLink>
      <NavLink
        to="/Notification"
        className="text-3xl py-3 px-14 hover:text-blue-500 border-b-2 border-white"
      >
        <IoMdNotificationsOutline />
      </NavLink>
      <NavLink
        to="/Setting"
        className="text-3xl py-3 px-14 hover:text-blue-500 border-b-2 border-white"
      >
        <IoSettingsOutline />
      </NavLink>
    </div>
  );
}

export default Nav;
