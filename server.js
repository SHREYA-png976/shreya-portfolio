const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Contact = require('./models/Contact');
const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

const profile = {
  name: 'Shreya M R', role: 'Data Analytics & MERN Stack Enthusiast',
  email: 'shreyamr22@gmail.com', phone: '7204099577',
  linkedin: 'https://www.linkedin.com/in/shreya-raj-bb4225281',
  objective: 'Aspiring MIS Executive with hands-on skills in Excel, Power BI, data analysis and reporting - focused on helping teams make clearer business decisions.',
  skills: ['MS Excel', 'Google Sheets', 'Power BI', 'SQL & MySQL', 'MongoDB', 'Python', 'JavaScript', 'MERN Stack', 'Java Full Stack', 'Git & GitHub'],
  education: [
    { degree: 'MCA (AI & DS)', school: 'Sapthagiri NPS University', score: '8.24 CGPA', year: '2026' },
    { degree: 'BCA', school: 'Bangalore University', score: '8.0 CGPA', year: '2024' },
    { degree: 'PUC', school: 'Sri Basaveshwara Girls PU College', score: '65%', year: '2021' }
  ],
  certificates: ['Data Analytics in Power BI', 'CyberOps Associate', 'Java Full Stack Internship - Tripillar', 'Web Developer Intern - Torsecure Cyber LLP'],
  projects: [
    { title: 'Employee Attendance & Performance Dashboard', type: 'Power BI', description: 'HR dashboard for tracking attendance, absenteeism and productivity through interactive reports and DAX measures.' },
    { title: 'Recruitment Funnel Analysis Report', type: 'Power BI', description: 'HR analytics dashboard for recruitment stages, conversion rates and time-to-hire analysis.' },
    { title: 'ZenCure', type: 'Java Full Stack', description: 'Healthcare management system with patient records, appointment scheduling, medicine management and secure authentication.' },
    { title: 'MentorBridge', type: 'MERN Stack', description: 'Student-mentor platform with authentication, mentor search, session booking and an admin dashboard.' }
  ]
};

app.get('/api/profile', (_, res) => res.json(profile));
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ message: 'Please complete all fields.' });
  try { await Contact.create({ name, email, message }); res.status(201).json({ message: 'Thanks - your message has been received.' }); }
  catch (error) { res.status(500).json({ message: 'Unable to send your message right now.' }); }
});

const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/shreya_profile')
  .then(() => app.listen(port, () => console.log(`API running on ${port}`)))
  .catch(error => { console.error('MongoDB connection failed:', error.message); app.listen(port, () => console.log(`API running without database on ${port}`)); });
