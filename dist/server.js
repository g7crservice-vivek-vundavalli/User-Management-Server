"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const express_1 = __importStar(require("express"));
const di_tokens_1 = __importDefault(require("./constants/di-tokens"));
const db_1 = __importDefault(require("./db/db"));
const inversify_config_1 = __importDefault(require("./Ioc/inversify.config"));
const approutes_1 = require("./routes/approutes");
(0, dotenv_1.config)();
const PORT = process.env.PORT || 4000;
const USER_BASE_URL = process.env.USER_BASE_URL || '/api/userdetails';
const MONGODB_CONSTR = "mongodb+srv://VivekVundavalli:9182533500@cluster0.mqqehcn.mongodb.net/?retryWrites=true&w=majority";
const MONGODB_DATABASE = process.env.MONGODB_DATABASE || 'mydb';
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, express_1.json)());
const UsersControllerObj = inversify_config_1.default.get(di_tokens_1.default.USER_CONTROLLER_TOKEN);
const appRoutes = new approutes_1.Approutes(UsersControllerObj);
app.use(appRoutes.userRoutes());
app.listen(PORT, () => {
    (0, db_1.default)(MONGODB_CONSTR, MONGODB_DATABASE);
    console.log(`ecommerce server is running at http://localhost:${PORT}${USER_BASE_URL}`);
});
