// server/index.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
const data = [
  {
    _id: 1,
    name: "Peter",
    profile: "Images/Image1.jpg",
    topic: "React",
    description: "React is a JavaScript library for building user interfaces.",
    timestamp: "3d",
  },
  {
    _id: 2,
    name: "David",
    profile: "Images/Image1.jpg",
    topic: "Node.js",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    timestamp: "18h",
  },
  {
    _id: 3,
    name: "Mohammed",
    profile: "Images/Image1.jpg",
    topic: "Express",
    description:
      "Express is a minimal and flexible Node.js web application framework.",
    timestamp: "1w",
  },
];

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
