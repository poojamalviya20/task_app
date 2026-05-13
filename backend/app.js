const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

sequelize.sync().then(() => {
  console.log("DB connected");

  app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
  });
});