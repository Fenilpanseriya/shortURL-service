const express=require("express");
const {generateUrl,analysis}=require('../controllers/url');
const router=express.Router();

router.post("/",generateUrl);
router.get('/analysis/:shortId');
module.exports=router;

