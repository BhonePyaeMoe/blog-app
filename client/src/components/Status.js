import React from "react";
import { usePostGet } from "../function/PostGet";

function Status() {
  const apiData = usePostGet();
  return (
    <div className="fixed min-w-96 top-16 right-0 p-3 h-full">
      <div className="flex flex-col gap-10 mb-1">
        {apiData && (
          <div className="flex items-center gap-4 mb-4 px-2">
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
      <div className="flex flex-col py-4 border-t-2 border-gray-200 gap-2">
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
