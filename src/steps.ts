export const getStep = ({ step, interval, unit, base }: any) => {
  const lowPower: number = 5 - step;
  const highPower: number = step - 4;
  let result: any =
    step <= 3
      ? interval / Math.pow(interval, lowPower)
      : Math.pow(interval, highPower);

  // Round to 3 decimal places
  let value: any = Math.floor(result * 1000) / 1000;
  if (base) {
    value *= base;
  }

  return unit && unit !== 'none' ? (value += unit) : value;
};

export const getSteps = ({ interval, unit, base }: any) => {
  let stepsArray: any[] = [];

  for (let index = 0; index < 8; index++) {
    const step = index + 1;
    stepsArray.push(getStep({ step, interval, unit, base }));
  }

  return stepsArray;
};
