import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/dbconnection.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js"


dotenv.config({});   // {} you can add customised specific options and allow flexiblity to explicitly calling


const app =  express();
const PORT = process.env.PORT || 3000;

//middlewares

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin: 'http//localhost:5173',
    credentials: true
}
app.use(cors(corsOptions));
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application",  applicationRoute);

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running on port ${PORT}🔥🔥`);
})









// const express = require('express');
// require('dotenv').config();

// const MongoDbConnector = require('./connection');
// const userRouter = require('./routes/userRoutes');

// const app = express();
// const PORT = process.env.PORT;
// const DATABASE_URL = process.env.DATABASE_URL;


// //Middleware
// //cors policy
// // app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({extended:false}));

// //Database connection
// MongoDbConnector.connectMongoDb(DATABASE_URL);

// //routers
// app.use('/api/user' , userRouter);


// app.listen(PORT,()=>{
//     console.log(`server start on port ${PORT}🔥🔥🔥`)
// });