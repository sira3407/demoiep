import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('your-mongodb-connection-string')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define Schemas
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  iepGoals: [
    {
      goal: String,
      progress: Number,
      targetDate: Date,
    },
  ],
});

const Student = mongoose.model('Student', studentSchema);

// API Endpoints
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/students', async (req, res) => {
  const student = new Student(req.body);
  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});