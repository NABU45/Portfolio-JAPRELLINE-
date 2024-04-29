import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();
// const PORT = 8001; // Define the port

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Register_student')
  .then(() => {
    console.log('Connected to MongoDB database');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const RegisterSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true }
}, { collection: 'register' }); // Specify the collection name here

const Register = mongoose.model('Register', RegisterSchema);

app.post('/register', async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  const register = new Register({
    email,
    password,
    confirmPassword
  });
  try {
    await register.save();
    console.log("Successfully registered");
    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user', error.message);
    res.status(500).json({ message: 'Failed to register', error: error.message });
  }
});

app.listen(8003, () => {
  console.log(`Server is running on http://localhost:8003`)
});
