process.env.NODE_ENV = 'test'
const winston = require('winston');
const Grade = require('../models/model')
const gradeController = require("../routes/grade");
const mongoose = require('mongoose');

let chai = require('chai')

const expect = chai.expect;
const should = chai.should();

const chaiHttp = require('chai-http')
const server = require('../index')

//kích hoạt chaiHttp
chai.use(chaiHttp)
const API = 'http://localhost:5000'
//Our parent block


// describe('/First Test Collection ', () => {
//     it('test default API welcome route...', (done) => {
//        chai.request(API)
//          .get('/api/welcome')
//          .end((err, res) => {
//           res.should.have.status(200)
//           res.body.should.be.a('object')
//           console.log(res.body.message)
//           done()
//       })
//     })
//   })
//GET ALL STUDENT
// describe('/ Test Collection ', () => {
// it('Testing RESTful API GET ALL Student', (done) => {
//     console.log('>>>check getAll :')
//     chai.request(API)
//             .get('/v1/grade/')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('array');
//                 console.log(">>>checked GetAll Student")
//                 console.log('Response:', res.body); 
//                 // res.body.length.should.be.eql(18);
//                 done();
//          })
// }) 
// })
//Test POST
// describe('/ Test Post ', () => {
//     it('Testing RESTful API Post', (done) => {
//         let grades ={
//             studentId: "2000",
//             courseId: "music",
//             grade: "9.5"
//         }
//         chai.request(API)
//         .post('/v1/grade')
//         .send(grades)
//         .end((err, res) => {
//                 res.should.have.status(200);
//                 console.log('Create a new Student Successful !');
//                 console.log('Response:', res.body); 
//                 done();           
//         });
//     });
// });
//GET Student by ID
// describe('/ Test Collection ', () => {
//     it('Testing RESTful API GET Student by ID', (done) => {
//         const _id = '65f42d2005c8ccfdef1a5775'; 
//         chai.request(API)
//             .get(`/v1/grade/${_id}`) 
//             .end((err, res) => {
//                     res.should.have.status(200);
//                     res.body.should.be.a('object'); 
//                     res.body.should.have.property('_id').eql(_id);
//                     console.log('>>>check get by ID :', _id)
//                     console.log('Response:', res.body); 
//                     done(); 
//             });
//     });
// });
// //Test Update Grade
// describe('/ Test Collection ', () => {
//     it('Testing RESTful API PUT Student Grade by ID', (done) => {
//         const _id = '65f0c150dc1a89d2a1d397b3'; 
//         const newGrade = 8; 
//         console.log('>>>check Update by ID :', _id)
//         const newData = {
//             grade: newGrade 
//         };
        
//         chai.request(API)
//             .put(`/v1/grade/${_id}`)
//             .send(newData) 
//             .end((err, res) => {
               
//                     res.should.have.status(200);
//                     console.log('Update Successful !')
//                     done(); // Kết thúc kiểm thử khi không có lỗi            
//             });
//     });
// });
//DELETE BY ID
// describe('/ Test Collection ', () => {
//     it('Testing RESTful API DELETE Student by ID', (done) => {
//         const _id = '65f42d71f984cc43997c361a'; 
//         chai.request(API)
//             .delete(`/v1/grade/${_id}`)
//             .end((err, res) => {
//                     res.should.have.status(200);
//                     console.log('Delete Successful by ID: ', _id )
//                     done();
//             });
//     });
// });

 module.exports = API, gradeController, mongoose, server, should