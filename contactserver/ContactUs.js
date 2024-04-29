import mongoose, { mongo } from "mongoose";
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app=express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Register_student')
.then(() =>{
    console.log('Connected to MongoDB database');
})
.catch((error) =>{
    console.error('MongoDB connection error:', error);
});

const db= mongoose.connection;

// Check MongoDB connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

const contactSchema = new mongoose.Schema({
    userName:String,
    userEmail:String,
     userMessage:String
});
const Contact= mongoose.model("Contact",contactSchema);

app.post('/contact', async(req,res) =>{
    const{ userName , userEmail, userMessage} =req.body;

    const contact = new Contact({
        userName:userName,
        userEmail:userEmail,
        userMessage:userMessage
    });
    try{
        await contact.save();
        console.log('thank you for contact  me');
        res.status(200).json({message:'thnak you for contact me'});

    }
    catch(error){
        console.error("you can not contact with me");
        res.status(500).json({message:'failed to contact me', error:error.message});

    }
});
app.listen(8004, () =>{
  console.log(`Server is running on http://localhost:8004`);
    
})