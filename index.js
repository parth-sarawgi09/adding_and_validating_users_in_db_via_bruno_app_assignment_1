const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');  // Import the routes

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/marketplace')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log(error));


// Use the routes
app.use('/api', authRoutes);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});