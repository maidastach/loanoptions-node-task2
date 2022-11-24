import config from "./configs/dotenv";
import express, { Express, json, Request, Response } from "express";
import { HomeRouter } from "./routes/HomeRoute";
import { errorHandler } from "./configs/errorhandler";

const PORT = config.PORT;
const app: Express = express();

app.use(json());
app.use("/", HomeRouter);
app.use(errorHandler);

app.listen(PORT, (): void => console.log("Server is Running!"));
