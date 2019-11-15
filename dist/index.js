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
exports.Scale = function (_a) {
    var _b = _a.interval, interval = _b === void 0 ? exports.Ratio.MINOR_THIRD : _b, unit = _a.unit, base = _a.base;
    return function (step, unitOverride) {
        if (step === void 0) { step = 0; }
        var unitValue = unitOverride || unit;
        return step
            ? steps_1.getStep({ step: step, interval: interval, unit: unitValue, base: base })
            : steps_1.getSteps({ interval: interval, unit: unitOverride, base: base });
    };
};
exports.default = { Scale: exports.Scale, Ratio: exports.Ratio };
