const express = require('express');
const { PORT } = require('./config');
const cors = require('cors');

const app = express();

app.use(cors())

app.get('/api', (req, res) => {
  res.json('Its worrrkkkiiinnngggg')
})

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
