import React, { useState } from 'react'
import styled from 'styled-components'
import { render } from 'react-dom'

import Example from '../../src/index'

const Wrapper = styled.div`
  padding: 2rem 0;
`

const Item = styled(Example)`
  display: inline-block;
  margin-left: 1rem;
  font-family: sans-serif;

  &:first-of-type {
    margin-left: 0;
  }

  &.is-highlight {
    color: #ffff50;
  }
`

const Demo = () => {
  const [show, setShow] = useState(true)
  const [groupShow, setGroupShow] = useState(false)

  return (
    <div>
      <h1>rough-notation-reactor Demo</h1>
      <h2>Types</h2>
      <Wrapper>
        <Item>Default, underline</Item>
        <Item type="box">Box</Item>
        <Item type="circle">Circle</Item>
        <Item type="highlight" className="is-highlight">
          Highlight
        </Item>
        <Item type="strike-through">Strike Through</Item>
        <Item type="crossed-off">Crossed Off</Item>
      </Wrapper>

      <h2>Animate</h2>
      <Wrapper>
        <Item>Animate is true</Item>
        <Item animate={false}>Animate is false</Item>
      </Wrapper>

      <h2>Animation Duration</h2>
      <Wrapper>
        <Item animationDuration={3000}>Animation duration is 3000ms</Item>
      </Wrapper>

      <h2>Animation Delay</h2>
      <Item animationDelay={1000}>Animation delay is 1000ms</Item>

      <h2>Iterations</h2>
      <Item iterations={20} animationDuration={5000}>
        Iterate 20 times
      </Item>

      <h2>Color</h2>
      <Item color="red">Notation color is red</Item>

      <h2>Padding</h2>
      <Item type="box" padding={20}>
        Padding is 20px
      </Item>

      <h2>Stroke Width</h2>
      <Item type="box" strokeWidth={10}>
        strokeWidth is 10
      </Item>

      <h2>Show, Hide</h2>
      <Wrapper>
        <button onClick={() => setShow(true)}>Show</button>
        <button onClick={() => setShow(false)}>Hide</button>
        <Item show={show}>Show</Item>
      </Wrapper>

      <h2>Group Show, Hide</h2>
      <Wrapper>
        <button onClick={() => setGroupShow(true)}>Show</button>
        <button onClick={() => setGroupShow(false)}>Hide</button>
        <Item show={groupShow}>Underline</Item>
        <Item type="box" show={groupShow}>
          Box
        </Item>
        <Item type="circle" show={groupShow}>
          Circle
        </Item>
        <Item type="crossed-off" show={groupShow}>
          Crossed Off
        </Item>
      </Wrapper>
    </div>
  )
}

render(<Demo />, document.querySelector('#demo'))
