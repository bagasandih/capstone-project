import "dotenv/config";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Middlewares
app.use(cors({origin:'*', credentials: true}));
app.use(express.json());
app.use(userRoutes);


// Server
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`App runing on ${PORT}`);
});