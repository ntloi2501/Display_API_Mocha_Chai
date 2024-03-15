// apiController.js
const connectDB = require('../config/db')
const path = require('path');
const { grade } = require("../models/model");

const { getAllStudent } = require('../services/CRUDService')

const getHomepage = async (req, res) => {
    try {
        // Sử dụng Model để tìm tất cả các bản ghi trong collection "grades"
        // Render trang "home.ejs" và chuyển dữ liệu tới template
        const results = await getAllStudent()
        return res.render('home.ejs', { listStudent: results });
    } catch (err) {
        console.error("Lỗi khi truy vấn dữ liệu:", err);
        return res.status(500).send("Đã xảy ra lỗi trong quá trình truy vấn dữ liệu");
    }
};
const getCreate = (req, res) => {
    res.render('create.ejs')
}
const postAdd = async (req, res) => {
    try {
        // Trích xuất dữ liệu từ req.body
        const { studentId, courseId, grade } = req.body;
        // Tạo một bản ghi mới sử dụng Model của Mongoose
        const newgrade = new grade({
            studentId: studentId,
            courseId: courseId,
            grade: grade
        });
        // Lưu bản ghi vào cơ sở dữ liệu
        await newgrade.save();
        // Trả về kết quả thành công
        res.send(`Add new Successful !`);
    } catch (err) {
        // Trả về lỗi nếu có bất kỳ lỗi nào xảy ra
        console.error("Lỗi khi thêm mới bản ghi:", err);
        return res.status(500).send("Đã xảy ra lỗi trong quá trình thêm mới bản ghi");
    }
};
const getSearch = async (req, res) => {
    const studentId = req.query.studentId;
    const courseId = req.query.courseId;
    try {
        // Truy vấn dữ liệu từ MongoDB
        const results = await grade.find({ studentId: studentId, courseId: courseId });
        console.log(">>>check rows:", results)
        // Kiểm tra kết quả trả về
        let sv = results && results.length > 0 ? results[0] : {};
        // Render trang web với dữ liệu đã lấy được
        res.render('search.ejs', { svEdit: sv });
    } 
    catch (err) {
        // Xử lý lỗi nếu có
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

const getUpdate = async (req, res) => {
    const svId = req.params.id;
    try {
        // Sử dụng Model để tìm bản ghi với id tương ứng
        const sv = await grade.findByIdAndUpdate(svId);
        console.log(">>> req.params:: ", req.params, svId);
        // Render trang "update.ejs" và chuyển dữ liệu tới template
        res.render('update.ejs', { svEdit: sv });
    } catch (err) {
        console.error("Lỗi khi truy vấn dữ liệu:", err);
        return res.status(500).send("Đã xảy ra lỗi trong quá trình truy vấn dữ liệu");
    }
};

const postUpdate = async (req, res) => {
    let grade = req.body.grade
    let svId = req.body.svId
    try {
        // Sử dụng Model để tìm và cập nhật bản ghi dựa trên svId
        const updatedGrade = await grade.findByIdAndUpdate(svId, { grade }, { new: true });
        // Kiểm tra xem bản ghi có được cập nhật thành công hay không
        if (!updatedGrade) {
            return res.status(404).json({ error: "Không tìm thấy bản ghi" });
        }
        // Trả về kết quả thành công
        return res.status(200).json("Updated successfully!");
    } catch (err) {
        // Trả về lỗi nếu có bất kỳ lỗi nào xảy ra
        return res.status(500).json(err);
    }
};
const postDelete = async (req, res) => {
    const svId = req.params.id;
    try {
        // Sử dụng Model để tìm bản ghi với _id tương ứng
        const sv = await grade.findById(svId);
        res.render('delete.ejs', { svEdit: sv });
    } catch (err) {
        console.error("Lỗi khi truy vấn dữ liệu:", err);
        return res.status(500).send("Đã xảy ra lỗi trong quá trình truy vấn dữ liệu");
    }
};
const postRemoveStudent = async (req, res) => {
    try {
        await grade.updateMany({ grade: req.params.id }, { grade: null });
        await grade.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted successfully!");
      } catch (err) {
        res.status(500).json(err);
      }
};

//
module.exports = { getCreate, postAdd, getSearch, getHomepage,
     getAllStudent, getUpdate, postUpdate, postDelete, postRemoveStudent
}
