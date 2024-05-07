import React from 'react'

function Button({
    children,
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className='',
    ...props
}) {
  return (
    <button className={`px-4 py- rounded-lg ${bgColor} ${className} ${textColor}`} {...props}>
        {children}
    </button>
  )
}

export default Button