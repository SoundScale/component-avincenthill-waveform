/*
Table "public.songs"
     Column      |          Type          | Collation | Nullable |              Default              | Storage  | Stats target | Description
-----------------+------------------------+-----------+----------+-----------------------------------+----------+--------------+-------------
 id              | integer                |           | not null | nextval('songs_id_seq'::regclass) | plain    |              |
 title           | character varying(255) |           |          |                                   | extended |              |
 coverart        | character varying(255) |           |          |                                   | extended |              |
 artist          | character varying(255) |           |          |                                   | extended |              |
 releasedate     | date                   |           |          |                                   | plain    |              |
 duration        | double precision       |           |          |                                   | plain    |              |
 genre           | character varying(255) |           |          |                                   | extended |              |
 waveform        | character varying(255) |           |          |                                   | extended |              |
 backgroundcolor | character varying(255) |           |          |                                   | extended |              |
Indexes:
    "songs_pkey" PRIMARY KEY, btree (id)
*/

const Sequelize = require('sequelize');

const songSchema = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
  },
  coverart: {
    type: Sequelize.STRING,
  },
  artist: {
    type: Sequelize.STRING,
  },
  releasedate: {
    type: Sequelize.DATE,
  },
  duration: {
    type: Sequelize.FLOAT,
  },
  genre: {
    type: Sequelize.STRING,
  },
  waveform: {
    type: Sequelize.STRING,
  },
  backgroundcolor: {
    type: Sequelize.STRING,
  },
};

const model = (sequelize) => {
  const Song = sequelize.define('song', songSchema, { timestamps: false });
  return Song;
};

module.exports = model;
