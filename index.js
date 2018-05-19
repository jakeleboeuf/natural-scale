System.register("constants", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MINOR_SECOND, MAJOR_SECOND, MINOR_THIRD, MAJOR_THIRD, PERFECT_FOURTH, AUGMENTED_FOURTH, PERFECT_FIFTH, MINOR_SIXTH, MAJOR_SIXTH, MINOR_SEVENTH, MAJOR_SEVENTH, PERFECT_OCTAVE, GOLDEN_RATIO;
    return {
        setters: [],
        execute: function () {
            exports_1("MINOR_SECOND", MINOR_SECOND = 1.067);
            exports_1("MAJOR_SECOND", MAJOR_SECOND = 1.125);
            exports_1("MINOR_THIRD", MINOR_THIRD = 1.2);
            exports_1("MAJOR_THIRD", MAJOR_THIRD = 1.25);
            exports_1("PERFECT_FOURTH", PERFECT_FOURTH = 1.333);
            exports_1("AUGMENTED_FOURTH", AUGMENTED_FOURTH = 1.414);
            exports_1("PERFECT_FIFTH", PERFECT_FIFTH = 1.5);
            exports_1("MINOR_SIXTH", MINOR_SIXTH = 1.6);
            exports_1("MAJOR_SIXTH", MAJOR_SIXTH = 1.667);
            exports_1("MINOR_SEVENTH", MINOR_SEVENTH = 1.778);
            exports_1("MAJOR_SEVENTH", MAJOR_SEVENTH = 1.875);
            exports_1("PERFECT_OCTAVE", PERFECT_OCTAVE = 2);
            exports_1("GOLDEN_RATIO", GOLDEN_RATIO = 1.618);
            exports_1("default", {
                MINOR_SECOND: MINOR_SECOND,
                MAJOR_SECOND: MAJOR_SECOND,
                MINOR_THIRD: MINOR_THIRD,
                MAJOR_THIRD: MAJOR_THIRD,
                PERFECT_FOURTH: PERFECT_FOURTH,
                AUGMENTED_FOURTH: AUGMENTED_FOURTH,
                PERFECT_FIFTH: PERFECT_FIFTH,
                MINOR_SIXTH: MINOR_SIXTH,
                MAJOR_SIXTH: MAJOR_SIXTH,
                MINOR_SEVENTH: MINOR_SEVENTH,
                MAJOR_SEVENTH: MAJOR_SEVENTH,
                PERFECT_OCTAVE: PERFECT_OCTAVE,
                GOLDEN_RATIO: GOLDEN_RATIO
            });
        }
    };
});
System.register("types", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("steps", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var getStep, getSteps;
    return {
        setters: [],
        execute: function () {
            exports_3("getStep", getStep = function (_a) {
                var step = _a.step, interval = _a.interval, unit = _a.unit;
                var lowPower = 5 - step;
                var highPower = step - 4;
                var result = step <= 3
                    ? interval / Math.pow(interval, lowPower)
                    : Math.pow(interval, highPower);
                // Round to 3 decimal places
                var value = Math.floor(result * 1000) / 1000;
                return unit && unit !== 'none' ? (value += unit) : value;
            });
            exports_3("getSteps", getSteps = function (_a) {
                var interval = _a.interval, unit = _a.unit;
                var stepsArray = [];
                for (var index = 0; index < 8; index++) {
                    var step = index + 1;
                    stepsArray.push(getStep({ step: step, interval: interval, unit: unit }));
                }
                return stepsArray;
            });
        }
    };
});
System.register("index", ["constants", "steps"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var DefaultRatios, steps_1, Ratio, Scale;
    return {
        setters: [
            function (DefaultRatios_1) {
                DefaultRatios = DefaultRatios_1;
            },
            function (steps_1_1) {
                steps_1 = steps_1_1;
            }
        ],
        execute: function () {
            exports_4("Ratio", Ratio = DefaultRatios);
            exports_4("Scale", Scale = function (interval, unit) {
                if (interval === void 0) { interval = Ratio.MINOR_THIRD; }
                return function (step, unitOverride) {
                    if (step === void 0) { step = 0; }
                    var unitValue = unitOverride || unit;
                    return step
                        ? steps_1.getStep({ step: step, interval: interval, unit: unitValue })
                        : steps_1.getSteps({ interval: interval, unit: unitOverride });
                };
            });
            exports_4("default", { Scale: Scale, Ratio: Ratio });
        }
    };
});
System.register("test_helpers", [], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var SpreadScale;
    return {
        setters: [],
        execute: function () {
            exports_5("SpreadScale", SpreadScale = function (Step, unit) {
                var results = [];
                for (var index = 0; index < 8; index++) {
                    var value = index + 1;
                    var step = unit ? Step(value, unit) : Step(value);
                    results[index] = step;
                }
                return results;
            });
            exports_5("default", {});
        }
    };
});
System.register("__mocks__/index", [], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var MinorSecondMock, MajorSecondMock, MinorThirdMock, MajorThirdMock, MinorThirdMockInRem, PerfectFourthMock, PerfectFifthMock, GoldenRatioMock, AugmentedFourthMock;
    return {
        setters: [],
        execute: function () {
            exports_6("MinorSecondMock", MinorSecondMock = [
                0.823,
                0.878,
                0.937,
                1,
                1.067,
                1.138,
                1.214,
                1.296
            ]);
            exports_6("MajorSecondMock", MajorSecondMock = [
                0.702,
                0.79,
                0.888,
                1,
                1.125,
                1.265,
                1.423,
                1.601
            ]);
            exports_6("MinorThirdMock", MinorThirdMock = [0.578, 0.694, 0.833, 1, 1.2, 1.44, 1.728, 2.073]);
            exports_6("MajorThirdMock", MajorThirdMock = [0.512, 0.64, 0.8, 1, 1.25, 1.562, 1.953, 2.441]);
            exports_6("MinorThirdMockInRem", MinorThirdMockInRem = [
                '0.578rem',
                '0.694rem',
                '0.833rem',
                '1rem',
                '1.2rem',
                '1.44rem',
                '1.728rem',
                '2.073rem'
            ]);
            exports_6("PerfectFourthMock", PerfectFourthMock = [
                0.422,
                0.562,
                0.75,
                1,
                1.333,
                1.776,
                2.368,
                3.157
            ]);
            exports_6("PerfectFifthMock", PerfectFifthMock = [
                0.296,
                0.444,
                0.666,
                1,
                1.5,
                2.25,
                3.375,
                5.062
            ]);
            exports_6("GoldenRatioMock", GoldenRatioMock = [
                0.236,
                0.381,
                0.618,
                1,
                1.618,
                2.617,
                4.235,
                6.853
            ]);
            exports_6("AugmentedFourthMock", AugmentedFourthMock = [
                0.353,
                0.5,
                0.707,
                1,
                1.414,
                1.999,
                2.827,
                3.997
            ]);
            exports_6("default", [MinorThirdMock, AugmentedFourthMock, MinorThirdMockInRem]);
        }
    };
});
System.register("__tests__/index.test", ["index", "test_helpers", "__mocks__/index"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var index_1, test_helpers_1, index_2;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (test_helpers_1_1) {
                test_helpers_1 = test_helpers_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            describe('Get scale using the each ratio', function () {
                it('Minor Second', function () {
                    var MinorSecond = index_1.Scale(index_1.Ratio.MINOR_SECOND);
                    expect(test_helpers_1.SpreadScale(MinorSecond)).toEqual(index_2.MinorSecondMock);
                });
                it('Major Second', function () {
                    var MajorSecond = index_1.Scale(index_1.Ratio.MAJOR_SECOND);
                    expect(test_helpers_1.SpreadScale(MajorSecond)).toEqual(index_2.MajorSecondMock);
                });
                it('Minor Third in Rem', function () {
                    var MinorThird = index_1.Scale(index_1.Ratio.MINOR_THIRD, 'rem');
                    expect(test_helpers_1.SpreadScale(MinorThird)).toEqual(index_2.MinorThirdMockInRem);
                });
                it('Minor Third in Rem with override', function () {
                    var MinorThird = index_1.Scale(index_1.Ratio.MINOR_THIRD, 'em');
                    expect(test_helpers_1.SpreadScale(MinorThird, 'rem')).toEqual(index_2.MinorThirdMockInRem);
                });
                it('Minor Third unitless with override', function () {
                    var MinorThird = index_1.Scale(index_1.Ratio.MINOR_THIRD, 'em');
                    expect(test_helpers_1.SpreadScale(MinorThird, 'none')).toEqual(index_2.MinorThirdMock);
                });
                it('Minor Third scale array', function () {
                    var MinorThird = index_1.Scale(index_1.Ratio.MINOR_THIRD, 'rem');
                    expect(MinorThird(0, 'rem')).toEqual(index_2.MinorThirdMockInRem);
                });
                it('Minor Third scale unitless array', function () {
                    var MinorThird = index_1.Scale(index_1.Ratio.MINOR_THIRD);
                    expect(MinorThird()).toEqual(index_2.MinorThirdMock);
                });
                it('Minor Third', function () {
                    var MinorThird = index_1.Scale(index_1.Ratio.MINOR_THIRD);
                    expect(test_helpers_1.SpreadScale(MinorThird)).toEqual(index_2.MinorThirdMock);
                });
                it('Major Third', function () {
                    var MajorThird = index_1.Scale(index_1.Ratio.MAJOR_THIRD);
                    expect(test_helpers_1.SpreadScale(MajorThird)).toEqual(index_2.MajorThirdMock);
                });
                it('Augmented Fourth', function () {
                    var AugmentedFourth = index_1.Scale(index_1.Ratio.AUGMENTED_FOURTH);
                    expect(test_helpers_1.SpreadScale(AugmentedFourth)).toEqual(index_2.AugmentedFourthMock);
                });
                it('Perfect Fourth', function () {
                    var PerfectFourth = index_1.Scale(index_1.Ratio.PERFECT_FOURTH);
                    expect(test_helpers_1.SpreadScale(PerfectFourth)).toEqual(index_2.PerfectFourthMock);
                });
                it('Perfect Fifth', function () {
                    var PerfectFifth = index_1.Scale(index_1.Ratio.PERFECT_FIFTH);
                    expect(test_helpers_1.SpreadScale(PerfectFifth)).toEqual(index_2.PerfectFifthMock);
                });
                it('Golden Ratio', function () {
                    var GoldenRatio = index_1.Scale(index_1.Ratio.GOLDEN_RATIO);
                    expect(test_helpers_1.SpreadScale(GoldenRatio)).toEqual(index_2.GoldenRatioMock);
                });
                it('returns correct steps in a Custom', function () {
                    var CUSTOM_RATIO = 2.125;
                    var CustomRatioMock = [0.104, 0.221, 0.47, 1, 2.125, 4.515, 9.595, 20.39];
                    var CustomRatio = index_1.Scale(CUSTOM_RATIO);
                    expect(test_helpers_1.SpreadScale(CustomRatio)).toEqual(CustomRatioMock);
                });
            });
        }
    };
});
