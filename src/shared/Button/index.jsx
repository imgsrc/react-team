import React from 'react'
import classnames from 'classnames'

export default function Button({
                                 element = 'button',
                                 className,
                                 small,
                                 primary,
                                 info,
                                 success,
                                 danger,
                                 warning,
                                 neutral,
                                 children
                               }) {
  return React.createElement(element, {
    className: classnames('btn', {
      'btn-sm': small,
      'btn-primary': primary,
      'btn-info': info,
      'btn-success': success,
      'btn-danger': danger,
      'btn-warning': warning,
      'btn-neutral': neutral
    }, className),
  }, children);
}