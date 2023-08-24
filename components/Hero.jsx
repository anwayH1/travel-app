import React from 'react'
import {formInputData ,datacard} from '@constant'
import BtnCommon from './BtnCommon'
import Image from 'next/image'
import Offers from './Offers'
import Desti from './Desti'
import Foooter from './Footer'
export default function Hero() {
  return (
    <div className= 'bghero h-[250px] md:h-[510px] rounded-2xl  relative'>
<div className="px-[25px] py-[40px] w-full lg:w-1/3">
  <h1 className="text-[32px]  md:text-[42px] font-bold">Don't be a Tourist , Be a Traveler.</h1>
  <p className='mt-[20px]'>Finding new possibilities to explore the world.</p>


  {/* for animation btn */}
  <button type='button' class="mt-[35px] px-5 py-2.5 relative  group overflow-hidden font-medium bg-purple-50 text-blue-300 inline-block rounded-full border-1 border-black">
<span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-300 opacity-70 group-hover:h-full "></span>
<span class="relative group-hover:text-white text-[12px]">  Start your Search
</span>
</button>
</div>
{/* search box start here */}
    <div className=" bg-white mx-5  p-3 rounded-md flex flex-wrap md:flex-row shadow-md cursor-all-scroll justify-between w-fit items-center ">
      {formInputData.map((inp,i)=>(

        <div key={i} className="">
          <h3 className='text-[16px] font-semibold  '>{inp.title}</h3>
          <input type={inp.type} className='focus:outline-none text-[13px]' placeholder={inp.place} />
        </div>
      ))}
<button className='bg-black text-white px-5 py-2 h-fit w-fit rounded-full text-[13px]'>Explore Now</button>
    
    </div>

{/* for glass morphism effect */}
<div className="  relative ">

<div className="absolute h-[265px] w-[95%]  bg-white opacity-50  backdrop-blur-xl  z-[-1] top-[-30px] mx-3 md:mx-[50px]  shadow-xl  right-0 left-0 rounded-2xl ">
  </div>
{/* for all searche item container  */}
<div className="mx-3 md:mx-[50px]">
<h3 className='text-[20px] font-bold ml-2 '>Countries to visit</h3>
{/* for countries container */}
<div className=" scrollh flex flex-row  h-[250px] ">

  {
datacard.map((data,i)=>(

<div key={i} className="flex flex-col  w-[220px] w-max-[220px] mx-3 w-min-[220px]  h-[90px]">
  <div className="flex flex-row justify-start">
<div className={"font-bold text-[14px]"}>{data.countryname}</div>

<Image src={data.countrylogo} width={25} height={25} className='ml-2 rounded-md w-[18px] h-[18px]' alt='/'/>

  </div>
  <div className="w-[220px] h-[90px]  ">
  <Image src={data.cityimg} width={220} height={90} className='w-[220px] h-[90px] overflow-hidden rounded-md ' alt='/' />
  </div>
 
  <div className="flex flex-row justify-between mt-3">
    <BtnCommon name={"Readnow"} extraclass={"py-[0px] w-[100px] h-[30px]"}/>
    <div className="flex flex-col">
      <span className='font-semibold'>{data.cityname}</span>
      <span className='font-bold text-green-400'>{data.price}</span>
    </div>
  </div>
</div>
))
  }
</div>

</div>

</div>
{/* write your offer comaponents here */}
<Offers />
<Desti />
<Foooter />

    </div>
  )
} 
