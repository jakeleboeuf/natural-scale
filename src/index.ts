import * as DefaultRatios from './constants';
import { ScaleOptions } from './types';
import { getStep, getSteps } from './steps';

export const Ratio = DefaultRatios;

export const Scale = (
  interval: any = Ratio.MINOR_THIRD,
  unit?: string | undefined
) => (step: number | boolean = 0, unitOverride?: string | boolean): number => {
  const unitValue = unitOverride || unit;

  return step
    ? getStep({ step, interval, unit: unitValue })
    : getSteps({ interval, unit: unitOverride });
};

export default { Scale, Ratio };
