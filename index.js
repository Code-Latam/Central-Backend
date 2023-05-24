const express = require("express");
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const cors = require('cors');
// allow any origin
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
}


const clientRoute = require("./routes/clients");
const chatbotRoute = require("./routes/chatbots");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const chathistoryRoute = require("./routes/chathistory");
const chatRoute = require("./routes/chat");
const uploadRoute = require("./routes/upload");

const router = express.Router();
const path = require("path");

dotenv.config();
console.log(process.env.MONGO_URL);

app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
// use the cors middleware
app.use(cors(corsOptions));




app.use("/api/clients", clientRoute);
app.use("/api/chatbots", chatbotRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/chathistory", chathistoryRoute);
app.use("/api/chat", chatRoute);
app.use("/api/upload", uploadRoute);

const port = process.env.PORT || 10000
app.listen(port, () => {
  console.log("Central Backend server is running on port " + port);
});
