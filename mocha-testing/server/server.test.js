const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('Server', () => {
  it('should return hello world response', (done) => {
    request(app)
      .get('/')
      .expect(404)
      .expect((res) => {
        expect(res.body).toInclude({
          name: 'Todo app v1.0'
        })
      })
      .end(done);
  })

  // make a new test
  // assert status code 200
  //  assert the array includes me object in array
  it('should include me as an object', (done) => {
    request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body).toInclude({
          name: 'Joe',
          age: 23
        })
      }).
      end(done);
  })
})
