const Sequelize = require('sequelize');
const SongModel = require('./models/postgres/Songs.js');
const CommentModel = require('./models/postgres/Comments.js');
const DATABASE = process.env.POSTGRES_DBNAME || 'waveformplayer';
const USER = process.env.POSTGRES_USER || 'root';
const PASSWORD = process.env.POSTGRES_PW || '';
const DB_HOST = process.env.POSTGRES_HOST || 'localhost';
const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  logging: false,
});
const songModel = SongModel(sequelize);
const commentModel = CommentModel(sequelize);

module.exports = {
  getSongData: (id, callback) => {
    const queryResult = {};
    songModel.findAll({
      where: { id },
    })
      .then((result => {
        queryResult.songData = result[0];
        return commentModel.findAll({
          where: {
            songid: id,
          }
        })
      }))
      .then((result => {
        console.log(result);
        queryResult.commentData = result;
        callback(JSON.stringify({ allData: queryResult }));
      }))
  },

  // REST operations
  // **************************************
  // songs
  getSongs: (err, cb) => {
    const queryResult = {};
    songModel.findAll()
      .then((result => {
        queryResult.data = result;
        cb(null, JSON.stringify(queryResult));
      }));
  },

  getSong: (err, cb, id) => {
    const queryResult = {};
    songModel.findAll({
      where: { id },
    })
      .then((result => {
        queryResult.data = result;
        cb(null, JSON.stringify(queryResult));
      }));
  },

  updateSong: (err, cb, id, body) => {
    // destructure update properties
    const {
      title,
      coverArt,
      artist,
      date,
      duration,
      genre,
      waveform,
      backgroundCOlor,
    } = body;
    songModel.update(
      {
        title,
        coverArt,
        artist,
        date,
        duration,
        genre,
        waveform,
        backgroundCOlor
      },
      {
        returning: true,
        where: { id },
      }
    ).then((result => {
      cb(null);
    }));
  },

  deleteSong: (err, cb, id) => {
    const queryResult = {};
    songModel.destroy({
      where: { id },
    })
      .then((result => {
        // console.log(result);
        cb(null);
      }));
  },

  createSong: (err, cb, body) => {
    const {
      id,
      title,
      coverArt,
      artist,
      date,
      duration,
      genre,
      waveform,
      backgroundCOlor,
    } = body;
    songModel.create(
      {
        id,
        title,
        coverArt,
        artist,
        date,
        duration,
        genre,
        waveform,
        backgroundCOlor,
      }
    ).then((result => {
      cb(null);
    })).catch((err) => {
      cb(err);
    });
  },

  // **************************************
  // comments
  getComments: (err, cb) => {
    const queryResult = {};
    commentModel.findAll()
      .then((result => {
        queryResult.data = result;
        cb(null, JSON.stringify(queryResult));
      }));
  },

  getComment: (err, cb, id) => {
    const queryResult = {};
    commentModel.findAll({
      where: { id },
    })
      .then((result => {
        queryResult.data = result;
        cb(null, JSON.stringify(queryResult));
      }));
  },

  updateComment: (err, cb, id, body) => {
    // destructure update properties
    const {
      text,
      user,
      userImage,
      timePosted,
      songId,
    } = body;
    commentModel.update(
      {
        text,
        user,
        userImage,
        timePosted,
        songId,
      },
      {
        returning: true,
        where: { id },
      }
    ).then((result => {
      cb(null);
    }));
  },

  deleteComment: (err, cb, id) => {
    const queryResult = {};
    commentModel.destroy({
      where: { id },
    })
      .then((result => {
        // console.log(result);
        cb(null);
      }));
  },

  createComment: (err, cb, body) => {
    const {
      id,
      text,
      user,
      userImage,
      timePosted,
      songId,
    } = body;
    commentModel.create(
      {
        id,
        text,
        user,
        userImage,
        timePosted,
        songId,
      }
    ).then((result => {
      cb(null);
    })).catch((err) => {
      cb(err);
    });
  },
};

