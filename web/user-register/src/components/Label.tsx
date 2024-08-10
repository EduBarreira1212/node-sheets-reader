import React from 'react'

interface ILabelProps {
    children: string
}

const Label = ({children}: ILabelProps) => {
  return (
    <label className="text-lg font-medium">{children}</label>
  )
}

export default Label;