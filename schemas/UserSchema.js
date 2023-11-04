const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    FirstName: {type: String, require: true, trim: true},
    LastName:{type:String, required: true, trim: true},
    username:{type: String, required: true, trim:true, unique: true},
    email:{type: String, required: true, trim:true, unique: true},
    password:{type: String, required: true,},
    profilePic:{type: String, default:"/images/profilePic.jpeg"},
    likes:[{ type: Schema.Types.ObjectId, ref: 'Post' }]   
},{timestamps: true });

var User = mongoose.model('User', UserSchema);
module.exports = User;