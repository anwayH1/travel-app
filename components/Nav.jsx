"use client"

import Link from 'next/link'
import Image from 'next/image' 
import { useState ,useEffect } from 'react'
import {signIn ,signOut , useSession ,getProviders} from 'next-auth/react'
import {navlinks} from '@constant'
import BtnCommon from './BtnCommon'
import{GrMenu} from 'react-icons/gr' 
import {TfiClose} from 'react-icons/tfi'
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

const [isToggleMenu , setIsToggleMenu] = useState(false)
  return (<div className="">

     {/* <nav className='flex gap-5 bg-red justify-end items-center py-6 text-xl font-semibold text-slate-50 drop-shadow-lg  bg-orange-300 px-20'> */}

<nav className='flex  flex-row  items-center w-full justify-between py-2'>
      <div className="logo flex flex-row items-end">
      <Image  src={'/assets/Screenshot_2023-08-20_at_11.16.32-removebg-preview.png'} width={40} height={40} alt="logo" className="logo" /> 
      <span className='font-semibold' >Travilo</span>
      </div>
        
        {/* for pc devices */}
      <div id="menu_bx  " className='hidden md:flex flex-row  text-slate-600  items-center '>
        {navlinks.map((link) =>(
          <Link href={link.link} className='px-3 text-[12px]' >{link.name}</Link>
        ))}
      
      
        {session?.user ?
<>
<button  onClick={()=>signOut()}  className="text-red-500 text-[12px]"href="/">LogOut</button>
<Image src={session?.user.image} className='rounded-full bg-red-600 ' width={40} height={40} alt='image' />
</>
:<>
{providers && 
Object.values(providers).map((provider)=>(
   <BtnCommon  key={provider.name} 
   name="Register"
   type="button"
   extraclass={"rounded-full text-[12px] hover:bg-green-800 py-1"}
  
    clkfun={()=>signIn(provider.id)} 
    />

))
     
}
</>
}
      </div>
      {/* menu icons */}
      <button 
      onClick={()=>setIsToggleMenu(pre=>!pre)}
      className='text-black  md:hidden'
      >{!isToggleMenu ? <GrMenu width={50} height={50} className='w-[28px] h-[28px]'  /> :<TfiClose width={50} height={50} className='w-[28px] h-[28px]'/>}</button>

{/* for the mobile devices */}
      <div id="menu_bx  " className= {`z-50 block md:hidden p-2 absolute top-[70px] right-2 shadow-xl bg-white rounded-lg ${isToggleMenu? "block" :"hidden"}`} >
      <div className=' flex
      flex-col  text-slate-600  items-center '>
        {navlinks.map((link ) =>(
          <Link href={link.link} className='px-3 text-[14px]' >{link.name}</Link>
        ))}
      
      
        {session?.user ?
<>
<button  onClick={()=>signOut()}  className="text-red-500 text-[12px]"href="/">LogOut</button>
<Image src={session?.user.image} className='rounded-full bg-red-600 ' width={40} height={40} alt='image' />
</>
:<>
{providers && 
Object.values(providers).map((provider)=>(
   <BtnCommon  key={provider.name} 
   name="Register"
   type="button"
   extraclass={"rounded-full text-[12px] hover:bg-green-800 py-[1px] w-[120px] h-[20px] px-2"}
  
    clkfun={()=>signIn(provider.id)} 
    />

))
     
}
</>
}
      </div>
     </div>
    </nav>
  </div>



  )
}

export default Nav
