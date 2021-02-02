const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// import routes
const indexRoute = require('./routes');

// app
const app = express();

// middleware
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(cors());

// route middleware
app.use('/', indexRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server running on port: ${ port }`)
})