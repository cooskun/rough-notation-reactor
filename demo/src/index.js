import React, { Component } from 'react'
import styled from 'styled-components'
import { render } from 'react-dom'

import Example from '../../src/index'

const StyledExample = styled(Example)`
  display: inline-block;
  margin-left: 1rem;
  margin-bottom: 2rem;
  font-family: sans-serif;

  &.is-highlight {
    color: #ffff50;
  }
`

export default class Demo extends Component {
  render() {
    return (
      <div>
        <h1>rough-notation-reactor Demo</h1>
        <h2>Types</h2>
        <StyledExample>Default, underline</StyledExample> <br />
        <StyledExample type="box">Box</StyledExample> <br />
        <StyledExample type="circle">Circle</StyledExample> <br />
        <StyledExample type="highlight" className="is-highlight">
          Highlight
        </StyledExample>{' '}
        <br />
        <StyledExample type="strike-through">Strike Through</StyledExample>
        <br />
        <StyledExample type="crossed-off">Crossed Off</StyledExample> <br />
        <h2>Animate</h2>
        <StyledExample animate={false}>Animate is false</StyledExample>
        <h2>Animation Duration</h2>
        <StyledExample animationDuration={3000}>
          Animation duration is 3000ms
        </StyledExample>
        <h2>Animation Delay</h2>
        <StyledExample animationDelay={1000}>
          Animation delay is 1000ms
        </StyledExample>
        <h2>Color</h2>
        <StyledExample color="red">Notation color is red</StyledExample>
        <h2>Padding</h2>
        <StyledExample type="box" padding={20}>
          Padding is 20px
        </StyledExample>
        <h2>Stroke Width</h2>
        <StyledExample type="box" strokeWidth={10}>
          strokeWidth is 10
        </StyledExample>
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
