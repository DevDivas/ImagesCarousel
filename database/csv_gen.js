const fs = require('fs');

// helper function
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

// caption generator
const adjectives = ['', 'Spacious ~~', 'Clean ~', 'Tidy ~', 'Brand new !', 'The perfect getaway =)', 'Bright', 'Sunny', 'Recently renovated !', 'New fixtures !', 'Original', 'Just like home =)', 'Comfort at its best', 'Pet-friendly ~', 'Air-conditioned'];
function randomCaption() {
  return adjectives[getRandomIntInclusive(0, adjectives.length - 1)];
}

// initialize primary key
let uniqId = 1;
let str = '';

for (let homeId = 1; homeId <= 100; homeId += 1) {
  // handle exterior
  let order = 1;
  str += `${uniqId}, https://s3-us-west-1.amazonaws.com/homesnap/exterior/h${homeId}.jpg, ${homeId}, ${order}, ''\n`;
  order += 1;
  uniqId += 1;

  // handle bedroom
  const numBR = getRandomIntInclusive(1, 3);
  for (let i = 0; i < numBR; i += 1) {
    str += `${uniqId}, https://s3-us-west-1.amazonaws.com/homesnap/bedroom/b${getRandomIntInclusive(1,10)}.jpg, ${homeId}, ${order}, ${randomCaption()}\n`;
    order += 1;
    uniqId += 1;
  }

  // handle kitchen
  const numKT = getRandomIntInclusive(1, 2);
  for (let i = 0; i < numKT; i += 1) {
    str += `${uniqId}, https://s3-us-west-1.amazonaws.com/homesnap/kitchen/k${getRandomIntInclusive(1,10)}.jpg, ${homeId}, ${order}, ${randomCaption()}\n`;
    order += 1;
    uniqId += 1;
  }

  // handle diningroom
  const numDR = getRandomIntInclusive(1, 3);
  for (let i = 0; i < numDR; i += 1) {
    str += `${uniqId}, https://s3-us-west-1.amazonaws.com/homesnap/dining/d${getRandomIntInclusive(1,10)}.jpg, ${homeId}, ${order}, ${randomCaption()}\n`;
    order += 1;
    uniqId += 1;
  }

  // handle outer
  str += `${uniqId}, https://s3-us-west-1.amazonaws.com/homesnap/outer/o${getRandomIntInclusive(1,10)}.jpg, ${homeId}, ${order}, ${randomCaption()}\n`;
  uniqId += 1;
}

// write CSV file
fs.writeFile('database/data.csv', str, (err) => {
  if (err) {
    console.log('Error writing to file');
    return;
  }
  console.log('Data saved');
});
