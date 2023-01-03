import { Schema, model } from "mongoose";

const hobbiesSchema = new Schema({
    userId : Number,
    HobbyId: Number,
    Hobbies: String,
})

const HobbiesModel = model('UserHobbies',hobbiesSchema)
export default HobbiesModel