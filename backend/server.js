const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDb = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');
const PORT = process.env.PORT;

connectDb();

const app = express();
app.use;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/register', (req, res) => {
  res.json({ message: 'Welcome to the Support Center' });
});

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
