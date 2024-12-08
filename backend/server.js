const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const carRoutes = require('./routes/carRoutes');

dotenv.config();
connectDB();

const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json()); // Middleware for parsing JSON
app.use('/api', carRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
