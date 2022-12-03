import React from 'react'
import Face from '../Media/Facebook.png';
import {BsSearch} from "react-icons/bs";
import {HiOutlineHome} from "react-icons/hi";
import {BsFlag} from "react-icons/bs";
import {MdOutlineVideoLibrary, MdOutlineExpandMore} from "react-icons/md";
import {BsShop} from "react-icons/bs";
import {CgMenuGridO} from "react-icons/cg";
import {AiFillMessage, AiFillBell} from "react-icons/ai";
import { useSession } from 'next-auth/react';

const Header = () => {
  const {data : session} = useSession();
  return (
    <div className='bg-white flex item-center p-2 shadow-md top-0 sticky z-50 h-16'>
      {/* left */}
      <div className='flex min-w-fit'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png" alt="2021 Facebook icon.svg"/>      
        <div className="flex items-center space-x-2 rounded-full ml-2 px-2 bg-gray-100 text-gray-500">
          <BsSearch size={20}/>
          <input className="hidden bg-transparent lg:inline-flex focus:outline-none" type= "text" placeholder='search on facebook'/>
        </div>
      </div>
      {/* {center} */}
      <div className="flex flex-grow justify-center mx-2">
        <div className="flex items-center">
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <HiOutlineHome className="mx-auto" size={25}/>
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <BsFlag className="mx-auto" size={25}/>
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <MdOutlineVideoLibrary className="mx-auto" size={25}/>
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <BsShop
             className="mx-auto" size={25}/>
          </div>
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center justify-end min-w-fit space-x-2">
        <img className='rounded-full' src= {session?.user.image} height={40} width={40}/>      
        <p className="hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs">
          {session?.user.name.split(" ")[0]}
        </p>
        <CgMenuGridO size={20} 
        className="hidden h-10 w-10 lg:inline-flex bg-gray-200 text-gray-500 
        rounded-full p-2 cursor-pointer hover:bg-gray-300 "/>
        <AiFillMessage size={20} 
        className="hidden h-10 w-10 lg:inline-flex bg-gray-200 text-gray-500 
        rounded-full p-2 cursor-pointer hover:bg-gray-300 "/>
        <AiFillBell size={20} 
        className="hidden h-10 w-10 lg:inline-flex bg-gray-200 text-gray-500 
        rounded-full p-2 cursor-pointer hover:bg-gray-300 "/>
        <MdOutlineExpandMore size={20} 
        className="hidden h-10 w-10 lg:inline-flex bg-gray-200 text-gray-500 
        rounded-full p-2 cursor-pointer hover:bg-gray-300 "/>


      </div>
    </div>
  )
}

export default Header;