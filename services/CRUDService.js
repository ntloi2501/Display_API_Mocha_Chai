const connectDB = require('../config/db')
const { grade } = require('../models/model')

const getAllStudent = async () => {
    const results = await grade.find({});
    return results
}

module.exports = {
    getAllStudent
}