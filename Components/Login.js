import { signIn } from 'next-auth/react'
import React from 'react'

const Login = () => {
  return (
    <div className=' justify-around items-center flex flex-col mt-40'>
      
      <img className=" mb-30 " src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Facebook2022.svg" 
      alt="2021 Facebook icon.svg" height={240} width={240}/>   

      <a onClick = {signIn} className="px-20 py-4 z-10 cursor-pointer
      text-2xl mt-16 bg-blue-500 rounded-md text-white"> 
        Login
      </a>   
    </div>
  )
}

export default Login