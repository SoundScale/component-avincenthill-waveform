DROP TABLE IF EXISTS optimized_comments;

CREATE TABLE optimized_comments (
songs_id int,
   songs_title text,
   songs_coverArt text,
   songs_artist text,
   songs_releaseDate text,
   songs_duration float,
   songs_genre text,
   songs_waveform text,
   songs_backgroundColor text,
   comments_id int,
   comments_body text,
   comments_username text,
   comments_userImage text,
   comments_timePosted float,
   PRIMARY KEY (songs_id, comments_id)
);

/*

/home/avincenthill/Projects/SDC/helpers/cassandra-loader/build/cassandra-loader -f /home/avincenthill/Projects/SDC/component-avincenthill-waveform/database/data/optimized_commentsData.csv -host localhost -schema "sdc.optimized_comments(songs_id, songs_title, songs_artist, songs_coverArt, songs_releaseDate, songs_duration, songs_genre, songs_waveform, songs_backgroundColor, comments_id, comments_body, comments_username, comments_userImage, comments_timePosted)"

10000000,violet pixel 10000000,Isac,https://source.unsplash.com/9nTxnFaSR_Q/690x900,2004-03-30,0.21,et,deprecatedWaveformUrl,#6e14af$,60010902,est fugiat provident ut et ab excepturi,Kelton,https://source.unsplash.com/OSKZMbtsLFU/690x900,132.83,7995305


*/