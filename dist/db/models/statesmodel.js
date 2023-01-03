"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userStateSchema = new mongoose_1.Schema({
    id: Number,
    state: String
});
const StateModel = (0, mongoose_1.model)('states', userStateSchema);
exports.default = StateModel;
