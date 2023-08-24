import React from 'react'
import {destination} from "@constant"
import Image from 'next/image'
import { AiFillHeart , TbMessageCircle2Filled} from "../icons"


  const Flg =({logo ,name,likecount ,msgcount})=>(
    <div className="bg-white rounded-md shadow-md flex items-center justify-center p-2 px-4">
    <Image src={logo} width={28} height={28} className='w-[28px] h-[28px]'/>
  
    <div className="">
      <h4 className='text-[14px] font-semibold'>{name}</h4>
  <div className=" text-gray-500 flex">
    <AiFillHeart className='text-red-500' /> {likecount} {" "} <TbMessageCircle2Filled  className='text-blue-300'/> {msgcount}
  </div>
    </div>
  </div>
  )
function Desti() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center mt-[50px]">

    <div className='flex flex-col justify-center items-center md:justify-normal md:items-start w-full md:w-[300px] md:mr-8'>
      <h1 className='text-[28px] font-semibold'>Our Destination</h1>
      <p>Choose your next Destination</p>
      <div className="space-y-2">

      {destination.map((data, i)=>(
        <div key={i} className="font-semibold text-gray-600 ">{data}</div>
      ))}
      </div>
<p>Included : Air ticket, Hotel, Airport Transfer, Breakfast, Tour and Many more!!</p>
<button className='bg-black text-[12px] p-2  rounded-full text-white w-fit px-6'>More Info</button>
    </div>
    {/* for image  conainer*/}
    <div className="relative">
      <Image src={"/assets/img/Main_plan.png"} width={340} height={420} className="rounded-md w-[340px] h-[420px]"/>
      <div className="z-10 absolute top-[50px] right-[0px] md:right-[-30px]">
      <Flg name="India" likecount={98415 } msgcount={8057} logo={"/assets/icon/40957686_prev_ui.png"} className=""/>
      </div>

      <div className="z-10 absolute top-[230px] left-[0px] md:left-[-30px]">
      <Flg name="United States" likecount={78415 } msgcount={4986} logo={"/assets/icon/united-states.png"} className=""/>
      </div>
    </div>
    
    </div>
  )
}



export default Desti
