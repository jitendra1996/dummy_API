const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
//home page API
app.get('/', (req, res) => [
    res.status(200).sendFile(path.join(__dirname, 'views', 'index.html'))
])

//API to get personal Information data 
app.get('/personalInfo', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'personalInfo.json'));
})

//API to get educational information data
app.get('/educationalInfo', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'educationalInfo.json'));
})

//API to get institute information data 
app.get("/instituteInfo", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'instituteInfo.json'));
})

// API to get cleared exam information data
app.get("/clearedExamInfo", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'clearedExamInfo.json'))
})
//API to get student role data
app.get("/student", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'student.json'));
})

//API to get owner role data
app.get("/management", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'management.json'));
})

//API to get teacher role data
app.get("/teacher", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'teacher.json'));
})

const port = process.env.PORT || 3009;
app.listen(port, () => console.log(`server is running on port ${port}`));