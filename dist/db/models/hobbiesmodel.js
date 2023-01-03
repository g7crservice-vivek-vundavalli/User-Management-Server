"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const hobbiesSchema = new mongoose_1.Schema({
    userId: Number,
    HobbyId: Number,
    Hobbies: String,
});
const HobbiesModel = (0, mongoose_1.model)('UserHobbies', hobbiesSchema);
exports.default = HobbiesModel;
