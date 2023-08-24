import React from 'react'

export default function BtnCommon({name , type , extraclass ,clkfun}) {
  return (
    <button  type={type} className={`bg-black text-white rounded-xl text-sm px-3 py-2 ${extraclass?extraclass:""}`} onClick={clkfun?clkfun:""}>     {name}
    </button>
  )
}
