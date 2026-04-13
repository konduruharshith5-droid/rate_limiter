import express from "express";
import { createUser, logout, signIn } from "../controllers/auth.controller.js";
import { limiter } from "../controllers/ratelimit.controller.js";

let userRoute = express.Router();

userRoute.post("/signup", createUser);
userRoute.post("/login", limiter, signIn);
userRoute.post("/logout", logout);

export default userRoute;