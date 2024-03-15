// config/db.js
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to the database');
        // Thực hiện các tác vụ cần thiết sau khi kết nối thành công
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
        // Xử lý lỗi kết nối
    }
};
module.exports = connectDB;
