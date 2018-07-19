import * as DefaultRatios from './constants';
import { ScaleTypes, ScaleOptions } from './types';
import { getStep, getSteps } from './steps';

export const Ratio = DefaultRatios;

export const Scale = ({
  interval = Ratio.MINOR_THIRD,
  unit,
  base,
}: ScaleTypes) => (
  step: number | boolean = 0,
  unitOverride?: string | 'none',
): number => {
  const unitValue = unitOverride || unit;

  return step
    ? getStep({ step, interval, unit: unitValue, base })
    : getSteps({ interval, unit: unitOverride, base });
};

export default { Scale, Ratio };
