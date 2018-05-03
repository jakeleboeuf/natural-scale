import { MINOR_THIRD } from './constants';
import * as DefaultRatios from './constants';
import { ScaleOptions } from './types';

export const Ratio = DefaultRatios;

export const Scale = (
  interval: any = MINOR_THIRD,
  unit?: string | undefined
) => (step: number = 4, unitOverride?: string | undefined): number => {
  const lowPower: number = 5 - step;
  const highPower: number = step - 4;
  const unitValue = unitOverride || unit;

  let result: any =
    step <= 3
      ? interval / Math.pow(interval, lowPower)
      : Math.pow(interval, highPower);

  // Round to 3 decimal places
  result = Math.floor(result * 1000) / 1000;

  // Add unit if it is set
  if (unitValue) {
    result += unitValue;
  }

  // Return results
  return result;
};

export default { Scale, Ratio };
