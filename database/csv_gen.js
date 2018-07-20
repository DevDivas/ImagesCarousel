const fs = require('fs');

//helper function
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const adjectives = ['', 'Spacious ~~', 'Clean ~', 'Tidy ~', 'Brand new !', 'The perfect getaway =)', 'Bright', 'Sunny', 'Recently renovated !', 'New fixtures !', 'Original', 'Just like home =)', 'Comfort at its best', 'Pet-friendly ~', 'Air-conditioned'];
function randomCaption() {
  return adjectives[getRandomIntInclusive(0, adjectives.length - 1)];
}


let uniq_id = 1;
let str = 'id, url, home_id, order, caption\n';

for (let home_id = 1; home_id <= 100; home_id++) {
  //handle exterior
  let order = 1;
  //adding unique id and exterior entry, order of exterior will always be 1
  str += `${uniq_id}, https://s3-us-west-1.amazonaws.com/homesnap/exterior/h${home_id}.jpg, ${home_id}, ${order}, ''\n`;

  order += 1;
  uniq_id += 1;

  //handle bedroom
  let numBR = getRandomIntInclusive(1,2);

  for (let i = 0; i < numBR; i++) {
    str += `${uniq_id}, https://s3-us-west-1.amazonaws.com/homesnap/bedroom/b${getRandomIntInclusive(1,10)}.jpg, ${home_id}, ${order}, ${randomCaption()}\n`;
    order += 1;
    uniq_id += 1;
  }

  //handle kitchen
  str += `${uniq_id}, https://s3-us-west-1.amazonaws.com/homesnap/kitchen/k${getRandomIntInclusive(1,10)}.jpg, ${home_id}, ${order}, ${randomCaption()}\n`;
  order += 1;
  uniq_id += 1;

  //handle diningroom
  let numDR = getRandomIntInclusive(1,2);

  for (let i = 0; i < numDR; i++) {
    str += `${uniq_id}, https://s3-us-west-1.amazonaws.com/homesnap/dining/d${getRandomIntInclusive(1,10)}.jpg, ${home_id}, ${order}, ${randomCaption()}\n`;
    order += 1;
    uniq_id += 1;
  }

  //handle outer
  str += `${uniq_id}, https://s3-us-west-1.amazonaws.com/homesnap/outer/o${getRandomIntInclusive(1,10)}.jpg, ${home_id}, ${order}, ${randomCaption()}\n`;

  uniq_id += 1;
}


  

fs.writeFile('database/data.csv', str, (err) => {
  if (err) {
    console.log('Error writing to file');
    return;
  }
  console.log('Data saved');
})
