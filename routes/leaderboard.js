const express=require('express')
const {getTopPlayersByDate}=require('../controllers/userScore')
const router=express.Router()

router.get("/leaderboard/:date",getTopPlayersByDate)

module.exports=router;