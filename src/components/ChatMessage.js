import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
      <div>
          <img className="h-8" alt="user-icon"
              src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          />
      </div>
      <span className='font-bold px-2'>
            {name}
      </span>
      <span>
            {message}
      </span>
      </div>
  )
}

export default ChatMessage