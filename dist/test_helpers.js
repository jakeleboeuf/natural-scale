"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpreadScale = function (Step, unit) {
    var results = [];
    for (var index = 0; index < 8; index++) {
        var value = index + 1;
        var step = unit ? Step(value, unit) : Step(value);
        results[index] = step;
    }
    return results;
};
exports.default = {};
