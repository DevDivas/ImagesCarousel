const request = require('supertest');
const app = require('../server/index.js');
const db = require('../database/index.js');

// Check to see if a GET request is sent upon visiting root path
describe('Test the root path', () => {
  test('should response a GET method', () => {
    return request(app).get('/').then((response) => { 
      expect(response.statusCode).toBe(200);
    });
  });
});

// Check to see if response exisits for visiting room page 
describe('Test response data type', () => {
  test('should respond with json objects', () => {
    return request(app).get('/room/12').then((response) => {
      expect(response).toBeDefined();
    });
  });
});

// Check to see if the correct room is served when specified
// describe('Test response unique room', () => {
//   test('should respond with unique room object', () => {
//     const expected = {"id":69,"url":"https://s3-us-west-1.amazonaws.com/homesnap/exterior/h12.jpg","home_id":12,"order":1,"caption":"''"};
//     return request(app).get('/room/12').then((response) => {
//       expect(response).toContain(expected);
//     });
//   });
// });
