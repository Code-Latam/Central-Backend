const express = require("express");
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");

const chatbotRoute = require("./routes/chatbots");
const authRoute = require("./routes/auth");

const router = express.Router();
const path = require("path");

dotenv.config();
console.log(process.env.MONGO_URL);

app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use("/api/chatbots", chatbotRoute);
app.use("/api/auth", authRoute);

app.listen(9000, () => {
  console.log("Central Backend server is running on port " + "9000!");
});
