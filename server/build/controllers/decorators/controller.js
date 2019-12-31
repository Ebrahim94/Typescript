"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function controller(routePrefix) {
    return function (target) {
        //the class decorator takes in a constructor function
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata('path', target.prototype, key);
        }
    };
}
exports.controller = controller;
