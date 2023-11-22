import React from 'react'

export const Divider = ({my,b,color }) => {

  return (
    <div className= {`divider ${my}`} >
    <div className="flex items-center">
      <hr className= {`flex-grow ${b} ${color}`} />
    </div>

  </div>
  )
}
