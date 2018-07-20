const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/assets');

let assetSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  url: String,
  home_id: Number,
  order: Number,
  caption: String
});

let Asset = mongoose.model('Asset', assetSchema);



