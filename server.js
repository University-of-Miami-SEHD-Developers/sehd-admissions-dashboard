const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

console.log('Starting server...');
console.log('Current directory:', __dirname);
console.log('Files in current directory:', require('fs').readdirSync(__dirname));

// Serve static files
app.use(express.static(__dirname));

// Handle React routing
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  console.log('Serving index.html from:', indexPath);
  res.sendFile(indexPath);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});