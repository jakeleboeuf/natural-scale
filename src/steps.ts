export const getStep = (
  _step: number,
  interval: number,
  unit: string | undefined
) => {
  const lowPower: number = 5 - _step;
  const highPower: number = _step - 4;
  let result: any =
    _step <= 3
      ? interval / Math.pow(interval, lowPower)
      : Math.pow(interval, highPower);

  // Round to 3 decimal places
  let value: any = Math.floor(result * 1000) / 1000;
  return unit ? (value += unit) : value;
};

export const getSteps = (interval: number, unitValue: string | undefined) => {
  let stepsArray: any[] = [];

  for (let index = 0; index < 8; index++) {
    stepsArray.push(getStep(index + 1, interval, unitValue));
  }

  return stepsArray;
};
