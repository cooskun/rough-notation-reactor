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
  show = true,
  remove = false,
  as: Element = 'span',
  children,
  ...props
}) => {
  const el = useRef()
  const annotation = useRef({})

  useEffect(() => {
    annotation.current = annotate(el.current, {
      type,
      animate,
      animationDuration,
      animationDelay,
      color,
      strokeWidth,
      padding,
    })

    return () => annotation.current.remove()
  }, [])

  useEffect(() => {
    show ? annotation.current.show() : annotation.current.hide()
  }, [show])

  return (
    <Element ref={el} {...props}>
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
  type: PropTypes.string,
}

export default React.memo(RoughNotation)
