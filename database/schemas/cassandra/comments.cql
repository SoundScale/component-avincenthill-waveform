DROP TABLE IF EXISTS comments;

CREATE TABLE comments(
   comments_id int PRIMARY KEY,
   comments_body text,
   comments_username text,
   comments_userImage text,
   comments_timePosted float,
   comments_songId int
);

/* comments
CREATE TABLE comments (
 id SERIAL PRIMARY KEY,
 body VARCHAR (255),
 username VARCHAR (255),
 userImage VARCHAR (255),
 timePosted FLOAT,
 songId INTEGER
);
*/