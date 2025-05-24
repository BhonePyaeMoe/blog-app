import React from "react";
import { usePostGet } from "../function/PostGet";

function Status() {
  const apiData = usePostGet();
  return (
    <div className="hidden sm:block fixed sm:min-w-96 sm:top-14 sm:right-0 sm:p-3 sm:h-full sm:border-l-2 sm:border-gray-200">
      <div className="flex flex-col gap-10 mt-1">
        {apiData && (
          <div className="flex items-center gap-4 mb-3 p-2 hover:bg-gray-200">
            <img
              className="size-12 rounded-full"
              src={apiData.personal.profile}
              alt={apiData.personal.name || "User profile"}
            />
            <div>
              <p>{apiData.personal.name}</p>
              <p className="text-gray-500 text-sm">
                {apiData.personal.user_id}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col py-4 border-t-2 border-gray-200 gap-2 overflow-y-auto h-screen scrollbarhide">
        <h2 className="text-lg font-bold tracking-wide">Friends</h2>
        {apiData &&
          apiData.personal.friends.map((friend) => (
            <div
              className="flex items-center gap-4 p-2 hover:bg-gray-200"
              key={friend._id}
            >
              <img
                className="size-12 rounded-full"
                src={friend.profile}
                alt={friend.name || "User profile"}
              />
              <div>
                <p className="text-md">{friend.name}</p>
                <p className="text-gray-500 text-sm">{friend.user_id}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Status;
