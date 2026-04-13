import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { createQuote, recieveQuote } from "../controllers/quote.controller.js";
import { msgLimiter } from "../controllers/ratelimit.controller.js";

let quoteRouter = express.Router()

quoteRouter.post("/create", isAuth, msgLimiter, createQuote)
quoteRouter.get("/rec", isAuth, msgLimiter, recieveQuote)

export default quoteRouter