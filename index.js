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
const explorerRoute = require("./routes/explorers");
const workflowRoute = require("./routes/workflows");
const productRoute = require("./routes/products");
const taskRoute = require("./routes/tasks");
const apiRoute = require("./routes/apis");
const linkRoute = require("./routes/links");

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
app.use("/api/explorer", explorerRoute);
app.use("/api/workflow", workflowRoute);
app.use("/api/product", productRoute);
app.use("/api/task", taskRoute);
app.use("/api/api", apiRoute);
app.use("/api/link", linkRoute);

const port = process.env.PORT || 10000
app.listen(port, () => {
  console.log("Central Backend server is running on port " + port);
});
