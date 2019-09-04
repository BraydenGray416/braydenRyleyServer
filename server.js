const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const config = require('./config');

const Work = require('./models/work');
const Users = require('./models/users');

mongoose.connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@ryleyscluster-jy7ku.mongodb.net/portfolio?retryWrites=true&w=majority`);

const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    // we're connected!
    console.log('we are connected to mongo db');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.use(function(req, res, next){
    console.log(`${req.method} request for ${req.url}`);
    next();
});

app.post('/addWorkItem', function(req, res){
    const workItem = new Work({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        author: req.body.author,
        url: req.body.url,
    });

    workItem.save().then(result => {
        res.send(result);
    }).catch(err => res.send(err));
});

app.listen(port, () => {
  console.clear();
  console.log(`application is running on port ${port}`)
});
