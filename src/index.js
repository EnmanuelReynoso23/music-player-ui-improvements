const express = require('express');
const bodyParser = require('body-parser');
const musicRoutes = require('./routes/musicRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/music', musicRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Music Player Application!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
