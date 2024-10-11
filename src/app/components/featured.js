import { FeaturedImages } from "../datasets/data";

const Featured=()=>{
    return (
        <>
            <div className="container mt-5">
                <div className="flex flex-col justify-center items-center p-4 ">
                    <div className="mt-8">
                        <h1 className="text-4xl font font-bold">Featured By</h1>
                    </div>
                    <div className="bg-pink-600 w-20 h-1 mx-auto my-4 rounded-xl"></div>
                    <div className="grid grid-cols-4 gap-3 mt-5">
                        {
                            FeaturedImages.map((el,idx)=>(
                                <div key={idx}>
                                    <img src={el.image} alt={el.alt} className="h-[150px] w-[150] hover:scale-110 transition-transform duration-300 object-contain"/>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex mt-8">
                        <div className="container">
                            <p className="text-justify lg:text-md text-md p-3 lg:ml-14">We extend our heartfelt gratitude to our sponsors for their generous support and commitment. Your contributions have been invaluable in making our event a resounding success. Your partnership not only provides essential resources but also inspires us to reach new heights. We deeply appreciate your dedication and belief in our mission. Your involvement has made a significant impact, allowing us to create memorable experiences and achieve our goals. Thank you for your unwavering support and for being a crucial part of our journey. We look forward to continuing this fruitful collaboration and making even greater strides together in the future. Your trust and encouragement empower us to strive for excellence and make a positive difference. Your support has not only enabled us to host this event but has also strengthened our community and fostered a spirit of unity and progress. Each milestone we reach is a testament to your generosity and vision. Together, we have laid a strong foundation for future successes, and we are excited about the possibilities that lie ahead. Your commitment is the driving force behind our efforts, and we are honored to have you by our side.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Featured;