// app.js
// author: Brandon Arnold
// created: May 21, 2024

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const moviesRouter = require('./routes/movies');
app.use('/api/movies', moviesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
