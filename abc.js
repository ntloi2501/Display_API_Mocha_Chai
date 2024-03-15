process.env.NODE_ENV = 'test'
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../index');
const Grade = require('../models/model');

chai.use(chaiHttp);

describe('/First Test Collection', () => {

    it('test default API welcome route...', (done) => {

        chai.request(server)
        .get('/v1/grade')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');    
            const actualVal = res.body.message;
            expect(actualVal).to.be.equal('Welcome to the MEN-REST-API');        
            done();
        });
    });


    it('should verify that we have 0 products in the DB', (done) => {
        chai.request(server)
        .get('/v1/grade')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(0);
            done();
        });
    });


    it('should POST a valid product', (done) => {
        
        let grade = {
            studentId: "Test grade",
            courseId: 100,
            grade: true
        }
        chai.request(server)
        .post('/v1/grade')
        .send(grade)
        .end((err, res) => {
            res.should.have.status(201);
            done();
        });
    });


    it('should verify that we have 1 products in the DB', (done) => {
        chai.request(server)
        .get('/v1/grade')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(1);
            done();
        });
    });







    it('should test two values....', () => {
        //actual test content in here
        let expectedVal = 10;
        let actualVal = 10;

        expect(actualVal).to.be.equal(expectedVal);
    })
})