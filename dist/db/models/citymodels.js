"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userCitySchema = new mongoose_1.Schema({
    stateID: Number,
    City: [String]
});
const CityModel = (0, mongoose_1.model)('citys', userCitySchema);
exports.default = CityModel;
