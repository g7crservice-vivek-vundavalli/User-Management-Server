import { Schema,model } from "mongoose";

const userStateSchema = new Schema({
    id: Number,
    state: String
})

const StateModel = model('states', userStateSchema)
export default StateModel
