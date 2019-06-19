const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const router = require('./router');

const server = express();

const port = 3000;

// allows cross-orgin requests
server.use(cors());
// logs details of our requests
server.use(morgan('dev'));
// parse incoming requests into req.body
server.use(bodyParser.json());
// allows for objects and arrays to be encoded
server.use(bodyParser.urlencoded({ extended: true }));

// routes requests to '/api' endpoint to our router
server.use('/api', router);

// starts our server and listens for requests
server.listen(port, () => console.log(`Connected to port ${port}!`));
