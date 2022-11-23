"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = void 0;
var sharp_1 = __importDefault(require("sharp"));
var fs_1 = __importDefault(require("fs"));
function resizeImage(imgPath, newPath, width, height) {
    return new Promise(function (resolve) {
        try {
            if (fs_1.default.existsSync(imgPath)) {
                //validate if image already processed before
                if (fs_1.default.existsSync(newPath)) {
                    return resolve(newPath);
                }
                var readStream = fs_1.default.createReadStream(imgPath);
                var writeStream = fs_1.default.createWriteStream(newPath);
                var resizeSharp = (0, sharp_1.default)();
                resizeSharp = resizeSharp
                    .resize(width, height)
                    .on('info', function () { return console.log('Image Resized..'); });
                readStream.pipe(resizeSharp).pipe(writeStream);
                setTimeout(function () { return resolve(newPath); }, 500);
            }
            else {
                return resolve('file not found');
            }
        }
        catch (error) {
            Promise.reject(typeof error === 'string' ? error : error);
            console.log(error);
        }
    });
}
exports.resizeImage = resizeImage;
