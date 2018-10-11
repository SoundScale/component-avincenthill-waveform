require('dotenv').config();
require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../database/index_PostgreSQL.js');
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser());

// serve without an explicit endpoint
app.use('/', express.static('public'));

app.use('/songs/:id', express.static('public'));

// legacy non-REST route
app.get('/api/waveformplayer/:id', (req, res) => {
  db.getSongData(req.params.id, res.send.bind(res));
});

// REST API
// **************************************

/*
1
Place this verification token in a file:

loaderio-da078809a9a0dee57a2632b8564687b9
Or download the file you need.

2
Upload the file to your server so it is accessible at one of the following URLs:

http://ec2-54-219-128-8.us-west-1.compute.amazonaws.com:1337/loaderio-da078809a9a0dee57a2632b8564687b9/
http://ec2-54-219-128-8.us-west-1.compute.amazonaws.com:1337/loaderio-da078809a9a0dee57a2632b8564687b9.html
http://ec2-54-219-128-8.us-west-1.compute.amazonaws.com:1337/loaderio-da078809a9a0dee57a2632b8564687b9.txt
*/

// loader.io
app.get('/loaderio-*/', (req, res) => {
  res.status(200).send(process.env.LOADERIO_KEY);
});

// healthy
app.get('/healthy', (req, res) => {
  res.status(200).send();
});

// songs
app.get('/api/songs/', (req, res) => {
  db.getSongs(null, (err, data) => {
    res.status(200).send(data);
  });
});

app.get('/api/songs/:id', (req, res) => {
  db.getSong(null, (err, data) => {
    res.status(200).send(data);
  }, req.params.id);
});

app.put('/api/songs/:id', (req, res) => {
  db.updateSong(null, (err) => {
    res.status(202).send(`song with id=${req.params.id} updated`);
  }, req.params.id, req.body);
});

app.delete('/api/songs/:id', (req, res) => {
  db.deleteSong(null, (err) => {
    res.status(202).send(`song with id=${req.params.id} deleted`);
  }, req.params.id);
});

app.post('/api/songs/:id', (req, res) => {
  db.createSong(null, (err) => {
    if (err) {
      res.status(409).send(`song with id=${req.params.id} already exists`);
    } else {
      res.status(201).send(`song with id=${req.params.id} created`);
    }
  }, req.body);
});

// **************************************
// comments
app.get('/api/comments/', (req, res) => {
  db.getComments(null, (err, data) => {
    res.status(200).send(data);
  });
});

app.get('/api/comments/:id', (req, res) => {
  db.getComment(null, (err, data) => {
    res.status(200).send(data);
  }, req.params.id);
});

app.put('/api/comments/:id', (req, res) => {
  db.updateComment(null, (err) => {
    res.status(202).send(`comment with id=${req.params.id} updated`);
  }, req.params.id, req.body);
});

app.delete('/api/comments/:id', (req, res) => {
  db.deleteComment(null, (err) => {
    res.status(202).send(`comment with id=${req.params.id} deleted`);
  }, req.params.id);
});

app.post('/api/comments/:id', (req, res) => {
  db.createComment(null, (err) => {
    if (err) {
      res.status(409).send(`comment with id=${req.params.id} already exists`);
    } else {
      res.status(201).send(`comment with id=${req.params.id} created`);
    }
  }, req.body);
});

const componentServerPort = 1337;
app.listen(componentServerPort, () => console.log(`
  avincenthill component-server listening at port ${componentServerPort}...
`));
