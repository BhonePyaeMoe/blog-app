import { usePostGet } from "../function/PostGet";
import { useState } from "react";

function Notification() {
  const apiData = usePostGet();

  const [selected, setSelected] = useState("All");

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <div className="w-2/5 mt-7 border rounded-lg shadow-md p-4">
          <h1 className="text-2xl font-bold pb-3">Notifications</h1>
          <div className="w-full flex gap-5 py-4">
            <span
              className={`py-2 px-4 rounded-full cursor-pointer ${
                selected === "All" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setSelected("All")}
            >
              All
            </span>
            <span
              className={`py-2 px-4 rounded-full cursor-pointer ${
                selected === "Unread" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setSelected("Unread")}
            >
              Unread
            </span>
          </div>
          {apiData &&
            apiData.notification.map((item) => (
              <div
                className="w-full hover:bg-gray-200 rounded-lg px-3 cursor-pointer"
                key={item._id}
              >
                <div className="flex items-startd align-center gap-4 py-3">
                  <img
                    className="size-16 rounded-full"
                    src={item.profile || "Images/Image3.jpg"}
                    alt={item.name || "User profile"}
                  />
                  <p className="text-md pt-2"> {item.message} </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Notification;
