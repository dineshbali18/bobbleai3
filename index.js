const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const mongoose=require('mongoose')


const UserScore=require("./routes/userScore")
const LeaderBoard=require("./routes/leaderboard")


mongoose.connect("mongodb+srv://Bali:12345@cluster0.izzcpty.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log("ERROR in connecting DB",err);
})


const app=express();

app.use(bodyParser.json())
app.use(cors())

app.use("/api",UserScore);
app.use("/api",LeaderBoard);




var PORT=5555;

app.listen(PORT,(req,res)=>{
    console.log("app is up and running..")
})