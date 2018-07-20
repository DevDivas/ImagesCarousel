const fs = require('fs');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/assets');

// define schema
let assetSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  url: String,
  home_id: Number,
  order: Number,
  caption: String
});

// defining model
let Asset = mongoose.model('Asset', assetSchema);

fs.readFile(__dirname+'/data.csv', 'utf8', (err, data) => {
  if (err) {
    console.log('Failed to read CSV file: ', err);
    return;
  }
  console.log('Data fetched from CSV file');
  let strAssets = data.split('\n');

  // refactor string entries to object entries
  let objAssets = strAssets.map((str) => {
    let temp = str.split(', ');
    return {
      id: temp[0],
      url: temp[1],
      home_id: temp[2],
      order: temp[3],
      caption: temp[4]
    }
  })
  
  // insert documents into collection
  Asset.insertMany(objAssets, (err, docs) => {
    if (err) {
      console.log('InsertMany error: ', err);
      return;
    }
    console.log('InsertMany success');
  })
})






