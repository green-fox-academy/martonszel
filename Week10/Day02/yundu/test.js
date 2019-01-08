const test = require('tape');
const request = require('supertest');
const app = require('./routes');

test('yundu endpoint', (t) => {
    request(app)
      .get('/yundu?distance=100&time=10')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) throw err;
        t.same(res.body, {
        "distance": '100',
        "time": '10',
        "speed": 10})
        t.end();
      });
  });

  test('yundu endpoint', (t) => {
    request(app)
      .get('/yundu?distance=100&time=0')
      .expect(210)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) throw err;
        t.same(res.body, {error: "Dájé"})
        t.end();
      });
  });

  