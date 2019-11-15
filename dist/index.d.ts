import * as DefaultRatios from './constants';
import { ScaleTypes } from './types';
export declare const Ratio: typeof DefaultRatios;
export declare const Scale: ({ interval, unit, base, }: ScaleTypes) => (step?: number | boolean, unitOverride?: string | undefined) => number;
declare const _default: {
    Scale: ({ interval, unit, base, }: ScaleTypes) => (step?: number | boolean, unitOverride?: string | undefined) => number;
    Ratio: typeof DefaultRatios;
};
export default _default;
