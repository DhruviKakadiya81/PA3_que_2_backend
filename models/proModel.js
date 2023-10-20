const mongoose=require('mongoose');

const proModel=new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    desc:{
        type:String
    }
})

module.exports=mongoose.model('productTB',proModel);