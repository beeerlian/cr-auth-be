const express = require('express');
const routes = require('./routes')
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config()

//express
var corsOptions = {
       origin: "*"
};

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

routes(app);

const PORT = 8081;
const HOST = '0.0.0.0';
app.listen(PORT, HOST, () => {
       console.log('Server running at http://localhost:8081/');
});