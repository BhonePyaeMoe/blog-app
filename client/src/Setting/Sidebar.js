import { CgProfile } from "react-icons/cg";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { RiCommunityLine } from "react-icons/ri";
import { MdLanguage } from "react-icons/md";
import { IoLogoBuffer } from "react-icons/io";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineBookmarks } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

function Sidebar() {
  return (
    <>
      <div className="fixed min-w-[370px] top-14 left-0 p-3 h-full border-r-2 border-gray-200">
        <div className="flex flex-col gap-2 mt-1">
          <h2 className="text-lg font-bold pl-3 tracking-wide">Settings</h2>
          <div className="flex items-center gap-4 p-3 py-4 hover:bg-gray-200">
            <CgProfile className="text-2xl" />
            <div>
              <p className="text-md">Profile</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 py-4 hover:bg-gray-200">
            <LiaUserFriendsSolid className="text-2xl" />
            <div>
              <p className="text-md">Friends</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 py-4 hover:bg-gray-200">
            <RiCommunityLine className="text-2xl" />
            <div>
              <p className="text-md">Community</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 py-4 hover:bg-gray-200">
            <IoLogoBuffer className="text-2xl" />
            <div>
              <p className="text-md">Activity Log</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 py-4 hover:bg-gray-200">
            <MdLanguage className="text-2xl" />
            <div>
              <p className="text-md">Language</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 py-4 hover:bg-gray-200">
            <IoMdHelpCircleOutline className="text-2xl" />
            <div>
              <p className="text-md">Help</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 py-4 hover:bg-gray-200">
            <MdOutlineBookmarks className="text-2xl" />
            <div>
              <p className="text-md">Terms and Conditions</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 py-4 hover:bg-gray-200">
            <FiLogOut className="text-2xl" />
            <div>
              <p className="text-md">Log Out</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
