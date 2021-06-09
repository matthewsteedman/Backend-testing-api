const request = require('supertest');
const knex = require('../db/knex');
const app = require('../app')
const expect = require('chai').expect

const fixures = require('../test/fixtures')


describe('CRUD Stickers',() => {
    before((done) => {
        //run migrations 
        knex.migrate.latest()
        done()
            .then(() =>  {
                //run seeds
                return knex.seed.run();
        })  
        .then(() => done());
    }); 
    it('Lists all Records', (done) => {
        request(app)
            .get('/api/v1/stickers')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done())
            .then((response) => {
                expect(response.body).to.be.a('array')
                expect(response.body).to.deep.equal(fixures.stickers)
                console.log("i am happy")
                console.log(response.body.json);
            })
    })
    it('Lists one record by id', (done) => {
        request(app)
            .get('/api/v1/stickers/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done())
            .then((response) => {
                expect(response.body).to.be.a('object')
                expect(response.body).to.deep.equal(fixures.stickers[0])
                console.log("i am happy")
                console.log(response.body.json);
            })
    })
}); 
