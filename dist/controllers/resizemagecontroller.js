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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResizeImageController = void 0;
var express_1 = require("express");
var imgService = __importStar(require("../services/image_services"));
var core_1 = require("../utilities/core");
var core_validation_1 = require("../utilities/core_validation");
exports.ResizeImageController = (0, express_1.Router)();
exports.ResizeImageController.get('/resizeimage', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, fullImagePath, resizedImagePath, _validationMessage, width, height, imgPath, newPath, result, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = (0, core_1.imagesPath)(), fullImagePath = _a.fullImagePath, resizedImagePath = _a.resizedImagePath;
                _validationMessage = (0, core_validation_1.validateparametars)(req.query.filename, req.query.width, req.query.height);
                if (_validationMessage) {
                    res.status(400);
                    res.json({
                        message: _validationMessage,
                    });
                    return [2 /*return*/];
                }
                width = parseInt(req.query.width.replace(/\D/g, ''), 10);
                height = parseInt(req.query.height.replace(/\D/g, ''), 10);
                imgPath = (fullImagePath +
                    req.query.filename);
                newPath = (resizedImagePath +
                    (0, core_1.newImageName)(req.query.filename, width, height));
                return [4 /*yield*/, imgService.resizeImage(imgPath, newPath, width, height)];
            case 1:
                result = _b.sent();
                if (result === 'file not found') {
                    res.status(404);
                    res.json({
                        message: 'file not found',
                    });
                    return [2 /*return*/];
                }
                res.status(200);
                res.sendFile(newPath);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                Promise.reject(typeof error_1 === 'string' ? error_1 : error_1);
                console.log(error_1);
                res.status(404);
                res.json({
                    message: error_1,
                });
                return [2 /*return*/];
            case 3: return [2 /*return*/];
        }
    });
}); });
