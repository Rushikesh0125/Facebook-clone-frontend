import React from 'react'
import { RiVideoAddFill } from 'react-icons/ri'
import { BsSearch } from 'react-icons/bs'
import { CgMoreAlt } from 'react-icons/cg'
import Contacts from './Contacts'

const RightSidebar = () => {
  return (
    <div className='hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg-min-w-[250px]'>
      <div className='items-center flex text-gray-500'>
        <p className='flex text-lg font-semibold flex-grow'>
          contacts
        </p>
        <div className='flex space-x-1 px-2'>
          <div className='rounded-full hover:bg-gray-200 cursor-pointer p-2'>
            <RiVideoAddFill/>
          </div>
          <div className='rounded-full hover:bg-gray-200 cursor-pointer p-2'>
            <BsSearch/>
          </div>
          <div className='rounded-full hover:bg-gray-200 cursor-pointer p-2'>
            <CgMoreAlt/>
          </div>
        </div>
      </div>
      <Contacts src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png" 
      name='Rushikesh' status="Online"/>
      <Contacts src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png" 
      name='Taani' status="Online"/>
      <Contacts src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png" 
      name='Rutvi' status="Offline"/>
    </div>
  )
}

export default RightSidebar