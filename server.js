const express = require("express");
const connectDB = require('./config/db');
const session = require("express-session");
const cookieParser = require("cookie-parser");


const app = express();
// connect to database by server
connectDB();


//live session
app.use(cookieParser());


// init middleware

//test fot github notif

app.use(express.json({extended: false}));   //allow us to get data in req.body

app.use( function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth-token");
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
app.use('/user/dashboard', require('./routes/api/dashboard'));
app.use('/add', require('./routes/api/add'));
app.use('/modify', require('./routes/api/modify'));
app.use ('/search', require('./routes/api/search'));
app.use('/store', require('./routes/api/storecourse'));
app.use('/minicourse', require('./routes/api/miniCourse'));




PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port : ${PORT}`));
