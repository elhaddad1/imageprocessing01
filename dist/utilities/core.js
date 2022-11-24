"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newImageName = exports.imagesPath = void 0;
var imagesPath = function () {
    return {
        fullImagePath: process.cwd() + '\\images\\full\\',
        resizedImagePath: process.cwd() + '\\images\\resized_images\\',
    };
};
exports.imagesPath = imagesPath;
var newImageName = function (file, width, height) {
    return width + 'W_' + height + 'H_' + file;
};
exports.newImageName = newImageName;
