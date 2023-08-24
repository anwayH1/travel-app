import React from 'react'

export default function BtnCommon({name , type , extraclass ,clkfun}) {
  return (
    <button  type={type} className={`bg-black text-white rounded-xl text-[13px] px-2 py-1 ${extraclass?extraclass:""}`} onClick={clkfun?clkfun:""}>     {name}
    </button>
  )
}
