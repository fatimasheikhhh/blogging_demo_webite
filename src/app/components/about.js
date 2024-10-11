"use client"
import { useEffect } from "react";
import { useState } from "react";
const AboutSection=()=>{
        const [showMore, setShowMore] = useState(false);
      
        const handleShowMore = () => {
          setShowMore(!showMore);
        }
    return (
        <>
            <div className="container-fluid p-0 mt-8 bg-gray-200">
                <div className="container mx-auto p-5">
                    <div className="grid lg:grid-cols-2 grid-cols-1">
                        <div className="flex flex-col max-w-full pl-6 lg:pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-48">
                            <div>
                                <h1 className="text-6xl text-bold font-serif">About Us</h1>
                            </div>
                            <div className="bg-pink-600 w-40 h-1  rounded-xl flex justify-center items-center mt-4"></div>
                            <div className="mt-4">
                                <p className="text-md text-gray-600 font-sans text-justify py-6">Welcome to Travel Blog! We are avid travelers with a passion for exploring the world and sharing our adventures. Our journey began in 2024, when we decided to turn our wanderlust into a way of life and document every step along the way. We believe that travel is not just about ticking off places from a bucket list, but about immersing ourselves in diverse cultures, making meaningful connections, and creating unforgettable memories.</p>
                            </div>
                            <div className="mt-2">
                            {showMore && (
                                <p className="text-md text-gray-600 font-sans text-justify py-6">
                                Our love for travel started with a spontaneous trip to [Destination] that opened our eyes to the beauty and diversity of the world. Since then, we’ve traveled to over [Number] countries and countless cities, each with its own unique charm and stories. Our blog is a culmination of years of adventure, learning, and a desire to inspire others to explore the globe.</p>
                            )}
                            <button onClick={handleShowMore} className="text-pink-600 text-xl hover:text-blue-900">
                                {showMore ? "Show Less" : "Show More about it"} <i class="fa-solid fa-arrow-right mt-2"></i>
                            </button>  
                        </div>
                                     
                        </div>
                        <div className="flex flex-col  pl-6 lg:pt-16  pb-16 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-48">
                            <img src="https://travel-blog-is-here.vercel.app/_next/image?url=%2Fimages%2Fabout_us.jpg&w=640&q=75" alt="" className="w-[430px] h-[320px] object-cover rounded-md" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutSection;