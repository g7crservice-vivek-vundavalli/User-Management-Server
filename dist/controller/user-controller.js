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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const inversify_1 = require("inversify");
require("reflect-metadata");
const di_tokens_1 = __importDefault(require("../constants/di-tokens"));
const response_generator_1 = __importDefault(require("../utils/response-generator"));
let UsersController = class UsersController {
    constructor(bo) {
        this.bo = bo;
        this.getAction = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = Number(req.params.id);
                const user = yield this.bo.get(userId);
                const response = (0, response_generator_1.default)('found record', 200, user);
                res.send(response);
            }
            catch (error) {
                const errResponse = (0, response_generator_1.default)(error.message, 500);
                res.send(errResponse);
            }
        });
        this.getAllAction = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.bo.getAll();
                const response = (0, response_generator_1.default)('found records', 200, users);
                res.send(response);
            }
            catch (error) {
                const errResponse = (0, response_generator_1.default)(error.message, 500);
                res.send(errResponse);
            }
        });
        this.postAction = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userData = req.body;
                const added = yield this.bo.add(userData);
                const response = (0, response_generator_1.default)('added successfully', 201, added);
                res.send(response);
            }
            catch (error) {
                const errResponse = (0, response_generator_1.default)(error.message, 500);
                res.send(errResponse);
            }
        });
        this.putAction = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.params.id);
                const id = Number(req.params.id);
                const userData = req.body;
                // const userData ={
                //     userCity:String(req.body.userCity),
                //     userPhoneNumber:Number(req.body.userPhoneNumber)                
                // }
                const updated = yield this.bo.update(userData, id);
                const response = (0, response_generator_1.default)('updated record', 201, updated);
                res.send(response);
            }
            catch (error) {
                const errResponse = (0, response_generator_1.default)(error.message, 500);
                res.send(errResponse);
            }
        });
        this.deleteAction = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const deleted = yield this.bo.remove(id);
                const response = (0, response_generator_1.default)('deleted record', 201, deleted);
                res.send(response);
            }
            catch (error) {
                const errResponse = (0, response_generator_1.default)(error.message, 500);
                res.send(errResponse);
            }
        });
        this.getStateName = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const state = yield this.bo.getstate();
                const response = (0, response_generator_1.default)('found record', 200, state);
                res.send(response);
            }
            catch (error) {
                const errResponse = (0, response_generator_1.default)(error.message, 500);
                res.send(errResponse);
            }
            // console.log(res.json());
        });
        this.getCityName = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.params.id);
                const statename = req.params.stateName;
                const city = yield this.bo.getcity(statename);
                const response = (0, response_generator_1.default)('found record', 200, city);
                res.send(response);
            }
            catch (error) {
                const errResponse = (0, response_generator_1.default)(error.message, 500);
                res.send(errResponse);
            }
        });
    }
};
UsersController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(di_tokens_1.default.USER_BO_TOKEN)),
    __metadata("design:paramtypes", [Object])
], UsersController);
exports.UsersController = UsersController;
