import { Router, IRouter } from "express";
import expressAsyncHandler from "express-async-handler";
import { HomeController } from "../controllers/HomeController";

export const HomeRouter: IRouter = Router();

HomeRouter.get("/", expressAsyncHandler(HomeController));
