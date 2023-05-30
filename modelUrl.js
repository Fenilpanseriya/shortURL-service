const mongoose=require('mongoose');
const schema= new mongoose.Schema({
    shortId:{
        type:String,
        requried:true,
        unique:true
    },
    redirectUrl:{
        type:String,
        requried:true,
    },
    visit:[{time:{type:Number}}],
  },
 {timestamp:true}
);

const url=mongoose.model("url",schema);
module.exports=url;