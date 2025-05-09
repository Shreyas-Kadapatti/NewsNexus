const express = require('express');
const setRoutes = require('./routes/newsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Set up routes
setRoutes(app);

// Default route for root path
app.get('/', (req, res) => {
  res.send('Welcome to the NewsNexus API! Use /api/news to access the news.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});