import Post from "../components/Post";
import Status from "../components/Status";

function App() {
  return (
    <div className="p-3 min-h-screen bg-gray-100 w-full relative">
      <Post />
      <Status />
    </div>
  );
}

export default App;
