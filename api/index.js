import express from 'express';

const app = express();
const port = 3000;

// Define your routes here
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Add more routes here as needed

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});