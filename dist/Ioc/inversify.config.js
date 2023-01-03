"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const di_tokens_1 = __importDefault(require("../constants/di-tokens"));
const user_mongo_bo_1 = require("../bo/user-mongo-bo");
const user_controller_1 = require("../controller/user-controller");
const diContainer = new inversify_1.Container();
diContainer.bind(di_tokens_1.default.USER_BO_TOKEN).to(user_mongo_bo_1.UsersBo);
diContainer.bind(di_tokens_1.default.USER_CONTROLLER_TOKEN).to(user_controller_1.UsersController);
exports.default = diContainer;
