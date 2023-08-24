import React from 'react'
import { AiFillHeart , TbMessageCircle2Filled} from "../icons"

function Desti() {
  return (
    <div className="destination">
    <div className="des_bx">
      <h4> Our Destination</h4>
      <p>Choose your next Destination</p>
      <li>USA</li>
      <li>India</li>
      <li>Brazil</li>
      <li>Dubai</li>
      <li>Singapore</li>
      <li>London</li>

      <h6>Included : Air ticket, Hotel, Airport Transfer, Breakfast, Tour and Many more!!</h6>
      <button>More info</button>


    </div>
    <div className="img_bx">
      <img src="/assets/img/Main_plan.png" alt=""/>
      <div className="msg">
        <img src="/assets/icon/40957686_prev_ui.png" alt=""/>
        <div className="cont">


          <h4>India</h4>
          <div className="icon flex flex-row text-sm">
      
            <AiFillHeart  className='text-red-500'/><span>98415</span>
        <TbMessageCircle2Filled className='text-blue-400' /><span>8057</span>
          </div>
        </div>
      </div>
      <div className="msg">
        <img src="/assets/icon/united-states.png" alt=""/>
        <div className="cont">


          <h4>United States</h4>
          <div className="icon flex flex-row text-sm">
           

            <AiFillHeart  className='text-red-500'/><span>78415</span>
        <TbMessageCircle2Filled className='text-blue-400' /><span>4986</span>
          </div>
        </div>
      </div>

    </div>


  </div>
  )
}

export default Desti
