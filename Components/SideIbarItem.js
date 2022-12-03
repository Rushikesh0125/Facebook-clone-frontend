import React from 'react'

const SideIbarItem = ({Icons, value}) => {
  return (
    <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
      <Icons className="w-8 h-8 text-blue-500"/> 
      <p className="sm:inline-flex hidden font-medium"> {value} </p>
    </div>
  )
}

export default SideIbarItem