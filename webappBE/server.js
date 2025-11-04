const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files dari folder "public"
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.get('/', (req, res) => {
  res.send('Backend running...');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
