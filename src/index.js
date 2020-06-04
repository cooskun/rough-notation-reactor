import React, { useEffect, useRef } from 'react'
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
  iterations,
  show = true,
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
      iterations,
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
  type: PropTypes.string,
  color: PropTypes.string,
  animate: PropTypes.bool,
  animationDelay: PropTypes.number,
  animationDuration: PropTypes.number,
  as: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  padding: PropTypes.number,
  strokeWidth: PropTypes.number,
  iterations: PropTypes.number,
}

export default React.memo(RoughNotation)
