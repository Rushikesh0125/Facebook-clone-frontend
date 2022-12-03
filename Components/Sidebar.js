import React from 'react'
import {ImUsers} from "react-icons/im";
import SideIbarItem from './SideIbarItem';
import { MdGroup, MdOutlineOndemandVideo, MdOutlineExpandMore } from 'react-icons/md';
import { AiOutlineShop } from 'react-icons/ai';
import { BsStopwatch } from 'react-icons/bs';
import { useSession } from 'next-auth/react';

const Sidebar = () => {
  const {data : session} = useSession();
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]">
    
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        <img className='rounded-full w-8 h-8' src={session?.user.image}/>
        <p className="sm:inline-flex hidden font-medium"> {session?.user.name} </p>
      </div>
       
      <SideIbarItem Icons = {MdGroup} value="Groups"/>

      <SideIbarItem Icons = {MdOutlineOndemandVideo} value="Watch"/>

      <SideIbarItem Icons = {AiOutlineShop} value="Marketplace"/>

      <SideIbarItem Icons = {BsStopwatch} value="Memories"/>

      <SideIbarItem Icons = {MdOutlineExpandMore} value="see more"/>
    </div>
  )
}

export default Sidebar