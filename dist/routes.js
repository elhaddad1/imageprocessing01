"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var resizemagecontroller_1 = require("./controllers/resizemagecontroller");
var _routes = [
    ['/', resizemagecontroller_1.ResizeImageController],
];
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var routes = function (app) {
    _routes.forEach(function (route) {
        debugger;
        var url = route[0], controller = route[1];
        app.use(url, controller);
    });
};
exports.routes = routes;
