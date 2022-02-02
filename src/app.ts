import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./database";
import { routes } from "./routes";
import { errorHandler } from "./middlewares/error.middleware";

connectDatabase();

dotenv.config();

const app = express();

app.use(express.json());

routes(app);

app.use(errorHandler);

export default app;
