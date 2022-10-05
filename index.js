const express = require('express');
const routes = require('./routes')
const bodyParser = require('body-parser');
const cors = require("cors");

//express
var corsOptions = {
       origin: "http://localhost"
};

const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

routes(app);


app.listen(8081, () => {
       console.log('Server running at http://localhost:8081/');
});