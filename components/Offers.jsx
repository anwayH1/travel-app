import React from 'react'
import { AiFillHeart , TbMessageCircle2Filled} from "../icons"
function Offers() {
  return (
    <div class="Offers">
    <h1 id="Special" className='text-3xl font-bold'>Best Tour Package Offers</h1>
    <p>Choose Your Next Destination</p>
    <div class="cards">
      <div class="card">
        <h3>Lotus Temple-Delhi</h3>
        <div class="img_text">
          <img src="/assets/img/lotus_temple.jpg" alt=""/>
          <h4>Included: Air Tickets,Transport, Hotels, Breakfast, Tours</h4>
        </div>
        <div class="cont_bx">
          <div class="price">
            <div class="heart_chat">
              
              <AiFillHeart  className='text-red-500'/><span>87415</span>
        <TbMessageCircle2Filled className='text-blue-400' /><span>4986</span>
            </div>
            <div class="info_price">
              <a href="">More Info</a>
              <h4>$3627</h4>
            </div>
          </div>
          <div class="days">5 Days <br/>IND</div>
        </div>
      </div>
      <div class="card">
        <h3>Pyramids-Egypt</h3>
        <div class="img_text">
          <img src="/assets/img/piramids.jpg" alt=""/>
          <h4>Included: Air Tickets,Transport, Hotels, Breakfast, Tours</h4>
        </div>
        <div class="cont_bx">
          <div class="price">
            <div class="heart_chat">
             
              <AiFillHeart  className='text-red-500'/><span>78415</span>
        <TbMessageCircle2Filled className='text-blue-400' /><span>6736</span>
            </div>
            <div class="info_price">
              <a href="">More Info</a>
              <h4>$8990</h4>
            </div>
          </div>
          <div class="days"> 10 Days <br/>CAI</div>
        </div>
      </div>
      <div class="card">
        <h3>Burj Khalifa-Dubai</h3>
        <div class="img_text">
          <img src="/assets/img/pexels-photo-3243028.jpeg" alt=""/>
          <h4>Included: Air Tickets,Transport, Hotels, Breakfast, Tours</h4>
        </div>
        <div class="cont_bx">
          <div class="price">
           

            <div class="heart_chat">
        <AiFillHeart  className='text-red-500'/><span>49415</span>
        <TbMessageCircle2Filled className='text-blue-400' /><span>49415</span>
            
      
            </div>
            <div class="info_price">
              <a href="">More Info</a>
              <h4>$4590</h4>
            </div>
          </div>
          <div class="days">5 Days <br/>DXB</div>
        </div>
      </div>
      <div class="card">
        <h3>Mountains-Vietnam</h3>
        <div class="img_text">
          <img src="/assets/img/mountain.jpg" alt=""/>
          <h4>Included: Air Tickets,Transport, Hotels, Breakfast, Tours</h4>
        </div>
        <div class="cont_bx">
          <div class="price">
            <div class="heart_chat">
        <AiFillHeart  className='text-red-500'/><span>52215</span>
        <TbMessageCircle2Filled className='text-blue-400' /><span>7906</span>
            </div>
            <div class="info_price">
              <a href="">More Info</a>
              <h4>$2117</h4>
            </div>
          </div>
          <div class="days">7 Days <br/>SGN</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Offers
