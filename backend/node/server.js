const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // or your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb+srv://krishmmavani39:eafp0oZB7g4tVFSB@cluster0.qhtlcvp.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// User Schema
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', UserSchema);

// Authentication Routes
app.post('/api/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate request body
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
    console.error('Signup Error:', error);
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate request body
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
    console.error('Login Error:', error);
  }
});

// NodeMailer Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use Gmail as the email service
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your Gmail app password
  },
  tls: {
    rejectUnauthorized: false, // Allow self-signed certificates
  },
});

// Email Route
app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email, // Sender's email
    to: ['krishmavani3011@gmail.com'], // Recipients
    subject: `New Contact Form Submission from ${name}`,// Email subject
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // Email body
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent:', info.response);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send message. Please try again later.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});