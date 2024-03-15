// apiRoute.js
const express = require('express');

const { getCreate, postAdd, getSearch, getHomepage, getUpdate, postUpdate, postDelete, postRemoveStudent } = require('../controllers/apiController')
const { grade } = require('../models/model')
const router = express.Router();

router.get('/', getHomepage)
router.get('/create', getCreate);
router.get('/search', getSearch)
router.post("/", postAdd);
router.get('/update/:id', getUpdate)

router.post ('/update', postUpdate)

router.post ('/delete-student/:id', postDelete)
router.post ('/delete-student', postRemoveStudent)
module.exports = router;
