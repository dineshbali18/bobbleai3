const UserScore=require("../model/userScores")

exports.addScoreToUser=(req,res)=>{
    var reqName=req.params.name;
    UserScore.find({$and:[{name:reqName},{date:req.body.date}]}).exec((err,data)=>{
        if(err){
            console.log("err",err);
            return res.json("Error in finding user");
        }
        if(data.length==0){
        const score=new UserScore({
        name:req.params.name,
        score:req.body.score,
        date:req.body.date
        })
    score.save((err,data)=>{
        if(err){
            console.log(err);
            return res.json("Error in adding Score")
        }
        return res.json("User saved")
    })
        }
        if(data.length>0){
            UserScore.findOneAndUpdate({name:req.params.name},{$inc:{'score':req.body.score}}).then(()=>{
                return res.json("Data got updated..!")
            }).catch((err)=>{
                console.log(err);
                return res.json("Error in update")
            })
        }
    })
}

exports.getTopPlayersByDate=(req,res)=>{
    var dateindb=req.params.date+"T00:00:00.000+00:00";
    UserScore.find({date:dateindb}).sort({score:"desc"}).exec((err,data)=>{
        if(err){
            return res.json("No Users Found in LeaderBoard");
        }
        return res.json(data);
    })
}