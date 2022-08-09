import express from "express";
import { UserBusiness } from "../../business/UserBusiness";
import { UserDatabase } from "../../data/UserDatabase";
import { UserController } from "../UserController";

export const userRouter = express.Router();

const userDatabase = new UserDatabase();
const userBusiness = new UserBusiness(userDatabase);
const userController = new UserController(userBusiness);

userRouter.post("/create", (req, res) => userController.createUser(req, res));
userRouter.get("/getAll", (req, res) => userController.getAll(req, res));