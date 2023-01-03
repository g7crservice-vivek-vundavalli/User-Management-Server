import { Schema, model } from "mongoose";

const userSchema = new Schema({
    userId: Number,
    userName : String,
    userEmail: String,
    userGender : String,
    userState : String,
    userCity : String,
    userPhoneNumber : Number,
    userIsActive : Number
})

const UserDetailModel = model('userdetails', userSchema)
export default UserDetailModel