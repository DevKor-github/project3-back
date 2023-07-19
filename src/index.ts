//require("ts-node/register");
import express from "express";
import http from "http";

import dataSource from "./config/dataSource";
import router from "./router/";
import errorHandler from "./middlewares/errorHandler";

//connects to DB,
const connectDB = async () => {
  try {
    await dataSource.initialize();
    console.log("DB connected!");
  } catch (err) {
    console.error(err);
  }
};

//loads the Express app with necessary middlewares and routes
const loadExpressApp = async () => {
  await connectDB();

  const app = express();
  //adds middleare
  app.use(express.json());
  //mounts the router middleware to hanlde incoming HTTP request
  app.use(router);
  //mounts errorHandler
  app.use(errorHandler);
  //catch URL not found
  app.all("*", (_, res) => {
    res.status(404).json({
      data: null,
      error: {
        message: "URL Not Found",
      },
    });
  });

  return app;
};

//server activation
const startServer = async () => {
  const app = await loadExpressApp();

  const server = http.createServer(app);

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

startServer()
  .then(() => {
    console.log("Server started!");
  })
  .catch((err) => {
    console.error(err);
  });
