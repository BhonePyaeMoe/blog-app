import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoMdMore } from "react-icons/io";

function Post() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/hello")
      .then((response) => {
        setApiData(response.data); // Store API data in state
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);
  return (
    <div className="flex flex-col items-center gap-10">
      {apiData &&
        apiData.map((item) => (
          <div
            className="relative size-5/12 p-4 border rounded-lg shadow-md bg-white"
            key={item._id}
          >
            <div className="absolute top-4 right-4 text-2xl cursor-pointer">
              <IoMdMore />
            </div>
            <div className="flex items-start gap-4 mb-4">
              <img
                className="size-12 rounded-full"
                src={item.profile}
                alt={item.name}
              />
              <div className="flex flex-col">
                <h2 className="text-md">{item.name}</h2>
                <p className="text-gray-500 text-sm">{item.timestamp}</p>
              </div>
            </div>
            <p className="text-gray-800">{item.description}</p>
          </div>
        ))}
    </div>
  );
}

export default Post;
