require('dotenv').config();
const express = require('express');
const fs = require('fs');
const https = require('https');
const path = require('path');
const helmet = require('helmet')
const cors = require('cors');

const app = express();
const APP_PORT = process.env.APP_PORT || 3000;
const HTTP_PORT = APP_PORT - 1; // Offset for HTTP

// Security
app.use(helmet());

// CORS
app.use(cors({
    origin: ['http://localhost:5173']
}));

app.use(express.json());

// import and use routes
const templateRoutes = require('.routes/template')

app.use('/template', templateRoutes);

// Error handling middleware
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

// SSL options for HTTPS server
const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, 'ssl', 'server-key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server-cert.pem'))
};

// Create HTTP server
app.listen(HTTP_PORT, () => {
    console.log(`HTTP Server running on http://localhost:${HTTP_PORT}`);
});

// Create HTTPS server
https.createServer(sslOptions, app).listen(APP_PORT, () => {
    console.log(`HTTPS Server running on https://localhost:${APP_PORT}`);
});