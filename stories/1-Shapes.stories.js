import React from 'react'
import RoughNotation from '../src'
import { Wrapper, initial } from './utils'
import {
  withKnobs,
  number,
  text,
  boolean,
  button,
} from '@storybook/addon-knobs'

let key = 0

const label = 'Replay'
const render = () => (key += 1)

export default {
  component: RoughNotation,
  title: 'Shapes',
  decorators: [storyFn => <Wrapper>{storyFn()}</Wrapper>, withKnobs],
}

export const Underline = () => {
  button(label, render)

  return (
    <>
      <RoughNotation
        key={key}
        animate={boolean('Animate', true)}
        animationDelay={number('Animation Delay (ms)', initial.animationDelay)}
        animationDuration={number(
          'Animation Duration (ms)',
          initial.animationDuration
        )}
        color={text('Color', '')}
        padding={number('Padding', initial.padding)}
        strokeWidth={number('Stroke Width', initial.strokeWidth)}
        iterations={number('Iterations', initial.iterations)}>
        {text('Children', 'Lorem ipsum')}
      </RoughNotation>{' '}
      dolor sit amet consectetur, adipisicing elit. Tempora earum eligendi ''a
      numquam laborum odio, esse dolor beatae error quia sapiente vel cupiditate
      voluptate culpa possimus veniam ipsam, eius dicta ducimus aperiam
      molestias, alias tempore? Repudiandae illo sapiente laboriosam voluptate
      adipisci reiciendis saepe, doloribus, aspernatur consectetur quae quaerat,
      temporibus voluptatum?
    </>
  )
}

export const Box = () => {
  button(label, render)

  return (
    <>
      <RoughNotation
        key={key}
        type="box"
        animate={boolean('Animate', true)}
        animationDelay={number('Animation Delay (ms)', initial.animationDelay)}
        animationDuration={number(
          'Animation Duration (ms)',
          initial.animationDuration
        )}
        color={text('Color', '')}
        padding={number('Padding', initial.padding)}
        strokeWidth={number('Stroke Width', initial.strokeWidth)}
        iterations={number('Iterations', initial.iterations)}>
        {text('Children', 'Lorem ipsum')}
      </RoughNotation>{' '}
      dolor sit amet consectetur, adipisicing elit. Tempora earum eligendi ''a
      numquam laborum odio, esse dolor beatae error quia sapiente vel cupiditate
      voluptate culpa possimus veniam ipsam, eius dicta ducimus aperiam
      molestias, alias tempore? Repudiandae illo sapiente laboriosam voluptate
      adipisci reiciendis saepe, doloribus, aspernatur consectetur quae quaerat,
      temporibus voluptatum?
    </>
  )
}

export const Circle = () => {
  button(label, render)

  return (
    <>
      <RoughNotation
        key={key}
        type="circle"
        animate={boolean('Animate', true)}
        animationDelay={number('Animation Delay (ms)', initial.animationDelay)}
        animationDuration={number(
          'Animation Duration (ms)',
          initial.animationDuration
        )}
        color={text('Color', '')}
        padding={number('Padding', initial.padding)}
        strokeWidth={number('Stroke Width', initial.strokeWidth)}
        iterations={number('Iterations')}>
        {text('Children', 'Lorem ipsum')}
      </RoughNotation>{' '}
      dolor sit amet consectetur, adipisicing elit. Tempora earum eligendi ''a
      numquam laborum odio, esse dolor beatae error quia sapiente vel cupiditate
      voluptate culpa possimus veniam ipsam, eius dicta ducimus aperiam
      molestias, alias tempore? Repudiandae illo sapiente laboriosam voluptate
      adipisci reiciendis saepe, doloribus, aspernatur consectetur quae quaerat,
      temporibus voluptatum?
    </>
  )
}

export const Highlight = () => {
  button(label, render)

  return (
    <>
      <RoughNotation
        key={key}
        type="highlight"
        animate={boolean('Animate', true)}
        animationDelay={number('Animation Delay (ms)', initial.animationDelay)}
        animationDuration={number(
          'Animation Duration (ms)',
          initial.animationDuration
        )}
        color={text('Color', 'yellow')}
        iterations={number('Iterations', initial.iterations)}>
        {text('Children', 'Lorem ipsum')}
      </RoughNotation>{' '}
      dolor sit amet consectetur, adipisicing elit. Tempora earum eligendi ''a
      numquam laborum odio, esse dolor beatae error quia sapiente vel cupiditate
      voluptate culpa possimus veniam ipsam, eius dicta ducimus aperiam
      molestias, alias tempore? Repudiandae illo sapiente laboriosam voluptate
      adipisci reiciendis saepe, doloribus, aspernatur consectetur quae quaerat,
      temporibus voluptatum?
    </>
  )
}

export const StrikeThrough = () => {
  button(label, render)

  return (
    <>
      <RoughNotation
        key={key}
        type="strike-through"
        animate={boolean('Animate', true)}
        animationDelay={number('Animation Delay (ms)', initial.animationDelay)}
        animationDuration={number(
          'Animation Duration (ms)',
          initial.animationDuration
        )}
        color={text('Color', '')}
        padding={number('Padding', initial.padding)}
        strokeWidth={number('Stroke Width', initial.strokeWidth)}
        iterations={number('Iterations', initial.iterations)}>
        {text('Children', 'Lorem ipsum')}
      </RoughNotation>{' '}
      dolor sit amet consectetur, adipisicing elit. Tempora earum eligendi ''a
      numquam laborum odio, esse dolor beatae error quia sapiente vel cupiditate
      voluptate culpa possimus veniam ipsam, eius dicta ducimus aperiam
      molestias, alias tempore? Repudiandae illo sapiente laboriosam voluptate
      adipisci reiciendis saepe, doloribus, aspernatur consectetur quae quaerat,
      temporibus voluptatum?
    </>
  )
}

export const CrossedOff = () => {
  button(label, render)

  return (
    <>
      <RoughNotation
        key={key}
        type="crossed-off"
        animate={boolean('Animate', true)}
        animationDelay={number('Animation Delay (ms)', initial.animationDelay)}
        animationDuration={number(
          'Animation Duration (ms)',
          initial.animationDuration
        )}
        color={text('Color', '')}
        padding={number('Padding', initial.padding)}
        strokeWidth={number('Stroke Width', initial.strokeWidth)}
        iterations={number('Iterations', initial.iterations)}>
        {text('Children', 'Lorem ipsum')}
      </RoughNotation>{' '}
      dolor sit amet consectetur, adipisicing elit. Tempora earum eligendi ''a
      numquam laborum odio, esse dolor beatae error quia sapiente vel cupiditate
      voluptate culpa possimus veniam ipsam, eius dicta ducimus aperiam
      molestias, alias tempore? Repudiandae illo sapiente laboriosam voluptate
      adipisci reiciendis saepe, doloribus, aspernatur consectetur quae quaerat,
      temporibus voluptatum?
    </>
  )
}
