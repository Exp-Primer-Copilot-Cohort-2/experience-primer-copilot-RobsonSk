// Create web server
// 1. Install express
// 2. Create a server
// 3. Create a route
// 4. Send a response
// 5. Listen to port

const express = require('express');
const app = express();

const comments = [
    {
        id: 1,
        username: 'Alice'
    }
];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
