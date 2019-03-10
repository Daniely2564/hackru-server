const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    model:{type:String,required:true},
    modelId:{type:String,required:true},
    longitude:{type:Number,required:true},
    latitude:{type:Number,required:true},
    locked:{
        type:Boolean,
        default:true,
    },
    borrowed:{
        type:Boolean,
        default:false,
    },
    user:{
        type:String,
        default:'default'
    }
})

module.exports = mongoose.model('Car', CarSchema)

//MONGODB_SERVER=mongodb://root:asdfasdf1@ds163905.mlab.com:63905/hackru