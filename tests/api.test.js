// // Import thư viện cần thiết
// import('chai').then(chai => {
//     // Sử dụng Chai ở đây
// }).catch(err => {
//     console.error(err);
// });
// const chaiHttp = require('chai-http');
// const app = require('../index'); // Thay đổi đường dẫn tới ứng dụng của bạn

// // Sử dụng plugin chaiHttp
// chai.use(chaiHttp);
// //
// // Khai báo các biến cần thiết
// const expect = chai.expect;

// // Mô tả các kiểm thử
// describe('API Tests', () => {
//     // Kiểm thử cho API endpoint GET /api/data
//     describe('GET /v1/grade', () => {
//         it('should return status 200 and an array of data', (done) => {
//             chai.request(app)
//                 .get('/v1/grade')
//                 .end((err, res) => {
//                     expect(res).to.have.status(200);
//                     expect(res.body).to.be.an('array');
//                     done();
//                 });
//         });
//     });

//     // Kiểm thử cho API endpoint POST /api/data
//     describe('POST /v1/grade', () => {
//         it('should return status 200 and a success message', (done) => {
//             chai.request(app)
//                 .post('/v1/grade')
//                 .send({ key: 'value' }) // Gửi dữ liệu POST
//                 .end((err, res) => {
//                     expect(res).to.have.status(200);
//                     expect(res.body).to.have.property('message').to.equal('Data saved successfully');
//                     done();
//                 });
//         });
//     });
// });
