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

/* load command
/home/avincenthill/Projects/SDC/helpers/cassandra-loader/build/cassandra-loader -f /home/avincenthill/Projects/SDC/component-avincenthill-waveform/database/data/songsData.csv -host localhost -schema "sdc.songs(songs_id, songs_title, songs_coverArt, songs_releaseDate, songs_duration, songs_artist, songs_waveform, songs_backgroundColor)"

Error parsing line 1 in songsData.csv: id,title,artist,coverArt,date,duration,genre,waveform,backgroundColor
Row has different number of fields (9) than expected (8)
Error parsing line 2 in songsData.csv: 1,mint green protocol 1,Mervin,https://source.unsplash.com/w9jX4zNt9ro/690x900,1970-07-15,3.84,eum,deprecatedWaveformUrl,#0a35ef

*/