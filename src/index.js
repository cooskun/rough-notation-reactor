import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { annotate } from 'rough-notation'

const RoughNotation = ({
  type = 'underline',
  animate,
  animationDelay,
  animationDuration,
  color,
  strokeWidth,
  padding,
  as: Element = 'span',
  children,
  ...props
}) => {
  const ref = useRef()

  useEffect(() => {
    const annotation = annotate(ref.current, {
      type,
      animate,
      animationDuration,
      animationDelay,
      color,
      strokeWidth,
      padding,
    })
    annotation.show()
  }, [])

  return (
    <Element ref={ref} {...props}>
      {children}
    </Element>
  )
}

RoughNotation.propTypes = {
  color: PropTypes.string,
  animate: PropTypes.bool,
  animationDelay: PropTypes.number,
  animationDuration: PropTypes.number,
  as: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  padding: PropTypes.number,
  strokeWidth: PropTypes.number,
  type:
    PropTypes.oneOf[
      ('underline',
      'box',
      'circle',
      'highlight',
      'strike-through',
      'crossed-off')
    ],
}

export default RoughNotation
