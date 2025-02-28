import mongoose from "mongoose";

//scheema eka hdnwa
const userSchema = new mongoose.Schema({
    email :{
        type : String,
        required : true,
        unique: true  //ema email ekakin eka user kenai inn oone
    },
    password : {
        type : String,
        required : true
    },
    role:{
        type : String,
        required : true,
        default : "customer"
    },
    firstName : {
        type : String,
        required: true
    },
    lastName : {
        type : String,
        required: true
    },
    address : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    }
})


// model eken wenne DB eke thiyenne collection ekai backend eki connect krnne meeka
const User = mongoose.model("User", userSchema)

export default User;