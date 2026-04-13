import express from "express"
import { getData } from "../controllers/user.controller.js"
import isAuth from "../middlewares/isAuth.js"

let authRouter = express.Router()

authRouter.get("/user", isAuth, getData)

export default authRouter