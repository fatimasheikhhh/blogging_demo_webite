const Travel = () => {
    return (
      <>
        <div className="bg-gray-200">
          <div className="container-fluid mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 p-3 gap-6">
              <div className="flex flex-col justify-center items-center mt-8">
                <div className="mt-4">
                  <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">
                    Travel With Us
                  </h1>
                </div>
                <div className="bg-pink-600 w-16 md:w-20 h-1 mx-auto my-4 rounded-xl"></div>
                <div className="flex mt-3 px-4">
                  <div className="container">
                    <p className="text-justify text-sm lg:text-md lg:ml-14">
                      Embark on an unforgettable journey with us, where adventure
                      and luxury converge to create extraordinary travel
                      experiences. Our meticulously crafted itineraries are
                      designed to cater to your unique interests and preferences,
                      ensuring that every moment of your trip is nothing short of
                      spectacular. Whether you are seeking the thrill of
                      exploring uncharted territories, the serenity of pristine
                      landscapes, or the rich cultural immersion in exotic
                      destinations, our expert team is dedicated to making your
                      travel dreams a reality. We prioritize your comfort and
                      satisfaction, providing personalized services that go above
                      and beyond.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 p-4">
                <div className="p-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <img
                        src="https://travel-blog-is-here.vercel.app/_next/image?url=%2Fimages%2Fastro.jpg&w=128&q=75"
                        alt=""
                        className="rounded-md w-full transition-transform duration-300 object-contain hover:scale-110"
                      />
                    </div>
                    <div>
                      <img
                        src="https://travel-blog-is-here.vercel.app/_next/image?url=%2Fimages%2Fslider1.jpg&w=128&q=75"
                        alt=""
                        className="rounded-md w-full transition-transform duration-300 object-contain hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <img
                      src="https://travel-blog-is-here.vercel.app/_next/image?url=%2Fimages%2Fphoto2.jpg&w=128&q=75"
                      alt=""
                      className="rounded-md w-full transition-transform duration-300 object-contain hover:scale-110"
                    />
                  </div>
                </div>
                <div className="p-2">
                  <img
                    src="https://travel-blog-is-here.vercel.app/_next/image?url=%2Fimages%2Fmountain.jpg&w=128&q=75"
                    alt=""
                    className="rounded-md w-full transition-transform duration-300 object-contain hover:scale-110"
                  />
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <img
                        src="https://travel-blog-is-here.vercel.app/_next/image?url=%2Fimages%2Fabout_us.jpg&w=128&q=75"
                        alt=""
                        className="rounded-md w-full transition-transform duration-300 object-contain hover:scale-110"
                      />
                    </div>
                    <div>
                      <img
                        src="https://travel-blog-is-here.vercel.app/_next/image?url=%2Fimages%2Fphoto3.jpg&w=128&q=75"
                        alt=""
                        className="rounded-md w-full transition-transform duration-300 object-contain hover:scale-110"
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
  
  export default Travel;
  