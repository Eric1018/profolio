import React from 'react'
import { twMerge } from 'tailwind-merge'

const AnimateIcon = ({ Icon, className}) => {
  return (
    <div className={twMerge("flex absolute",className)}>
    <Icon className="text-white/80 " size={50} />
    </div>
  )
}

export default AnimateIcon
