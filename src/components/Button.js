import React from 'react'

const Button = ({name}) => {
  return (
    <div>
    <button className='px-5 py-1 m-1   bg-gray-300 hover:bg-black hover:text-white rounded-lg'>{name}</button>
    </div>
  )
}
 
export default Button