export const SpreadScale = (Step: any, unit?: any) => {
  let results: any[] = [];

  for (let index = 0; index < 8; index++) {
    const value = index + 1;
    const step = unit ? Step(value, unit) : Step(value);
    results[index] = step;
  }

  return results;
};

export default {};
