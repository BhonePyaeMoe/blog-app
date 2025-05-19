import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import Nav from "./components/nav";
import axios from "axios";

function Main() {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/hello")
      .then((response) => {
        console.log("API Response:", response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  return (
    <React.StrictMode>
      <Nav />
      <App />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
