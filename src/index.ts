import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response): void => {
  res.send("<h1>Hello World!</h1>");
});

app.listen("5000", (): void => console.log("Server is Running!"));
