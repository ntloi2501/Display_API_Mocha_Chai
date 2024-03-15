const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
// const configViewEngine = require('./config/ViewEngine')
const gradeController = require("./routes/grade");
const connectDB = require('./config/db');
const apiRoutes = require('./routes/apiRoute');
const configViewEngine = require('./config/ViewEngine')

connectDB();

//
app.use(bodyParser.json());
//
dotenv.config();

// Sử dụng định tuyến từ tệp apiRoute.js
app.use('/', apiRoutes);
configViewEngine(app)

//
app.use(bodyParser.json({limit:"50mb"}));
app.use(helmet());
app.use(cors());
app.use(morgan("common"));
//ROUTES
app.get('/api/welcome', (req, res) => {
  res.status(200).send( {message: "Welcome to the MEN-REST-API"})
})
app.get('/', (req, res) => {
  res.render('home.ejs')
})
app.use("/v1/grade", gradeController);

// Trong file index.js hoặc file route của bạn
const PORT = process.env.PORT || 5000
app.listen(PORT, function() {
  console.log('server is running on port:' + PORT) 
})

// app.listen(process.env.PORT || 5000, () => {
//   try {
//   console.log("Server is running...");
//   }catch (err) {
//     console.error("Error fetching data:", err);
//     res.status(500).json(err);
//   }
// });
