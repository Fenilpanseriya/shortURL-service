const {shortid}=require('shortid');
const url=require('../models/url'
)
async function generateUrl(req,res){
    const shortId=shortid(8);
    const body=req.body;
    if(!body.url){
        return res.status(401).json("url is required");
    }
    await url.create({
        shortId:shortId,
        redirectUrl:body,
        visit:[],
    
    });
    return res.json({id:shortId});

}
async function analysis(req,res){
    const shortId=req.params.shortId;   
    const result=await Url.findOne({shortId});
    return res.json(
        { totalClicks : result.visit.length},
        {analysis:result.visit}

            
    )

}
module.exports={
    generateUrl,
    analysis
}