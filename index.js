const express=require('express');
const {connect}=require('./connect');
const app=express();
const urlRoute=require('./Routes/url');
const Url=require('./models/url');
const port=8080;
connect("mongodb://localhostqqqqqqqqqq:27017/short-url").then(console.log("connected"));
app.use(express.json);
app.get('/:shortId',async (req,res)=>{
    const shortId=req.params.shortId;
   const entry= await Url.findOneAndUpdate({
        shortId
    },{$push:{
        visit:{
            timestamp:Date.now(),
        }
    }})
    res.redirect(entry.redirectUrl)
})
app.use("/url",urlRoute)
app.listen(port,()=>{
    console.log("start");
})
