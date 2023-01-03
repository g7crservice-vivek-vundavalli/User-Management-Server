"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    userId: Number,
    userName: String,
    userEmail: String,
    userGender: String,
    userState: String,
    userCity: String,
    userPhoneNumber: Number,
    userIsActive: Number
});
const UserDetailModel = (0, mongoose_1.model)('userdetails', userSchema);
exports.default = UserDetailModel;
