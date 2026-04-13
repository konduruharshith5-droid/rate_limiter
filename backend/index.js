import express from "express";
import connectDb from "./config/db.js";
import userRoute from "./routes/User.route.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import authRouter from "./routes/Auth.route.js";
import quoteRouter from "./routes/Quote.route.js";
import { limiter } from "./controllers/ratelimit.controller.js";

let app = express();
let port = 8000;

app.use(cookieParser())
app.use(express.json())
app.set('trust proxy', 1)

app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true
}))

app.use(limiter);

app.use("/api/auth", userRoute)
app.use("/api/get", authRouter)
app.use("/api/quote", quoteRouter)

app.listen(port, () => {
    connectDb()
    console.log("app started")
})