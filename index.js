const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const route = require('./routes/route');
const keys = require('./keys/key');

const app = express();

const PORT = process.env.PORT || 3001;

app.all('/', (req, res, next) => {
    res.send("<h1>HI</h1>");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/api/todos", route);

mongoose.connect(keys.key, { useNewUrlParser: true, useUnifiedTopology: true }).then(function(){console.log("Connected to MongoDB Atlas...")})
                     .catch(function(err){console.log("Can't connect to MongoDB Atlas...Sonething Wrong!! "+err)});

app.listen(PORT,() => console.log("Server is running on port: ", PORT));
