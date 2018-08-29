# Natural Scale

[![NPM][npm-badge-img]][npm-badge-link]
[![downloads][downloads-badge]][npmcharts]
[![Circle CI Status][circle-ci-badge]][circle-ci-url]
[![Code Climate][codeclimate-badge]][codeclimate-url]
[![Support Me][support-badge-image]][support-badge-url]

<!-- [![Coverage Status][coverage-badge]][coverage-url] -->

**Natural Scale** is a JavaScript utility that makes creating beautiful, natural systems of scale a cinch. It's especially useful for creating a consistent [Type Scale](http://type-scale.com) accross your UI, but can be used in a veriety of ways.

###### Example of a Type Scale in action from type-scale.com

![type-scale.com Example](https://jklb-os.s3.amazonaws.com/samples/type-scale--example.gif)

### Basic Usage

```jsx
import { Scale, Ratio } from 'natural-scale';

// Create a Scale instance
const Step = Scale({ interval: Ratio.GOLDEN_RATIO, unit: 'rem' });

// Use it!
const headingSize = Step(4);
const subheadingSize = Step(3, 'em'); // Optionally, you can override the unit of measure
const bodySize = Step(2);
```

### Works with your stuff

`natural-scale` works great with your favorite UI Libraries like React and Vue.

#### With React

```jsx
import React from 'react';
import { render } from 'react-dom';
import * as glamorous from 'glamorous';
import { Scale, Ratio } from 'natural-scale';

const Step = Scale({interval: Ratio.MINOR_THIRD, unit: 'rem'});

const Title = glamorous.h1({
  fontSize: Step(5);
});

const SubTitle = glamorous.h2({
  fontSize: Step(4);
});

const Body = glamorous.p({
  fontSize: Step(3);
});


function App() {
  return (
    <>
      <Title>Hey there!</Title>
      <SubTitle>I'm a subtitle</SubTitle>
      <Body>And I'm the body. I’m long- actually, not too long. Medium length.</Body>
    </>
  );
}

render(<App />, document.body);
```

#### With React Native

Native looks for unitless scales. To help out, we'll pass in a base font size too

```jsx
import React from 'react';
import { Text, View } from 'react-native';
import { Scale, Ratio } from 'natural-scale';
const Step = Scale({ interval: Ratio.MINOR_THIRD, unit: 'rem', base: 16 });

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
  },
  message: {
    fontSize: Step(5),
  },
});

export default () => {
  <View style={styles.container}>
    <Text style={styles.message}>Welcome!</Text>
  </View>;
};
```

### Intervals

I've included some common intervals used in standard musical tuning systems. The following intervals can be used like so:

```jsx
import { Scale, Ratio } from 'natural-scale';
const Step = Scale({interval: Ratio.MINOR_Sunit: ECOND});

const step1 = Step(1); // 0.702
const step3 = Step(3); // 0.888
const step7 = Step(7); // 1.423
```

##### Standard Intervals

| Name             | API Name         | Pitch Ratio | Interval |
| ---------------- | ---------------- | ----------- | -------- |
| Minor second     | MINOR_SECOND     | 16/15       | 1.067    |
| Major Second     | MAJOR_SECOND     | 9/8         | 1.125    |
| Minor Third      | MINOR_THIRD      | 6/5         | 1.2      |
| Major Third      | MAJOR_THIRD      | 5/4         | 1.25     |
| Perfect Fourth   | PERFECT_FOURTH   | 4/3         | 1.333    |
| Augmented Fourth | AUGMENTED_FOURTH | 45/32       | 1.414    |
| Perfect Fifth    | PERFECT_FIFTH    | 3/2         | 1.5      |
| Minor Sixth      | MINOR_SIXTH      | 8/5         | 1.6      |
| Major Sixth      | MAJOR_SIXTH      | 5/3         | 1.667    |
| Minor Seventh    | MINOR_SEVENTH    | 16/9        | 1.778    |
| Major Seventh    | MAJOR_SEVENTH    | 15/8        | 1.875    |
| Perfect Octave   | PERFECT_OCTAVE   | 2/1         | 2        |
| Golden Ratio     | GOLDEN_RATIO     | 1/φ         | 1.618    |

### Custom Interval

Of course you are free to experiment and find a scale that works well for you.

```jsx
import { Scale } from 'natural-scale';
const Step = Scale({ interval: 2.125, unit: 'rem' });

const step1 = Step(1); // 0.104em
const step3 = Step(3); // 0.47em
const step7 = Step(7); // 9.595em
```

[npm-badge-img]: https://badge.fury.io/js/natural-scale.svg
[npm-badge-link]: http://badge.fury.io/js/natural-scale
[codeclimate-badge]: https://codeclimate.com/github/jakeleboeuf/natural-scale/badges/gpa.svg
[codeclimate-url]: https://codeclimate.com/github/jakeleboeuf/natural-scale
[coverage-badge]: https://codeclimate.com/github/jakeleboeuf/natural-scale/badges/coverage.svg
[coverage-url]: https://codeclimate.com/github/jakeleboeuf/natural-scale/coverage
[circle-ci-badge]: https://img.shields.io/circleci/project/github/jakeleboeuf/natural-scale.svg
[circle-ci-url]: https://circleci.com/gh/jakeleboeuf/natural-scale
[npmcharts]: http://npmcharts.com/compare/natural-scale
[downloads-badge]: https://img.shields.io/npm/dw/natural-scale.svg
[support-badge-image]: https://img.shields.io/badge/support-jake-0666d0.svg
[support-badge-url]: https://commerce.coinbase.com/checkout/ec081042-4a98-42bf-bf04-e882a81db30f
