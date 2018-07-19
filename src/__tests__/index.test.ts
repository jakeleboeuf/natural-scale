import { Scale, Ratio } from '../index';
import { SpreadScale } from '../test_helpers';
import {
  MinorThirdMockInRem,
  MajorThirdMock,
  MajorSecondMock,
  MinorSecondMock,
  AugmentedFourthMock,
  PerfectFourthMock,
  PerfectFifthMock,
  MinorThirdMock,
  GoldenRatioMock,
} from '../__mocks__/index';

describe('Get scale using the each ratio', () => {
  it('Minor Second', () => {
    const MinorSecond = Scale({ interval: Ratio.MINOR_SECOND });
    expect(SpreadScale(MinorSecond)).toEqual(MinorSecondMock);
  });

  it('Major Second', () => {
    const MajorSecond = Scale({ interval: Ratio.MAJOR_SECOND });
    expect(SpreadScale(MajorSecond)).toEqual(MajorSecondMock);
  });

  it('Minor Third in Rem', () => {
    const MinorThird = Scale({ interval: Ratio.MINOR_THIRD, unit: 'rem' });
    expect(SpreadScale(MinorThird)).toEqual(MinorThirdMockInRem);
  });

  it('Minor Third in Rem with override', () => {
    const MinorThird = Scale({ interval: Ratio.MINOR_THIRD, unit: 'em' });
    expect(SpreadScale(MinorThird, 'rem')).toEqual(MinorThirdMockInRem);
  });

  it('Minor Third unitless with override', () => {
    const MinorThird = Scale({ interval: Ratio.MINOR_THIRD, unit: 'em' });
    expect(SpreadScale(MinorThird, 'none')).toEqual(MinorThirdMock);
  });

  it('Minor Third scale array', () => {
    const MinorThird = Scale({ interval: Ratio.MINOR_THIRD, unit: 'rem' });
    expect(MinorThird(0, 'rem')).toEqual(MinorThirdMockInRem);
  });

  it('Minor Third scale unitless array', () => {
    const MinorThird = Scale({ interval: Ratio.MINOR_THIRD });
    expect(MinorThird()).toEqual(MinorThirdMock);
  });

  it('Minor Third', () => {
    const MinorThird = Scale({ interval: Ratio.MINOR_THIRD });
    expect(SpreadScale(MinorThird)).toEqual(MinorThirdMock);
  });

  it('Major Third', () => {
    const MajorThird = Scale({ interval: Ratio.MAJOR_THIRD });
    expect(SpreadScale(MajorThird)).toEqual(MajorThirdMock);
  });

  it('Augmented Fourth', () => {
    const AugmentedFourth = Scale({ interval: Ratio.AUGMENTED_FOURTH });
    expect(SpreadScale(AugmentedFourth)).toEqual(AugmentedFourthMock);
  });

  it('Perfect Fourth', () => {
    const PerfectFourth = Scale({ interval: Ratio.PERFECT_FOURTH });
    expect(SpreadScale(PerfectFourth)).toEqual(PerfectFourthMock);
  });

  it('Perfect Fifth', () => {
    const PerfectFifth = Scale({ interval: Ratio.PERFECT_FIFTH });
    expect(SpreadScale(PerfectFifth)).toEqual(PerfectFifthMock);
  });

  it('Golden Ratio', () => {
    const GoldenRatio = Scale({ interval: Ratio.GOLDEN_RATIO });
    expect(SpreadScale(GoldenRatio)).toEqual(GoldenRatioMock);
  });

  it('returns correct steps in a Custom', () => {
    const CUSTOM_RATIO = 2.125;
    const CustomRatioMock = [0.104, 0.221, 0.47, 1, 2.125, 4.515, 9.595, 20.39];
    const CustomRatio = Scale({ interval: CUSTOM_RATIO });
    expect(SpreadScale(CustomRatio)).toEqual(CustomRatioMock);
  });
});

describe('Get unitless scale for react-native', () => {
  it('returns correct steps with a base of 16', () => {
    const CUSTOM_RATIO = 2.125;
    const CustomRatioMock = [1.664, 3.536, 7.52, 16, 34, 72.24, 153.52, 326.24];
    const CustomRatio = Scale({ interval: CUSTOM_RATIO, base: 16 });
    expect(SpreadScale(CustomRatio)).toEqual(CustomRatioMock);
  });
});
