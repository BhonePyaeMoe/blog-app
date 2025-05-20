import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import Nav from "./components/Nav";

function Main() {
  return (
    <>
      <Nav />
      <App />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
