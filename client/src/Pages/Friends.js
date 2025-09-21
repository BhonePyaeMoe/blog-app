import { usePostGet } from "../function/PostGet";

function Friends() {
  const apiData = usePostGet();

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <div className="w-2/5 mt-7 border rounded-lg shadow-md px-4 py-2">
          <div>
            <div className="flex justify-between px-3">
              <h1 className="text-xl py-4">Friend Requests</h1>
              <span className="text-blue-500 text-md py-4 px-2 cursor-pointer hover:underline">
                See All
              </span>
            </div>
            <div className="border-b border-gray-300 "></div>

            {apiData &&
              apiData.friendlist.map((item) => (
                <div
                  className="flex items-center rounded-lg gap-4 px-3 p-4 hover:bg-gray-200"
                  key={item._id}
                >
                  <img
                    className="size-12 rounded-full"
                    src={item.profile || "Images/Image3.jpg"}
                    alt={item.name || "User profile"}
                  />
                  <p className="text-md">{item.name}</p>
                  <button className="ml-auto bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600">
                    Confirm
                  </button>
                  <button className="bg-gray-300 text-black px-5 py-2 rounded-md hover:bg-gray-400">
                    Delete
                  </button>
                </div>
              ))}
          </div>
          <div>
            <div className="flex justify-between px-3">
              <h1 className="text-xl py-4">Friend Requests</h1>
              <span className="text-blue-500 text-md py-4 px-2 cursor-pointer hover:underline">
                See All
              </span>
            </div>
            <div className="border-b border-gray-300 "></div>

            {apiData &&
              apiData.friendlist.map((item) => (
                <div
                  className="flex items-center rounded-lg gap-4 px-3 p-4 hover:bg-gray-200"
                  key={item._id}
                >
                  <img
                    className="size-12 rounded-full"
                    src={item.profile || "Images/Image3.jpg"}
                    alt={item.name || "User profile"}
                  />
                  <p className="text-md">{item.name}</p>
                  <button className="ml-auto bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600">
                    Confirm
                  </button>
                  <button className="bg-gray-300 text-black px-5 py-2 rounded-md hover:bg-gray-400">
                    Delete
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Friends;
