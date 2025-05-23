// server/index.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const data = [
  {
    _id: 1,
    name: "Ariana Grande",
    profile: "Images/Image3.jpg",
    topic: "React",
    description: "My new baby is out now. link in bio 💿✨",
    timestamp: "3d",
    video: "https://www.youtube.com/embed/x1XIJM6spaE",
  },
  {
    _id: 2,
    name: "David",
    profile: "Images/Image1.jpg",
    topic: "Node.js",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    timestamp: "18h",
    video:
      "https://drive.google.com/file/d/1972Y7PuHqBRzX8_wxYqbA6YcgKG-2DV6/preview",
  },
  {
    _id: 3,
    name: "React Coder",
    profile: "Images/Image4.jpg",
    topic: "Express",
    description:
      "Minimal. Responsive. Personal. Check out the portfolio I coded from scratch using React.",
    timestamp: "1h",
    video: "https://i.ytimg.com/vi/g0HKvRj84Ak/hq720.jpg",
  },
  {
    _id: 4,
    name: "Selena",
    profile: "Images/Image2.jpg",
    topic: "MongoDB",
    description: "In the ocean’s presence, she forgot to be anything but real.",
    timestamp: "2w",
    video:
      "https://images.pexels.com/photos/7000565/pexels-photo-7000565.jpeg?cs=srgb&dl=pexels-marian-sol-miranda-32246321-7000565.jpg&fm=jpg",
  },
  {
    _id: 5,
    name: "Jane",
    profile: "Images/Image1.jpg",
    topic: "JavaScript",
    description:
      "JavaScript is a programming language that conforms to the ECMAScript specification.",
    timestamp: "3w",
    video:
      "https://png.pngtree.com/background/20250106/original/pngtree-nice-picsart-cb-backgrounds-hd-phone-wallpaper-picture-image_15522905.jpg",
  },
];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

app.get("/api/hello", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
