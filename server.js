
const express = require("express");

const app = express();

const PORT = 3000;

// Allow backend to read JSON data
app.use(express.json());

// Connect frontend folder
app.use(express.static("public"));

// Test backend route
app.get("/test", (req, res) => {
    res.send("Backend is working successfully!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
// Store student details temporarily
let students = [];

// API to receive student details
app.post("/students", (req, res) => {
    const student = req.body;

    students.push(student);

    res.json({
        message: "Student registered successfully!",
        student: student
    });
});