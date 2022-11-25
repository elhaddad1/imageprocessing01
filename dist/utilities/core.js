"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newImageName = exports.imagesPath = void 0;
var path_1 = __importDefault(require("path"));
var imagesPath = function () {
    return {
        fullImagePath: path_1.default.join(__dirname, '../../images/full/'),
        resizedImagePath: path_1.default.join(__dirname, '../../images/resized_images/'),
    };
};
exports.imagesPath = imagesPath;
var newImageName = function (file, width, height) {
    return width + 'W_' + height + 'H_' + file;
};
exports.newImageName = newImageName;
