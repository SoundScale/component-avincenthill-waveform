DROP TABLE IF EXISTS comments;

CREATE TABLE comments(
   comments_id int PRIMARY KEY,
   comments_body text,
   comments_username text,
   comments_userImage text,
   comments_timePosted float,
   comments_songId int
);

/* load command

/home/avincenthill/Projects/SDC/helpers/cassandra-loader/build/cassandra-loader -f /home/avincenthill/Projects/SDC/component-avincenthill-waveform/database/data/commentsData.csv -host localhost -schema "sdc.comments(comments_id, comments_body, comments_username, comments_userImage, comments_timePosted, comments_songId)"

Row has different number of fields (5) than expected (6)
Error parsing line 10 in commentsData.csv:

temporibus mollitia vitae enim molestiae et dolorum,
Henry,
https://s3.amazonaws.com/uifaces/faces/twitter/91bilal/128.jpg,
266.71,
1764921

*/