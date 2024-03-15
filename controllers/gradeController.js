const { grade } = require("../models/model");

const gradeController = {
 //ADD grade
  addgrade: async (req, res) => {
    try {
      const newgrade = new grade(req.body);
      const savedgrade = await newgrade.save();
      res.status(200).json(savedgrade);
    } catch (err) {
      res.status(500).json(err); //HTTP REQUEST CODE
    }
  },

  //GET ALL AUTHORS
  getAllgrades: async (req, res) => {
    try {
      const grades = await grade.find();
      res.status(200).json(grades);
    } catch (err) {
      res.status(500).json(err);
    }

  },

  //GET AN AUTHOR
  getgradeById: async (req, res) => {
    try {
      const grades = await grade.findById(req.params.id);
      res.status(200).json(grades);
    } catch (err) {
      res.status(500).json(err);
    }
  },

 //UPDATE 
updategrade: async (req, res) => {
    try {
      const grades = await grade.findById(req.params.id);
      await grades.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

//   //DELETE AUTHOR
  delete: async (req, res) => {
    try {
      await grade.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
  } catch (err) {
      res.status(500).json(err);
  }
  },
};


module.exports = gradeController;