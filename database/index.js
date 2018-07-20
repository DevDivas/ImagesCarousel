const fs = require('fs');
// const csv = require('csv-parser');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/assets');

fs.readFile(__dirname+'/data.csv', 'utf8', (err, data) => {
  if (err) {
    console.log('Failed to read CSV file: ', err);
    return;
  }
  console.log('Data fetched from CSV file');
  console.log(data.split('\n'));
})


// let assetSchema = mongoose.Schema({
//   id: {type: Number, unique: true},
//   url: String,
//   home_id: Number,
//   order: Number,
//   caption: String
// });

// let Asset = mongoose.model('Asset', assetSchema);



