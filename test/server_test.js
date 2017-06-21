let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);
let app = require('../src/server/app');

describe('/', () => {
  it('displays the index page', (done) => {
    chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
  });
});

describe('/login', () => {
  it('displays the login page', (done) => {
    chai.request(app)
        .get('/login')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a('object');
          done();
        });
  });
});

describe('/join', () => {
  it('create a connection for the player', (done) => {
    chai.request(app)
    .post('/join')
    .field('username', 'test')
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(res).to.redirect;
      done();
    });
  });
});
