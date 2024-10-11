const Journey=()=>{
    return (
        <>
            <div className='relative w-full h-screen overflow-hidden bg-black inset-0 mt-8 p-5'>
                <img 
                    src='https://travel-blog-is-here.vercel.app/_next/image?url=%2Fimages%2Fmy_journey.jpg&w=1920&q=100' 
                    alt="hero slider" 
                    className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50 " 
                />
                <div className="absolute lg:bottom-16 right-10 left-10 z-10 object-cover">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-center text-white text-5xl font-bold pb-4 font-sans">My Journey</h1>
                    <div className="bg-pink-600 w-[100px] h-[5px] mt-2 mb-8"></div>
                    <p className="text-center text-white text-xl w-[500px]">Welcome to my corner of the internet! My journey into the world of vlogging began in 2024, driven by an insatiable curiosity and a desire to capture the essence of the places I visit and the people I meet. Traveling has always been about more than just the destination for me. It about the thrill of the unknown, the joy of discovery, and the connections made along the way. On this site, you'll find a diverse collection of vlogs that capture the beauty and diversity of our world.</p>
                </div>
                </div>
            </div>
        </>
    )
}
export default Journey;