const express=require('express')

const router=express.Router()

const {addScoreToUser}=require("../controllers/userScore")

router.post("/user/add/score",addScoreToUser);

module.exports=router;