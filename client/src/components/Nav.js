import { IoHomeOutline } from "react-icons/io5";
import { GoOrganization } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="sticky top-0 flex justify-center border-b-2 border-gray-200 bg-white gap-1 z-10">
      <div className="flex fixed left-3">
        <img src="./Images/Logo.png" className="size-14" alt="Logo"></img>
        <input
          type="text"
          placeholder="Search Blog"
          className="w-80 ml-3 m-2 px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <NavLink
        to="/"
        className="text-3xl py-3 px-14 hover:text-blue-500 border-b-2 border-white"
      >
        <IoHomeOutline />
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
