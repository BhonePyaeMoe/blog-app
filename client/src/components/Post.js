import { IoMdMore } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { usePostGet } from "../function/PostGet";

function Post() {
  const apiData = usePostGet();

  return (
    <div className="flex flex-col items-center gap-10">
      {apiData &&
        apiData.data.map((item) => (
          <div
            className="sm:size-5/12 relative size-11/12 px-4 pt-4 border rounded-lg shadow-md"
            key={item._id}
          >
            <div className="absolute top-4 right-4 text-2xl cursor-pointer">
              <IoMdMore />
            </div>
            <div className="flex items-start gap-4 mb-4">
              <img
                className="size-12 rounded-full"
                src={item.profile}
                alt={item.name || "User profile"}
              />
              <div className="flex flex-col">
                <h2 className="text-md">{item.name}</h2>
                <p className="text-gray-500 text-sm">{item.timestamp}</p>
              </div>
            </div>
            <p className="text-gray-800">{item.description}</p>

            <div className="w-full mt-4 bg-blue-500 mb-3">
              {item.video &&
              (item.video.endsWith("png") || item.video.endsWith("jpg")) ? (
                <img
                  src={item.video}
                  className="w-full"
                  alt={item.name ? `${item.name}'s post image` : "Post image"}
                />
              ) : (
                item.video && (
                  <iframe
                    src={item.video}
                    className="w-full aspect-video mt-4 rounded-lg bg-cover"
                    title="Video"
                    allow="autoplay"
                    allowFullScreen
                  ></iframe>
                )
              )}
            </div>
            <div className="flex items-center gap-2 pb-3">
              <AiFillLike className="text-blue-500" /> {item.likes}
            </div>
            <div className="flex justify-evenly py-3 border-t-2 border-gray-200">
              <button className="w-full text-gray-500 hover:text-blue-500 py-2 hover:bg-gray-200 rounded-md flex justify-center items-center gap-2">
                <AiOutlineLike />
                Like
              </button>
              <button className="w-full text-gray-500 hover:text-blue-500 py-2 hover:bg-gray-200 rounded-md flex justify-center items-center gap-2">
                <FaRegComment />
                Comment
              </button>
              <button className="w-full text-gray-500 hover:text-blue-500 py-2 hover:bg-gray-200 rounded-md flex justify-center items-center gap-2">
                <FaRegShareSquare />
                Share
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Post;
