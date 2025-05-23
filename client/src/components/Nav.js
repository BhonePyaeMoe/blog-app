import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { GoOrganization } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

function Nav() {
  return (
    <div className="flex justify-center border-b-2 border-gray-200 bg-white">
      <p className="text-3xl py-3 px-14 hover:text-gray-500 border-b-2 border-white hover:border-gray-400 hover:bg-gray-200 rounded-md">
        <IoHomeOutline />
      </p>
      <p className="text-3xl py-3 px-14 hover:text-gray-500 border-b-2 border-white hover:border-gray-400 hover:bg-gray-200 rounded-md">
        <MdOutlineSlowMotionVideo />
      </p>
      <p className="text-3xl py-3 px-14 hover:text-gray-500 border-b-2 border-white hover:border-gray-400 hover:bg-gray-200 rounded-md">
        <GoOrganization />
      </p>
      <p className="text-3xl py-3 px-14 hover:text-gray-500 border-b-2 border-white hover:border-gray-400 hover:bg-gray-200 rounded-md">
        <IoMdNotificationsOutline />
      </p>
      <p className="text-3xl py-3 px-14 hover:text-gray-500 border-b-2 border-white hover:border-gray-400 hover:bg-gray-200 rounded-md">
        <IoSettingsOutline />
      </p>
    </div>
  );
}

export default Nav;
