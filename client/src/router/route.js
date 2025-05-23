import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home"; // Layout wrapper
import App from "../Pages/App"; // Home page content
import Video from "../Pages/Video"; // /video
import Notification from "../Pages/Notification"; // /notification
import Community from "../Pages/Community"; // /profile
import Setting from "../Pages/Setting"; // /explore

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // This acts as your main layout
    children: [
      {
        index: true, // renders at "/"
        element: <App />,
      },
      {
        path: "Video",
        element: <Video />,
      },
      {
        path: "Notification",
        element: <Notification />,
      },
      {
        path: "Community",
        element: <Community />,
      },
      {
        path: "Setting",
        element: <Setting />,
      },
    ],
  },
]);

export default router;
