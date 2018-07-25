const request = require('supertest');
const app = require('../server/index.js');
const db = require('../database/index.js');

// Check to see if a GET request is sent upon visiting room page
describe('Test the room path', () => {
  test('should response to GET method', () => {
    return request(app).get('/rooms/12').then((response) => { 
      expect(response.statusCode).toBe(200);
    });
  });
});

// Check to see if the correct room is served when specified
describe('Test fetching room pics', () => {
  test('should have the same unique exterior object', () => {
    db.fetchRoomPics(12, (err, docs) => {
      if (err) {
        console.log('error during testing');
        return;
      }
      const expected = {"id":69,"url":"https://s3-us-west-1.amazonaws.com/homesnap/exterior/h12.jpg","home_id":12,"order":1,"caption":"''"};
      expect(JSON.stringify(docs[0])).toEqual(JSON.stringify(expected));
    });
  });
});
