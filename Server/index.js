import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { dbConnect } from "./src/config/dbConnect.js";
import router from "./src/routes/routes.js";


const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//Database Connection
dbConnect();


//Api Mounting
app.use("/api/v1", router)

// app.get("/", (req,res) => {
//   console.log("Server")
// })



const PORT = 8000;
app.listen(PORT, () => {
  console.log("sucessfully server stared listening", PORT);
});
