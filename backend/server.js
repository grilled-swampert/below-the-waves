require('dotenv').config();
const cors = require('cors');

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/admin/adminRoutes');
const bodyParser = require('body-parser');

// EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// ROUTES
app.use('/', routes);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
  tlsAllowInvalidCertificates: true,  // For testing only
};

// CONNECT TO MONGODB
mongoose.connect(process.env.MONGO_URL, options)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(process.env.PORT, () => {
            console.log('Server is running on port ' + process.env.PORT);
        });
    })
    .catch((err) => console.log(err));