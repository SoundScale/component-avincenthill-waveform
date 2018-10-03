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
/home/avincenthill/Projects/SDC/helpers/cassandra-loader/build/cassandra-loader -f /home/avincenthill/Projects/SDC/component-avincenthill-waveform/database/data/songsData.csv -host localhost -schema "sdc.songs(songs_id, songs_title, songs_artist, songs_coverArt, songs_releaseDate, songs_duration, songs_genre, songs_waveform, songs_backgroundColor)"

Row has different number of fields (9) than expected (8)
Error parsing line 10 in songsData.csv: 9,azure driver 9,Christa,https://source.unsplash.com/c0ZvWlXRPLk/690x900,1971-01-30,2.43,et,deprecatedWaveformUrl,#14bae0

*/