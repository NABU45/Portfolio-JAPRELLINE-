import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/business_model', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () =>{
    console.log('Connected to MongoDB database');
});
const businessSchema = new mongoose.Schema({
    name: String,
    createdOn: Date,
    location: String // Assuming location is a textual representation, change to String
});
const Business = mongoose.model('Business', businessSchema);

app.post('/business', async(req,res)=>{
    const { name, createdOn, location } = req.body;

    const business = new Business({
        name,
        createdOn,
        location
    });
    try{
        await business.save();
        console.log('Business saved successfully');
        res.status(200).json({ message: 'Business saved successfully' });
    }
    catch(error){
        console.error("Failed to save business:", error);
        res.status(500).json({ message: 'Failed to save business' });
    }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
