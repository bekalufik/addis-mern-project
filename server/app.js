require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const songRouter = require('./routes/songs')
const statRouter = require('./routes/stats')
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors({
  origin: ["http://localhost:3000/","https://addismernproject.netflify.app/"],
}));
app.use(express.json())
app.use('/songs', songRouter)
app.use('/stats', statRouter)

// connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


// start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
