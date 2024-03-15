const gradeController = require("../controllers/gradeController");
const { grade } = require("../models/model");

const router = require("express").Router();

//
// router.get("/searh", gradeController.getSearch)
//ADD AUTHOR
router.post("/", gradeController.addgrade);

//GET ALL AUTHORS
router.get("/", gradeController.getAllgrades);

//GET AN AUTHOR
router.get("/:id", gradeController.getgradeById);

//UPDATE AN AUTHOR
router.put("/:id", gradeController.updategrade);

// //DELETE AUTHOR
router.delete("/:id", gradeController.delete);

// router.post("/create-student", (req, res) => {
//     res.send('create a new student')
// })

//
module.exports = router;