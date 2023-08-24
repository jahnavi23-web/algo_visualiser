import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-7xl mt-[50px] my-auto min-h-[470px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between'>
    <div className='w-[95%] align-middle mx-auto  border-solid border-gray-700 border-[1px] rounded-lg min-h-[380px] shadow-xl shadow-gray-700'>
    {children}
    </div>
  </div>
  )
}

export default Container