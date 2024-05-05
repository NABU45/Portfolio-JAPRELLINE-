import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import jwt from  "jsonwebtoken";
import  bcrypt from 'bcrypt';
import { configDotenv } from 'dotenv';

configDotenv();

import LoginUser from './schema/LoginSchema.js';

const PORT = 8006;

mongoose.connect("mongodb://localhost:27017/Register_student")

const app= express();
app.use(express.json());
app.use(cors());

async function main(){
    app.post("/login", async(req,res)=>{
        const {useremail,password}= req.body;

        const loginUser = await LoginUser.findOne({useremail:useremail});

        if(loginUser){
             // User already exists
             res.status(400).send({
                err_code: "USER_ALREADY_EXISTS",
                message: "User already exists",

            }); 
            return;   
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new LoginUser({
            useremail,
            password:hashedPassword,
        });

        const savedUser = await newUser.save();
        res.send({
            useremail:savedUser.useremail,
        })
    });
}
app.listen(PORT, ()=>{
    console.log("Server has started at PORT ", PORT);

})
main();