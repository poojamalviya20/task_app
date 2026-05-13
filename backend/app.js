const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

const startServer = async () => {
  let connected = false;

  while (!connected) {
    try {
      await sequelize.authenticate();
      await sequelize.sync();
      connected = true;
      console.log("DB connected");
    } catch (error) {
      console.log("Waiting for PostgreSQL...");
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }

  app.listen(5000, "0.0.0.0", () => {
    console.log("Server running on 5000");
  });
};

startServer();