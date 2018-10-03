/*
songs

  +-----------------+--------------+------+-----+---------+----------------+
| Field           | Type         | Null | Key | Default | Extra          |
+-----------------+--------------+------+-----+---------+----------------+
| id              | int(11)      | NO   | PRI | NULL    | auto_increment |
| title           | varchar(255) | YES  |     | NULL    |                |
| coverArt        | varchar(255) | YES  |     | NULL    |                |
| artist          | varchar(255) | YES  |     | NULL    |                |
| date            | datetime     | YES  |     | NULL    |                |
| duration        | float        | YES  |     | NULL    |                |
| genre           | varchar(255) | YES  |     | NULL    |                |
| waveform        | varchar(255) | YES  |     | NULL    |                |
| backgroundColor | varchar(255) | YES  |     | NULL    |                |
+-----------------+--------------+------+-----+---------+----------------+

id,title,artist,coverArt,date,duration,genre,waveform,backgroundColor

1,mint green protocol 1,https://source.unsplash.com/w9jX4zNt9ro/690x900,859132226000,1.18,perspiciatis,deprecatedWaveformUrl,#ceee27

2,orange card 2,https://source.unsplash.com/ifYt0sKdJYk/690x900,1377897420000,2.25,nihil,deprecatedWaveformUrl,#7b3e1e
3,yellow sensor 3,https://source.unsplash.com/he703qyvnzY/690x900,1343822033000,0.12,dolores,deprecatedWaveformUrl,#ddeb7a
4,lavender bus 4,https://source.unsplash.com/bONbn495IMs/690x900,1285926662000,1.14,consequuntur,deprecatedWaveformUrl,#1c8320
5,pink driver 5,https://source.unsplash.com/pnLQEitmmRQ/690x900,1120749879000,5.46,et,deprecatedWaveformUrl,#c15c20
6,gold capacitor 6,https://source.unsplash.com/ifYt0sKdJYk/690x900,732888944000,3.65,quas,deprecatedWaveformUrl,#635690
7,salmon monitor 7,https://source.unsplash.com/c0ZvWlXRPLk/690x900,586815938000,0.85,sed,deprecatedWaveformUrl,#e0f587
8,lime feed 8,https://source.unsplash.com/9nTxnFaSR_Q/690x900,294110778000,0.36,non,deprecatedWaveformUrl,#69dba3
9,azure driver 9,https://source.unsplash.com/he703qyvnzY/690x900,82147729000,3.8,iure,deprecatedWaveformUrl,#0df447

*/

DROP TABLE IF EXISTS songs;

CREATE TABLE songs (
 id SERIAL PRIMARY KEY,
 title VARCHAR (255),
 artist VARCHAR (255),
 coverArt VARCHAR (255),
 releaseDate DATE,
 duration FLOAT,
 genre VARCHAR (255),
 waveform VARCHAR (255),
 backgroundColor VARCHAR (255)
);

/*
psql import script

COPY songs(id, title, artist, coverArt, releaseDate, duration, genre, waveform, backgroundColor) FROM '/home/avincenthill/Projects/SDC/component-avincenthill-waveform/database/data/songsData.csv' DELIMITER ',' CSV;

ex data
10,maroon circuit 10,Elyssa,https://source.unsplash.com/9nTxnFaSR_Q/690x900,1983-10-18,1.61,dolores,deprecatedWaveformUrl,#cb648c

*/
