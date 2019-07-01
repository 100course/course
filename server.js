const express = require("express");
const connectDB = require('./config/db');

const app = express();
// connect to database by server
connectDB();

// init middleware

//test fot github notif

app.use(express.json({extended: false}));   //allow us to get data in req.body

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Allow-Control-Methods","GET,PUT,POST,DELETE");
   next();
});

app.get("/", (req, res) => {
   res.send("hello there!");
});

app.use("/videos", require('./routes/api/videos'));
app.use("/courses", require('./routes/api/courses'));
app.use('/user/register', require('./routes/api/register'));
app.use('/user/login', require('./routes/api/login'));

PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port : ${PORT}`));
