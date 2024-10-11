const Adventure = () => {
    return (
      <>
        <div className="container-fluid p-0 mx-auto">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left column */}
              <div className="relative overflow-hidden bg-white">
                <div className="flex flex-col justify-center items-center pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-48">
                  <div className="max-w-full sm:max-w-lg px-4">
                    <div>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mt-8 text-center md:text-left">
                        Adventures are finally here
                      </h1>
                    </div>
                    <div className="mt-5">
                      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-serif text-center md:text-left">
                        This year, our new achievement will shelter you from the harsh elements of a world that does not care if you develop or die.
                      </p>
                    </div>
                    <div className="mt-6 flex justify-center md:justify-start">
                      <button className="bg-pink-600 rounded-md h-[50px] w-[160px] hover:bg-pink-800">
                        <span className="p-2 text-white font-bold">Learn More</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Right column */}
              <div className="mt-8 md:mt-0">
                <div className="grid grid-cols-3 gap-4 px-4">
                  <div className="flex flex-col gap-4 mt-4">
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_PMm5mJ-lbb7xR8WoMpsNpYKCj9yXJNY0w&s"
                        alt=""
                        className="h-[300px] w-[200px] rounded-md object-cover"
                      />
                    </div>
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ZMVGxjurh3omjWVQ9OmxnpAI23Vgzy1waw&s"
                        alt=""
                        className="h-[300px] w-[200px] rounded-md object-cover"
                      />
                    </div>
                  </div>
  
                  <div className="flex flex-col gap-4">
                    <div>
                      <img
                        src="https://travel-blog-is-here.vercel.app/_next/image?url=%2Fimages%2Fphoto2.jpg&w=128&q=75"
                        alt=""
                        className="h-[200px] w-[200px] rounded-md object-cover"
                      />
                    </div>
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZyoPjmUx5RcePXCx7lYLyQz2urUS_Vthj_g&s"
                        alt=""
                        className="h-[300px] w-[200px] rounded-md object-cover"
                      />
                    </div>
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGN-QRflsKQDGsz3GBDdhNdQPFXQgR9Ou0pQ&s"
                        alt=""
                        className="h-[200px] w-[200px] rounded-md object-cover"
                      />
                    </div>
                  </div>
  
                  <div className="flex flex-col gap-4 mt-4">
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaPlALBw8MTHyNSUYZBH0yd0vtz4U1hIp7Uw&s"
                        alt=""
                        className="h-[300px] w-[200px] rounded-md object-cover"
                      />
                    </div>
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9Tj2ZEgpVkIqtmN-h0MD9O24VUrHe69yTA&s"
                        alt=""
                        className="h-[300px] w-[200px] rounded-md object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Adventure;
  