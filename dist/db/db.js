"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connectToDb = (connectionString, dbName) => {
    (0, mongoose_1.connect)(`${connectionString}/${dbName}`, (err) => {
        if (err)
            console.log(err.message);
        else
            console.log('connected to db');
    });
};
exports.default = connectToDb;
