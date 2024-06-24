const express= require("express");
const app = express();

const userRoutes = require("../server/routes/User");


const database = require("../server/config/database");
const cookieParser = require("cookie-parser");

const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;


database.dbConnect();

app.use(express.json());
app.use(cookieParser());



app.use("/api/v1/auth",userRoutes);


app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"your server is up and running"
    });
});


app.listen(PORT,()=>{
    console.log("App is running at port 4000")
})










