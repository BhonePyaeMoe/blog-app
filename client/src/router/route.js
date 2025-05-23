import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import Home from "../components/Home";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);

export default router;
