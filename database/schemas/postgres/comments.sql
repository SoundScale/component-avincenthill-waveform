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

/* songId INTEGER REFERENCES songs(id) */
