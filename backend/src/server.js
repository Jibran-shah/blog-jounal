import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { ENV } from "./config/env.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import { routeLogger } from "./utils/logging.utils.js";
import "./config/s3Client.js"


import connectDB from "./config/db.js";
import authRoutes from './modules/auth/auth.routes.js'
import blogsRoutes from "./modules/blogs/blogs.routes.js"
import categoriesRoutes from "./modules/categories/categories.routes.js"
import authorsRoutes from "./modules/authors/authors.routes.js"

const app = express();
const PORT = ENV.PORT
const baseRoute = ENV.BASE_ROUTE

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(routeLogger);
app.use(baseRoute+"auth", authRoutes);
app.use(baseRoute+"blogs", blogsRoutes);
app.use(baseRoute+"categories", categoriesRoutes);
app.use(baseRoute+"authors", authorsRoutes)

app.get("/", (req, res) => {res.json({ message: "API is running" })});

app.use(errorHandler);

const startServer = async () => {

  try {

    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {

    console.error("Failed to start server:", error.message);
    process.exit(1);

  }

};

startServer();