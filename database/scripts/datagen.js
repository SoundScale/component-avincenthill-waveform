const faker = require('faker');
const fs = require('fs');
const casual = require('casual');

const imageIds = require('../data/imageIds.js');
// TBD do I need below?
const waveformUrls = [
  'http://w1.sndcdn.com/fxguEjG4ax6B_m.png',
  'https://w1.sndcdn.com/cWHNerOLlkUq_m.png'];

let startTime;
let endTime;

const clockIn = () => {
  startTime = new Date();
  console.log('------------------');
  console.log(`datagen.js started running at ${startTime}`);
  console.log('------------------');
}

const clockOut = () => {
  endTime = new Date();
  console.log('------------------');
  console.log(`datagen.js stopped running at ${endTime}`);
  console.log(`datagen.js ran in ${(endTime - startTime) / 1000}s`);
  console.log('------------------');
}

clockIn();

// datagen script
const mode = 'songs';
// const mode = 'comments';

const numChunks = 100; // 100 x 100000 for 10M
const sizeOfChunk = 100000; // 1200 x 50000 for 60M
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
        dataString += `${j + chunkBase},${faker.commerce.color()} ${faker.hacker.noun()} ${j + chunkBase},${casual.first_name},${'https://source.unsplash.com/' + imageIds[Math.floor(Math.random() * imageIds.length)] + '/690x900'},${casual.date('YYYY-MM-DD')},${Math.floor(Math.random() * 6 * 100) / 100},${casual.word},deprecatedWaveformUrl,${casual.rgb_hex}${'\n'}`;
      }
    } else if (mode === 'comments') {
      if (i === 0 && j === 0) {
        // write csv header
        dataString += `text,user,userImage,timePosted,songId${'\n'}`;
      } else if (j > 0) {
        // write comments data
        dataString += `${casual.words(n = 7)},${casual.first_name},${faker.image.avatar()},${Math.floor(Math.random() * 600 * 100) / 100},${Math.floor(Math.random() * 10000000)}${'\n'}`;
      }
    }
  }

  // append to .csv
  fs.appendFile(filePath, dataString, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`chunk ${i} (data entries ${chunkBase} - ${(i + 1) * sizeOfChunk}) appended to ${filePath}`);
    appendChunk(i + 1);
  });
};

// start recursion
appendChunk(0);

/*

Write a data generation script that can produce a minimum of 10M records and efficiently load this data into your service's DBMS. Use your simulated dataset for ALL subsequent testing.

Ideally, data generation+loading should take no more than 1hr for 10M records. One hour represents the maximum upper bound. For many projects, the total time should be under 10 min. Consult with your TM if you are unsure.

Records should be representative of actual data (i.e. do not repeat the same record and do not use nonsensical random values.) The use of libraries and tools like Faker, Lorem Ipsum (text) and Lorem Flickr (images) is recommended.

You must generate your own data -- using a downloaded dataset or scraping data from a website is not permitted.

Attempt to design and build a modular data generation and import script. More specifically, design the data generation step to be independent of the load step. This will allow you to use the same generation code for both databases (see benchmark step below).

The primary record represents an item. If your service/widget is responsible for related data, you will likely generate more than 10M records. For example, there is a 1:1 relationship between an item and its description, but there is a 1:n relationship between an item and it's reviews/photos/etc.

The number of related records should vary between items; the goal is to create a realistic representation of an item page. For example, not every item will have 10 reviews or 10 photos. Some items will have zero reviews, some will have 20. Create variations as appropriate.

*/