import { VisitData } from "../datasets/data";

const VisitPlace=()=>{
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="flex flex-col justify-center items-center p-4">
                    <div className="mt-8">
                        <h1 className="text-3xl font font-bold text-center font-serif">Best Places to Visit</h1>
                    </div>
                    <div className="bg-pink-600 w-20 h-1 mx-auto my-4 rounded-xl"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {
                            VisitData.map((el, idx) => (
                            <div key={idx} className="relative group">
                                <img
                                src={el.image}
                                alt={el.alt}
                                className="w-full h-64 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent rounded-md">
                                <h1 className="text-white text-4xl font-bold bottom-10">{el.title}</h1>
                                <p className="text-white text-md bottom-10 font-sans">{el.subtitle}</p>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default VisitPlace;