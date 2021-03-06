const mockDataStr = '{"allData":{"songData":{"id":6,"title":"quantifying","coverArt":"https://source.unsplash.com/9nTxnFaSR_Q/690x900","artist":"Jaylan Dicki","date":"2018-09-11T12:17:01.000Z","duration":3.86,"genre":"system","waveform":"https://w1.sndcdn.com/cWHNerOLlkUq_m.png","backgroundColor":"#017975"},"commentData":[{"id":94,"text":"Checking Account","user":"Roderick","userImage":"https://s3.amazonaws.com/uifaces/faces/twitter/happypeter1983/128.jpg","timePosted":4.28,"songId":6},{"id":343,"text":"Tools","user":"Ashly","userImage":"https://s3.amazonaws.com/uifaces/faces/twitter/dpmachado/128.jpg","timePosted":0.31,"songId":6},{"id":361,"text":"Tasty Soft Salad cyan","user":"Jaqueline","userImage":"https://s3.amazonaws.com/uifaces/faces/twitter/reideiredale/128.jpg","timePosted":2.14,"songId":6},{"id":380,"text":"Fundamental generate","user":"Michele","userImage":"https://s3.amazonaws.com/uifaces/faces/twitter/dshster/128.jpg","timePosted":4.1,"songId":6},{"id":594,"text":"Handmade Plastic Cheese","user":"Martine","userImage":"https://s3.amazonaws.com/uifaces/faces/twitter/belyaev_rs/128.jpg","timePosted":5.01,"songId":6}]}}'

const mockDataObj = JSON.parse(mockDataStr);

module.exports = {
  song: mockDataObj.allData.songData,
  comments: mockDataObj.allData.commentData,
}