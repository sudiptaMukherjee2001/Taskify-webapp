import express from "express";
import cors from "cors";
const app = express();

app.use(express.json())
app.use(cors())
// import router 
import taskInfoRouter from "./src/routes/taskInfo.routes.js";
app.use("/api/v1/task", taskInfoRouter)
export default app;