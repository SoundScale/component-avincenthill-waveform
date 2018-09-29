require('dotenv').config();
const { Client } = require('pg');

const connectionString = `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PW}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DBNAME}`;

const client = new Client({
  connectionString: connectionString,
});

client.connect().then(() => console.log('seed.js connected to postgres...'));

client.query('DROP TABLE IF EXISTS songs, comments;')
  .then(res => console.log('dropped tables = songs, comments'))
  .catch(e => console.error(e.stack));

client.query(`CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    title VARCHAR (255),
    coverArt VARCHAR (255),
    artist VARCHAR (255),
    releaseDate DATE,
    duration FLOAT,
    genre VARCHAR (255),
    waveform VARCHAR (255),
    backgroundColor VARCHAR (255)
   );
   `)
  .then(res => console.log('create table songs'))
  .catch(e => console.error(e.stack));

client.query(`CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  body VARCHAR (255),
  username VARCHAR (255),
  userImage VARCHAR (255),
  timePosted FLOAT,
  songId INTEGER
 );
 `)
  .then(res => console.log('create table comments, press ctrl+c to exit'))
  .catch(e => console.error(e.stack));


console.log('seed.js finished creating postgres tables!');
