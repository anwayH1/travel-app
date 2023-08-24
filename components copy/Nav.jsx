"use client"

import Link from 'next/link'
import Image from 'next/image' 
import { useState ,useEffect } from 'react'
import {signIn ,signOut , useSession ,getProviders} from 'next-auth/react'
const Nav = () => {
const {data:session} = useSession() ;


// const userLoggdin = true

const [providers , setProviders] =useState(null)

useEffect(()=>{

const  setPro = async()=>{
    const response = await getProviders() ;

    setProviders(response)
}

setPro()

},[])


  return (<div className="">

     {/* <nav className='flex gap-5 bg-red justify-end items-center py-6 text-xl font-semibold text-slate-50 drop-shadow-lg  bg-orange-300 px-20'> */}

<nav>
      <h4>
        <Image  src={'/assets/Screenshot_2023-08-20_at_11.16.32-removebg-preview.png'} width={40} height={40} alt="logo" className="logo" /> 
        Travelio</h4>
      <ul id="menu_bx">
        <li><a href="#">Discover</a></li>
        <li><a href="https://discord.gg/Fmzh2Rpq">Community</a></li>
        <li><a href="#Special">Special Deals</a></li>
        <li><a href="https://anway.carrd.co/">About Us </a></li>
        {/* <li><a href="#">Register</a></li> */}
        {/* session btn start her ! */}
        {session?.user ?
<>
<li><a  onClick={()=>signOut()}  className="text-red-500"href="#">LogOut</a></li>
<Image src={session?.user.image} className='rounded-full' width={40} height={40} alt='image' />
</>
:<>
{/* <button>Sign In</button> */}
{providers && 
Object.values(providers).map((provider)=>(
   <li><a key={provider.name}
    onClick={()=>signIn(provider.id)} href="#">Register</a></li>

))
     
}
</>
}
      </ul>
      <i className="bi bi-three-dots"></i>
    </nav>
  </div>



  )
}

export default Nav
