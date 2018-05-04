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
  GoldenRatioMock
} from '../__mocks__/index';

describe('Get scale using the each ratio', () => {
  it('Minor Second', () => {
    const MinorSecond = Scale(Ratio.MINOR_SECOND);
    expect(SpreadScale(MinorSecond)).toEqual(MinorSecondMock);
  });

  it('Major Second', () => {
    const MajorSecond = Scale(Ratio.MAJOR_SECOND);
    expect(SpreadScale(MajorSecond)).toEqual(MajorSecondMock);
  });

  it('Minor Third in Rem', () => {
    const MinorThird = Scale(Ratio.MINOR_THIRD, 'rem');
    expect(SpreadScale(MinorThird)).toEqual(MinorThirdMockInRem);
  });

  it('Minor Third in Rem with override', () => {
    const MinorThird = Scale(Ratio.MINOR_THIRD, 'em');
    expect(SpreadScale(MinorThird, 'rem')).toEqual(MinorThirdMockInRem);
  });

  it('Minor Third scale array', () => {
    const MinorThird = Scale(Ratio.MINOR_THIRD);
    expect(MinorThird()).toEqual(MinorThirdMock);
  });

  it('Minor Third', () => {
    const MinorThird = Scale(Ratio.MINOR_THIRD);
    expect(SpreadScale(MinorThird)).toEqual(MinorThirdMock);
  });

  it('Major Third', () => {
    const MajorThird = Scale(Ratio.MAJOR_THIRD);
    expect(SpreadScale(MajorThird)).toEqual(MajorThirdMock);
  });

  it('Augmented Fourth', () => {
    const AugmentedFourth = Scale(Ratio.AUGMENTED_FOURTH);
    expect(SpreadScale(AugmentedFourth)).toEqual(AugmentedFourthMock);
  });

  it('Perfect Fourth', () => {
    const PerfectFourth = Scale(Ratio.PERFECT_FOURTH);
    expect(SpreadScale(PerfectFourth)).toEqual(PerfectFourthMock);
  });

  it('Perfect Fifth', () => {
    const PerfectFifth = Scale(Ratio.PERFECT_FIFTH);
    expect(SpreadScale(PerfectFifth)).toEqual(PerfectFifthMock);
  });

  it('Golden Ratio', () => {
    const GoldenRatio = Scale(Ratio.GOLDEN_RATIO);
    expect(SpreadScale(GoldenRatio)).toEqual(GoldenRatioMock);
  });

  it('returns correct steps in a Custom', () => {
    const CUSTOM_RATIO = 2.125;
    const CustomRatioMock = [0.104, 0.221, 0.47, 1, 2.125, 4.515, 9.595, 20.39];
    const CustomRatio = Scale(CUSTOM_RATIO);
    expect(SpreadScale(CustomRatio)).toEqual(CustomRatioMock);
  });
});
