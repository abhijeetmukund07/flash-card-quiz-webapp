const express = require('express');
const path = require('path');
const cors = require("cors");
const userApp = require('./APIs/userAPI');
const adminApp = require('./APIs/adminAPI');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())


// Static files (if you need to serve any)
app.use(express.static(path.join(__dirname,'../frontend/build')))
// Routing to user APIs
app.use('/', userApp);

// Routing to admin APIs
app.use('/admin', adminApp);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ status: 'Error', message: err.message });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
