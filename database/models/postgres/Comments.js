/*
Table "public.comments"
Column   |          Type          | Collation | Nullable |               Default                | Storage  | Stats target | Description
------------+------------------------+-----------+----------+--------------------------------------+----------+--------------+-------------
id         | integer                |           | not null | nextval('comments_id_seq'::regclass) | plain    |              |
body       | character varying(255) |           |          |                                      | extended |              |
username   | character varying(255) |           |          |                                      | extended |              |
userimage  | character varying(255) |           |          |                                      | extended |              |
timeposted | double precision       |           |          |                                      | plain    |              |
songid     | integer                |           |          |                                      | plain    |              |
Indexes:
 "comments_pkey" PRIMARY KEY, btree (id)
 "songid_index" btree (songid)
*/

const Sequelize = require('sequelize');

const commentSchema = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  body: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
  },
  userimage: {
    type: Sequelize.STRING,
  },
  timeposted: {
    type: Sequelize.FLOAT,
  },
  songid: {
    type: Sequelize.INTEGER,
  },
};

const model = (sequelize) => {
  const Comment = sequelize.define('comment', commentSchema, { timestamps: false });
  return Comment;
};

module.exports = model;
