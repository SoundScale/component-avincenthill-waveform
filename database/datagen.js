const faker = require('faker');
const fs = require('fs');
const casual = require('casual');

const imageIds = require('./imageIds.js');
// TBD do I need below?
const waveformUrls = [
  'http://w1.sndcdn.com/fxguEjG4ax6B_m.png',
  'https://w1.sndcdn.com/cWHNerOLlkUq_m.png'];

let startTime;
let endTime;

const clockIn = () => {
  startTime = new Date();
  console.log(`datagen.js started running at ${startTime}`);
  console.log('------------------');
}

const clockOut = () => {
  endTime = new Date();
  console.log('------------------');
  console.log(`datagen.js stopped running at ${endTime}`);
  console.log(`datagen.js ran in ${(endTime - startTime) / 1000}s`);
}

clockIn();

// datagen script
const mode = 'songs';
const numChunks = 100; //100
const sizeOfChunk = 100000; //100000
const filePath = `./database/data/${mode}Data.csv`;
let dataString = '';

faker.seed(13579);

const appendChunk = (i) => {
  const chunkBase = sizeOfChunk * i;
  if (i > numChunks - 1) {
    clockOut();
    return;
  }
  // construct string chunk
  dataString = '';
  for (let j = 0; j <= sizeOfChunk; j += 1) {
    if (mode === "songs") {
      if (i === 0 && j === 0) {
        // write csv song header
        dataString += `id,title,artist,coverArt,date,duration,genre,waveform,backgroundColor${'\n'}`;
      } else if (j > 0) {
        // write song data
        dataString += `${j + chunkBase},${faker.commerce.color()} ${faker.hacker.noun()} ${j + chunkBase},${'https://source.unsplash.com/' + imageIds[Math.floor(Math.random() * imageIds.length)] + '/690x900'},${casual.date('x')},${Math.floor(Math.random() * 6 * 100) / 100},${casual.word},deprecatedWaveformUrl,${casual.rgb_hex}${'\n'}`;
      }
    }
    // } else if (mode === "comments") {
    //   if (i === 0 && j === 0) {
    //     // TBD write csv header
    //     dataString += `
    //       text,
    //       user,
    //       userImage,
    //       timePosted,
    //       songId
    //       ${'\n'}
    //   `;
    //   } else if (j > 0) {
    //     // TBD write comments data
    //     dataString += `
    //         ${j + chunkBase},
    //         ${faker.commerce.color()} ${faker.hacker.noun()} ${j + chunkBase}
    //         ${'\n'}
    //     `;
    //   }
    // }
  }
  // append to .csv
  fs.appendFile(filePath, dataString, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`chunk ${i} (data entries ${chunkBase} - ${(i + 1) * sizeOfChunk})  appended to ${filePath}`);
    appendChunk(i + 1);
  });
};

// start recursion
appendChunk(0);


// songs

//   +-----------------+--------------+------+-----+---------+----------------+
// | Field           | Type         | Null | Key | Default | Extra          |
// +-----------------+--------------+------+-----+---------+----------------+
// | id              | int(11)      | NO   | PRI | NULL    | auto_increment |
// | title           | varchar(255) | YES  |     | NULL    |                |
// | coverArt        | varchar(255) | YES  |     | NULL    |                |
// | artist          | varchar(255) | YES  |     | NULL    |                |
// | date            | datetime     | YES  |     | NULL    |                |
// | duration        | float        | YES  |     | NULL    |                |
// | genre           | varchar(255) | YES  |     | NULL    |                |
// | waveform        | varchar(255) | YES  |     | NULL    |                |
// | backgroundColor | varchar(255) | YES  |     | NULL    |                |
// +-----------------+--------------+------+-----+---------+----------------+

// comments

// +------------+--------------+------+-----+---------+----------------+
// | Field      | Type         | Null | Key | Default | Extra          |
// +------------+--------------+------+-----+---------+----------------+
// | id         | int(11)      | NO   | PRI | NULL    | auto_increment |
// | text       | varchar(255) | YES  |     | NULL    |                |
// | user       | varchar(255) | YES  |     | NULL    |                |
// | userImage  | varchar(255) | YES  |     | NULL    |                |
// | timePosted | float        | YES  |     | NULL    |                |
// | songId     | int(11)      | YES  | FK? | NULL    |                |
// +------------+--------------+------+-----+---------+----------------+

// function instantiateData(songModel, commentModel, connection) {
//   songModel.sync({ force: true })
//     .then(() => {
//       // const songPromises = [];
//       for (let i = 0; i < 100; i += 1) {
//         const imageUrl = 'https://source.unsplash.com/{
//         imageIds[Math.floor(Math.random() * imageIds.length)]
//         }/690x900';

//         songModel.create({
//           title: faker.random.word(),
//           artist: faker.name.findName(),
//           coverArt: imageUrl,
//           date: faker.date.recent(),
//           duration: Math.floor(Math.random() * 6 * 100) / 100,
//           genre: faker.random.word(),
//           waveform: waveformUrls[Math.floor(Math.random() * 2)],
//           backgroundColor: faker.internet.color(),
//         });
//         // return Promise.all(songPromises);
//       }
//     })
//     .then(() => commentModel.sync({ force: true }))
//     .then(() => {
//       // const commentPromises = [];
//       for (let i = 0; i < 600; i += 1) {
//         commentModel.create({
//           text: faker.random.words(),
//           user: faker.name.firstName(),
//           userImage: faker.image.avatar(),
//           timePosted: Math.floor(Math.random() * 600 * 100) / 100,
//           songId: Math.floor(Math.random() * 100),
//         });
//         // return Promise.all(commentPromises);
//       }
//     })
//     .then(() => {
//       console.log('Database { DATABASE } seeded');
//       setTimeout(() => {
//         connection.close();
//       }, 6000);
//     });
// }

//

/*

Write a data generation script that can produce a minimum of 10M records and efficiently load this data into your service's DBMS. Use your simulated dataset for ALL subsequent testing.

Ideally, data generation+loading should take no more than 1hr for 10M records. One hour represents the maximum upper bound. For many projects, the total time should be under 10 min. Consult with your TM if you are unsure.

Records should be representative of actual data (i.e. do not repeat the same record and do not use nonsensical random values.) The use of libraries and tools like Faker, Lorem Ipsum (text) and Lorem Flickr (images) is recommended.

You must generate your own data -- using a downloaded dataset or scraping data from a website is not permitted.

Attempt to design and build a modular data generation and import script. More specifically, design the data generation step to be independent of the load step. This will allow you to use the same generation code for both databases (see benchmark step below).

The primary record represents an item. If your service/widget is responsible for related data, you will likely generate more than 10M records. For example, there is a 1:1 relationship between an item and its description, but there is a 1:n relationship between an item and it's reviews/photos/etc.

The number of related records should vary between items; the goal is to create a realistic representation of an item page. For example, not every item will have 10 reviews or 10 photos. Some items will have zero reviews, some will have 20. Create variations as appropriate.

*/