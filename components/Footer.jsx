const Foooter =()=>{
return (
    <div className="flex flex-col justify-center items-center bg-blue-50 mt-4 ">
   <h3 className="font-semibold text-[32px] text-center">Subscribe & <br />
Get Special Discount</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laboriosam nihil</p>

<div className="shadow-2xl">
    <input type="text" placeholder="Enter Your Message" className="p-4 rounded-l-full focus:outline-none shadow-2xl w-[210px]"/>
    <button className="p-4 rounded-r-full bg-black text-white shadow-2xl w-[80px] ">Send</button>
</div>
    <div className="bg-black text-white text-center w-full p-5 text-[16px] mt-3">This website has been created by @me</div>
    </div>
)
}
export default Foooter ;