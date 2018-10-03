/*
comments

+------------+--------------+------+-----+---------+----------------+
| Field      | Type         | Null | Key | Default | Extra          |
+------------+--------------+------+-----+---------+----------------+
| id         | int(11)      | NO   | PRI | NULL    | auto_increment |
| text       | varchar(255) | YES  |     | NULL    |                |
| user       | varchar(255) | YES  |     | NULL    |                |
| userImage  | varchar(255) | YES  |     | NULL    |                |
| timePosted | float        | YES  |     | NULL    |                |
| songId     | int(11)      | YES  |     | NULL    |                |
+------------+--------------+------+-----+---------+----------------+
*/

DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
 id SERIAL PRIMARY KEY,
 body VARCHAR (255),
 username VARCHAR (255),
 userImage VARCHAR (255),
 timePosted FLOAT,
 songId INTEGER
);

/*
psql import script

COPY comments(id, body, username, userImage, timePosted, songId) FROM '/home/avincenthill/Projects/SDC/component-avincenthill-waveform/database/data/commentsData.csv' DELIMITER ',' CSV;

ex data
10,rerum ut earum inventore architecto culpa voluptatem,Nelson,https://s3.amazonaws.com/uifaces/faces/twitter/91bilal/128.jpg,101.5,9339426


songId INTEGER REFERENCES songs(id)
*/
