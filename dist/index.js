"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultRatios = __importStar(require("./constants"));
var steps_1 = require("./steps");
exports.Ratio = DefaultRatios;
exports.Scale = function (interval, unit) {
    if (interval === void 0) { interval = exports.Ratio.MINOR_THIRD; }
    return function (step, unitOverride) {
        if (step === void 0) { step = 0; }
        var unitValue = unitOverride || unit;
        return step
            ? steps_1.getStep({ step: step, interval: interval, unit: unitValue })
            : steps_1.getSteps({ interval: interval, unit: unitOverride });
    };
};
exports.default = { Scale: exports.Scale, Ratio: exports.Ratio };
