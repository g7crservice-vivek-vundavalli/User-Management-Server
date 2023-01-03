"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.UsersBo = void 0;
const inversify_1 = require("inversify");
const userdetailsmodel_1 = __importDefault(require("../db/models/userdetailsmodel"));
require("reflect-metadata");
const statesmodel_1 = __importDefault(require("../db/models/statesmodel"));
const citymodels_1 = __importDefault(require("../db/models/citymodels"));
const hobbiesmodel_1 = __importDefault(require("../db/models/hobbiesmodel"));
let UsersBo = class UsersBo {
    add(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield userdetailsmodel_1.default.find();
                let id = 1;
                if (users.length > 0) {
                    const lastRecord = users[users.length - 1];
                    if (lastRecord.userId) {
                        id = lastRecord.userId + 1;
                    }
                }
                data.userId = id;
                yield userdetailsmodel_1.default.create(Object.assign({}, data));
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    update(data, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(data);
                const found = yield userdetailsmodel_1.default.findOne({ userId: id });
                const hobby = yield hobbiesmodel_1.default.findOne({ userId: id });
                console.log(found);
                if (found) {
                    found.userId = id;
                    found.userPhoneNumber = data.userPhoneNumber;
                    found.userCity = data.userCity;
                    if (hobby) {
                        console.log(`HI ${data.userHobbies}`);
                        hobby.Hobbies = data.userHobbies;
                    }
                    // const hobbie = data.userHobbies
                    // const update = await HobbiesModel.updateOne({userId:id},{userId:id, HobbyId:id,Hobbies:hobbie})
                    // if(update.modifiedCount > 0){
                    //     return hobby as any }
                    const updated = yield userdetailsmodel_1.default.updateOne({ userId: id }, Object.assign({}, data));
                    if (updated.modifiedCount > 0)
                        return found;
                    else
                        throw new Error(`the user with id:${id} could not be updated`);
                }
                else
                    throw new Error(`the user with id:${id} does not exist`);
            }
            catch (error) {
                throw error;
            }
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const found = yield userdetailsmodel_1.default.findOne({ userId: id });
                if (found) {
                    const deleted = yield userdetailsmodel_1.default.deleteOne({ userId: id });
                    if (deleted.deletedCount > 0)
                        return found;
                    else
                        throw new Error(`the user with id:${id} could not be deleted`);
                }
                else
                    throw new Error(`the user with id:${id} does not exist`);
            }
            catch (error) {
                throw error;
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield userdetailsmodel_1.default.find();
                if (users.length > 0) {
                    return users;
                }
                else
                    throw new Error(`no record found`);
            }
            catch (error) {
                throw error;
            }
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const found = yield userdetailsmodel_1.default.findOne({ userId: id });
                // console.log(found)
                if (found) {
                    const u = found;
                    console.log(u);
                    return u;
                }
                else
                    throw new Error(`the user with id:${id} does not exist`);
            }
            catch (error) {
                throw error;
            }
        });
    }
    getstate() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const found = yield statesmodel_1.default.find();
                console.log(found);
                if (found) {
                    const u = found;
                    console.log(u);
                    return u;
                }
                else
                    throw new Error(`No state data found`);
            }
            catch (error) {
                throw error;
            }
        });
    }
    getcity(stateName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const states = yield statesmodel_1.default.findOne({ state: stateName });
                const sid = states === null || states === void 0 ? void 0 : states.id;
                const found = yield citymodels_1.default.findOne({ stateID: sid });
                if (found) {
                    const data = found;
                    console.log(found);
                    return data;
                }
                else
                    throw new Error(`City does not exist`);
            }
            catch (error) {
                throw error;
            }
        });
    }
};
UsersBo = __decorate([
    (0, inversify_1.injectable)()
], UsersBo);
exports.UsersBo = UsersBo;
