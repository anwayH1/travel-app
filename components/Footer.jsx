const Foooter =()=>{
return (
    <div className="flex flex-col justify-center items-center bg-blue-50 mt-4 ">
   <h3 className="font-semibold text-[26px] md:text-[32px] text-center">Subscribe & <br />
Get Special Discount</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laboriosam nihil</p>

<div className="shadow-2xl">
    <input type="text" placeholder="Enter Your Message" className="p-4 rounded-l-full focus:outline-none shadow-2xl w-[210px]"/>
    <button className="p-4 rounded-r-full bg-black text-white shadow-2xl w-[80px] hover:bg-green-700 ">Send</button>
</div>
    <div className="  text-black opacity-30  text-center w-full p-2 text-[12px] mt-3">
    © 2023 anway. All rights reserved.

        </div>
    </div>
)
}
export default Foooter ;