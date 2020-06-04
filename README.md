# rough-notation-reactor

A wrapper that makes Roigh Notation a React Component.

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Install

### With NPM

`npm install rough-notation-reactor`

### With Yarn

`yarn add rough-notation-reactor`

## Usage

```javascript
import RoughNotation from 'rough-notation-reactor'

const Component = () => {
  return <RoughNotation>Underlined Text</RoughNotation>
}
```

## Types

- underline (default)
- box
- circle
- highlight
- strike-through
- crossed-off

```javascript
import RoughNotation from 'rough-notation-reactor'

const Component = () => {
  return (
    <>
      <RoughNotation type="box">Wrapped with Box</RoughNotation>
      <RoughNotation type="circle">Wrapped with Circle</RoughNotation>
      <RoughNotation type="highlight">Highlighted</RoughNotation>
      <RoughNotation type="strike-through">Strike Through</RoughNotation>
      <RoughNotation type="crossed-off">Crossed Off</RoughNotation>
    </>
  )
}
```

## No Animation

```javascript
import RoughNotation from 'rough-notation-reactor'

const Component = () => {
  return <RoughNotation animate={false}>Wrapped with Box</RoughNotation>
}
```

## Animation Settings

| Prop              | Value Type   | Default |
| ----------------- | ------------ | ------- |
| animationDuration | Number in ms | 800     |
| animationDelay    | Number in ms | 0       |
| iterations        | Number       | 2       |

```javascript
import RoughNotation from 'rough-notation-reactor'

const Component = () => {
  return (
    <RoughNotation iterations={4} animationDuration={500} animationDelay={1000}>
      Customized Animation
    </RoughNotation>
  )
}
```

## Styling

| Prop       | Value Type | Default      |
| ---------- | ---------- | ------------ |
| color      | String     | currentColor |
| padding    | Number     | 5            |
| strokeWith | Number     | 1            |

```javascript
import RoughNotation from 'rough-notation-reactor'

const Component = () => {
  return (
    <RoughNotation
      color="red"
      padding={20}
      strokeWidth={2}
      style={{ fontSize: '3rem' }}>
      Styled Notation
    </RoughNotation>
  )
}
```

## Show/Hide

Rough Notation is allowed you to show and hide notations

```javascript
import React, { useState } from 'react'
import RoughNotation from 'rough-notation-reactor'

const Component = () => {
  const [show, setShow] = useState(true)

  return (
    <>
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      <RoughNotation show={show}>Customized Animation</RoughNotation>
    </>
  )
}
```

## Render As Any Tag

Defaultly notations renders as span. You can customize it.

```javascript
import RoughNotation from 'rough-notation-reactor'

const Component = () => {
  return <RoughNotation as="b">Bold Notation</RoughNotation>
}
```

## Grouping Notations

```javascript
import React, { useState } from 'react'
import RoughNotation from 'rough-notation-reactor'

const Component = () => {
  const [show, setShow] = useState(true)

  return (
    <>
      <p>
        <RoughNotation show={show}>Lorem ipsum</RoughNotation> dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in
        <RoughNotation show={show}>
          voluptate velit esse cillum
        </RoughNotation> dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit
        <RoughNotation show={show}>anim id est laborum</RoughNotation>.
      </p>
      <button onClick={() => setShow(!show)}>Show/Hide</button>
    </>
  )
}
```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
