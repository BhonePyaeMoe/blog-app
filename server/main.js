// server/index.js
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;
const mongourl =
  "mongodb+srv://moegyi2442:Peter2442@blog.zjobhiv.mongodb.net/?retryWrites=true&w=majority&appName=Blog";
const mongoose = require("mongoose");

mongoose
  .connect(mongourl)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
const data = [
  {
    _id: 1,
    name: "React Coder",
    profile: "Images/Image4.jpg",
    topic: "Express",
    description:
      "Minimal. Responsive. Personal. Check out the portfolio I coded from scratch using React.",
    timestamp: "1h",
    video: "https://i.ytimg.com/vi/g0HKvRj84Ak/hq720.jpg",
    likes: "28k",
  },
  {
    _id: 2,
    name: "React Coder",
    profile: "Images/Image4.jpg",
    topic: "Express.js",
    description:
      "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    timestamp: "1w",
    video:
      "https://www.pix-star.com/blog/wp-content/uploads/2021/05/digital-photo-frames.jpg",
    likes: "2k",
  },
  {
    _id: 3,
    name: "Ariana Grande",
    profile: "Images/Image3.jpg",
    topic: "React",
    description: "My new baby is out now. link in bio 💿✨",
    timestamp: "3d",
    video: "https://www.youtube.com/embed/x1XIJM6spaE",
    likes: "2.1M",
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
    likes: "305",
  },
  {
    _id: 5,
    name: "Ei Hsu May Zaw",
    profile: "Images/Image5.jpg",
    topic: "Node.js",
    description: "7th Monthsary with my Uno. I love you so much, my love. 💖",
    timestamp: "18h",
    video: "./Images/1748107076930.jpg",
    likes: "101",
  },
  {
    _id: 6,
    name: "Jane",
    profile: "Images/Image1.jpg",
    topic: "JavaScript",
    description:
      "JavaScript is a programming language that conforms to the ECMAScript specification.",
    timestamp: "3w",
    video:
      "https://drive.google.com/file/d/13DVcFQv-l51TntmjHohg1qRaIU-ZZvmD/preview",
    likes: "1k",
  },
  {
    _id: 7,
    name: "Emma Watson",
    profile: "Images/Image1.jpg",
    topic: "CSS",
    description:
      "CSS is a style sheet language used for describing the presentation of a document written in HTML or XML.",
    timestamp: "2d",
    video: "https://www.youtube.com/embed/x3_liLDfUkQ?list=RDx3_liLDfUkQ",
    likes: "29",
  },
];

const personal = {
  user_id: "Rain@2005",
  name: "Ei Hsu May Zaw",
  profile: "./Images/Image5.jpg",
  friends: [
    {
      id: 1,
      name: "Ariana Grande",
      profile: "Images/Image3.jpg",
    },
    {
      id: 2,
      name: "Natalie Portman",
      profile: "Images/Image3.jpg",
    },
    {
      id: 3,
      name: "React Coder",
      profile: "Images/Image4.jpg",
    },
    {
      id: 4,
      name: "Selena Lopez",
      profile: "Images/Image2.jpg",
    },
    {
      id: 5,
      name: "David Rose",
      profile: "Images/Image3.jpg",
    },
    {
      id: 6,
      name: "Jane",
      profile: "Images/Image3.jpg",
    },
    {
      id: 7,
      name: "David",
      profile: "Images/Image1.jpg",
    },
    {
      id: 8,
      name: "Jane Lane",
      profile: "Images/Image3.jpg",
    },
    {
      id: 9,
      name: "David Smith",
      profile: "Images/Image1.jpg",
    },
    {
      id: 10,
      name: "Jane Roe",
      profile: "Images/Image3.jpg",
    },
    {
      id: 11,
      name: "David Wilson",
      profile: "Images/Image1.jpg",
    },
    {
      id: 12,
      name: "Jane Foster",
      profile: "Images/Image3.jpg",
    },
    {
      id: 13,
      name: "David Miller",
      profile: "Images/Image1.jpg",
    },
    {
      id: 14,
      name: "Jane Doe",
      profile: "Images/Image3.jpg",
    },
    {
      id: 15,
      name: "David Blaine",
      profile: "Images/Image1.jpg",
    },
    {
      id: 16,
      name: "Jane Carter",
      profile: "Images/Image3.jpg",
    },
    {
      id: 17,
      name: "David Beckham",
      profile: "Images/Image1.jpg",
    },
    {
      id: 18,
      name: "Jane Doe",
      profile: "Images/Image3.jpg",
    },
    {
      id: 19,
      name: "David Blaine",
      profile: "Images/Image1.jpg",
    },
    {
      id: 20,
      name: "Jane Smith",
      profile: "Images/Image3.jpg",
    },
  ],
};

const notification = [
  {
    id: 1,
    message: "Emma Watson liked your post.",
    timestamp: "2h ago",
    read: false,
  },
  {
    id: 2,
    message: "You have a new follower: JohnDoe",
    timestamp: "5h ago",
  },
];

const friendlist = [
  {
    id: 1,
    name: "Ariana Grande",
    profile: "Images/Image3.jpg",
    mutualFriends: 10,
    status: "Online",
    isfriend: true,
  },
  {
    id: 2,
    name: "Natalie Portman",
    profile: "Images/Image3.jpg",
    mutualFriends: 5,
    status: "Offline",
    isfriend: false,
  },
  {
    id: 3,
    name: "React Coder",
    profile: "Images/Image4.jpg",
    mutualFriends: 3,
    status: "Online",
    isfriend: true,
  },
  {
    id: 4,
    name: "Selena Lopez",
    profile: "Images/Image2.jpg",
    mutualFriends: 2,
    status: "Offline",
    isfriend: false,
  },
];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

app.get("/api/hello", (req, res) => {
  res.json({ data, personal, notification, friendlist });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
