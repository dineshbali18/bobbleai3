const mongoose=require('mongoose')

const userScoresSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    score:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
})

module.exports=mongoose.model("UserScore",userScoresSchema);