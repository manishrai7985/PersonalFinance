//dXJc1fw9mxliEqk4   dXJc1fw9mxliEqk4

import express from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";
const app=express();
const port=process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const MONGOURI="mongodb+srv://manishrai7985:dXJc1fw9mxliEqk4@personalfinancetracker.di5ussh.mongodb.net/"

mongoose.connect(MONGOURI).then(()=>console.log("connected to mongodb")).catch((err)=>console.error("failed to connect to mongodb",err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});