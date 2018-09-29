DROP TABLE IF EXISTS songs;

CREATE TABLE songs(
   songs_id int PRIMARY KEY,
   songs_title text,
   songs_coverArt text,
   songs_artist text,
   songs_releaseDate text,
   songs_duration float,
   songs_genre text,
   songs_waveform text,
   songs_backgroundColor text
);

/* postgres schema
DROP TABLE IF EXISTS songs;

CREATE TABLE songs (
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
*/