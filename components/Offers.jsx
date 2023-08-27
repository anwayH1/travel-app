import React from 'react'
import Image from 'next/image'
import { AiFillHeart , TbMessageCircle2Filled} from "../icons"
import {offersDestination} from "@constant"
const OfferCard = ({name,img,descrip,likecount,msgcount,price,days,country})=>{
  return <div className='p-3 flex flex-col justify-center items-center '>
  <div className="bg-green-300 text-green-900 p-2 px-4 w-fit h-fit rounded-full font-bold">{name}</div>
  <div className="mt-2">
    {/* for images */}
    <div className="relative w-[200px]">
    <Image src={img} width={100} height={200} className='h-[250px] w-[200px] bg-gray-500 rounded-md  '/>
<div className="absolute bottom-0 left-0 right-0 text-white bg-gray-700 font-semibold">{descrip}</div>
    </div>
    {/* for like container */}
    <div className="flex flex-row justify-between p-[6px]  border border-t-0 border-gray-500 rounded-md">
    <div className="">
    <div className="flex">
      <div className="flex space-x-1">
        <AiFillHeart className='text-red-500'/>
      <span>{likecount}</span>
      </div>
      <div className="flex space-x-1 ">
       <TbMessageCircle2Filled className='text-blue-400'/>
        <span>{msgcount}</span>
      </div>
    </div>
    {/* for price and more link container */}
    <div className="flex font-semibold space-x-3">
      <button className="">More Info</button>
      <div className="text-green-300">${price}</div>
    </div>
    </div>
    <button  className='flex flex-col justify-center items-center text-[8px] w-[40px] h-[40px] bg-black rounded-full text-white p-1' ><span style={{fontSize:"7px"}}>{days}Days</span>
    <span style={{fontSize:"7px"}}>{country}</span>
    </button>
    </div>

  </div>
  </div>
}
function Offers() {
  return (

    <div className="">
      <div className="flex flex-col justify-center items-center">
      <h1 className='text-[24px] md:text-[29px] lg:text-[38px] font-semibold'>Best Tour Package Offers</h1>
      <h3 className='text-[17px] md:text-[19px] lg:text-[21px] font-semibold'>Choose Your Next Destination</h3>
      </div>
    <div className='flex flex-row justify-center items-center flex-wrap'>

      {offersDestination.map((data, i)=>(
<OfferCard key={i} {...data}/>

      ))}
    </div>



    </div>
  )
}

export default Offers
