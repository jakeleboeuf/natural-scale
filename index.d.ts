declare module "constants" {
    export const MINOR_SECOND: number;
    export const MAJOR_SECOND: number;
    export const MINOR_THIRD: number;
    export const MAJOR_THIRD: number;
    export const PERFECT_FOURTH: number;
    export const AUGMENTED_FOURTH: number;
    export const PERFECT_FIFTH: number;
    export const MINOR_SIXTH: number;
    export const MAJOR_SIXTH: number;
    export const MINOR_SEVENTH: number;
    export const MAJOR_SEVENTH: number;
    export const PERFECT_OCTAVE: number;
    export const GOLDEN_RATIO: number;
    const _default: object;
    export default _default;
}
declare module "types" {
    export interface ScaleTypes {
        step: number;
        options?: ScaleOptions;
    }
    export interface ScaleOptions {
        unit?: string;
        interval?: number;
    }
}
declare module "steps" {
    export const getStep: ({ step, interval, unit }: any) => any;
    export const getSteps: ({ interval, unit }: any) => any[];
}
declare module "index" {
    import * as DefaultRatios from "constants";
    export const Ratio: typeof DefaultRatios;
    export const Scale: (interval?: any, unit?: string | undefined) => (step?: number | boolean, unitOverride?: string | undefined) => number;
    const _default: {
        Scale: (interval?: any, unit?: string | undefined) => (step?: number | boolean, unitOverride?: string | undefined) => number;
        Ratio: typeof DefaultRatios;
    };
    export default _default;
}
declare module "test_helpers" {
    export const SpreadScale: (Step: any, unit?: any) => any[];
    const _default: {};
    export default _default;
}
declare module "__mocks__/index" {
    export const MinorSecondMock: number[];
    export const MajorSecondMock: number[];
    export const MinorThirdMock: number[];
    export const MajorThirdMock: number[];
    export const MinorThirdMockInRem: string[];
    export const PerfectFourthMock: number[];
    export const PerfectFifthMock: number[];
    export const GoldenRatioMock: number[];
    export const AugmentedFourthMock: number[];
    const _default: (string[] | number[])[];
    export default _default;
}
declare module "__tests__/index.test" {
}
