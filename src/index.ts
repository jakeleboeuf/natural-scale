import { MINOR_THIRD } from './constants';
import * as DefaultRatios from './constants';
import { ScaleOptions } from './types';
import { getStep, getSteps } from './steps';

export const Ratio = DefaultRatios;

export const Scale = (
  interval: any = MINOR_THIRD,
  unit?: string | undefined
) => (step: number = 0, unitOverride?: string | undefined): number => {
  const unitValue = unitOverride || unit;

  return step
    ? getStep(step, interval, unitValue)
    : getSteps(interval, unitValue);
};

export default { Scale, Ratio };
