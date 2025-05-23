import Nav from "./Nav";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="relative">
      <Nav />
      <Outlet />
    </div>
  );
}

export default Home;
