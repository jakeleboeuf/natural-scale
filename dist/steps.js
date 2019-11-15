"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStep = function (_a) {
    var step = _a.step, interval = _a.interval, unit = _a.unit, base = _a.base;
    var lowPower = 5 - step;
    var highPower = step - 4;
    var result = step <= 3
        ? interval / Math.pow(interval, lowPower)
        : Math.pow(interval, highPower);
    // Round to 3 decimal places
    var value = Number((result).toFixed(3));
    if (base) {
        value *= base;
    }
    return unit && unit !== 'none' ? (value += unit) : value;
};
exports.getSteps = function (_a) {
    var interval = _a.interval, unit = _a.unit, base = _a.base;
    var stepsArray = [];
    for (var index = 0; index < 8; index++) {
        var step = index + 1;
        stepsArray.push(exports.getStep({ step: step, interval: interval, unit: unit, base: base }));
    }
    return stepsArray;
};
