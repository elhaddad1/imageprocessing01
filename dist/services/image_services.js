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
        setTimeout(function () {
            try {
                if (fs_1.default.existsSync(imgPath)) {
                    var readStream = fs_1.default.createReadStream(imgPath);
                    var writeStream = fs_1.default.createWriteStream(process.cwd() + newPath);
                    var resizeSharp = (0, sharp_1.default)();
                    resizeSharp = resizeSharp
                        .resize(width, height)
                        .on('info', function () { return console.log('Image Resized..'); });
                    readStream.pipe(resizeSharp).pipe(writeStream);
                    return resolve(process.cwd() + newPath);
                }
                else {
                    return resolve('file not found');
                }
            }
            catch (error) {
                Promise.reject(typeof error === 'string' ? error : error);
                console.log(error);
            }
        }, 1000);
    });
}
exports.resizeImage = resizeImage;
