const express = require('express');
const app = express();
const port = 3000;

// Middlewares
app.use(express.json());

// Users
const users = [
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Kharis', email: 'kharis@gmail.com'},
    { id: 3, name: 'Adams', email: 'adams@gmail.com'}
];

// Get all users
app.get('/users', (req, res) => {
    res.status(200).json({ users });
})

// Create a user
app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json({ user });
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// CRUD Operations