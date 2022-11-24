import express, { Express, json } from "express";
import config from "./configs/dotenv";
import { HomeRouter } from "./routes/HomeRoute";
import { errorHandler } from "./configs/errorhandler";
import {
  renderDataByCommand,
  renderDataByQuestions,
} from "./services/services";

const PORT = config.PORT;
const app: Express = express();

app.use(json());
app.use("*", HomeRouter);
app.use(errorHandler);

app.listen(PORT, async (): Promise<void> => {
  console.log("Server Started!");

  // COULD HAVE USED IIFE TO RUN THIS OUTSIDE OF THE LISTEN CALLBACK
  if (process.argv.length < 3) await renderDataByQuestions();
  else await renderDataByCommand();
});

// SOME BOILERPLATE CODE EVEN NOT NEEDED JUST TO SHOW HOW I WOULD SET UP
