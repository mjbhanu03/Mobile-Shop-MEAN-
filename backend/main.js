const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const customer = require('./routes/customer.routes')

const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mobile_shop', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));


//  For allowing cors
app.use(cors({
    methods: ['GET', 'POST'],       // Only allow certain HTTP methods
    allowedHeaders: ['Content-Type'], // Only allow certain headers
    origin: '*', // Restrict access to a specific origin
}));

app.use('/customer', customer);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
