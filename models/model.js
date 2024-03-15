const mongoose = require("mongoose");

const connectDB = require('../config/db')
const gradeSchema = new mongoose.Schema( 
  {
    studentId: { 
      type: String
    },
    courseId: { 
      type: String
    },
    grade: { 
      type: Number
     }
}
);
//
// const booksSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   year: { type: Number, required: true },
//   pages: { type: Number, required: true, min: 1 },
//   createdAt: { type: Date, default: Date.now },    
// })

// let book = mongoose.model("books", booksSchema)
let grade = mongoose.model("grades", gradeSchema);

module.exports = { grade, connectDB };
