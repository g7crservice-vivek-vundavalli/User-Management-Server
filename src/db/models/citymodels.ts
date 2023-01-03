import { Schema,model } from "mongoose";

const userCitySchema = new Schema({
    stateID: Number,
    City: [String]
})

const CityModel = model('citys', userCitySchema)
export default CityModel
