"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Approutes = void 0;
const express_1 = require("express");
const di_tokens_1 = __importDefault(require("../constants/di-tokens"));
const inversify_1 = require("inversify");
require("reflect-metadata");
const USER_BASE_URL = process.env.USER_BASE_URL || '/api/userdetails';
let Approutes = class Approutes {
    constructor(UsersController) {
        this.UsersController = UsersController;
    }
    userRoutes() {
        const routerMiddleware = (0, express_1.Router)();
        routerMiddleware.get(`${USER_BASE_URL}/state`, this.UsersController.getStateName);
        routerMiddleware.get(USER_BASE_URL, this.UsersController.getAllAction);
        routerMiddleware.get(`${USER_BASE_URL}/:id`, this.UsersController.getAction);
        routerMiddleware.post(USER_BASE_URL, this.UsersController.postAction);
        routerMiddleware.put(`${USER_BASE_URL}/update/:id`, this.UsersController.putAction);
        routerMiddleware.delete(`${USER_BASE_URL}/:id`, this.UsersController.deleteAction);
        routerMiddleware.get(`${USER_BASE_URL}/city/:stateName`, this.UsersController.getCityName);
        // routerMiddleware.get(`${USER_BASE_URL}/hobbies/:id`, this.UsersController.getHobbies)
        return routerMiddleware;
    }
};
Approutes = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(di_tokens_1.default.USER_CONTROLLER_TOKEN)),
    __metadata("design:paramtypes", [Object])
], Approutes);
exports.Approutes = Approutes;
