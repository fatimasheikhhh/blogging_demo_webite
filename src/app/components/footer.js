import Link from "next/link";
import Menu from "../datasets/data";

const Footer=()=>{
    return  (
        <>
            <div className="container-fluid p-0 bg-black mt-8">
                <div className="flex flex-col justify-center items-center p-4 ">
                    <div className="mt-8 text-white font-serif">
                        <h1 className="text-4xl">TRAVEL BLOG</h1>
                        <h1 className="text-lg mx-6">Adventurous Blogger</h1>
                    </div>
                    <div className="grid grid-cols-4 gap-6 p-6 mt-5">
                        {
                            Menu.map((el, idx) => (
                                <div key={idx}>
                                    <Link href={el.link}>
                                        <span className='text-md text-white hover:text-pink-600'>{el.title}</span>
                                    </Link>
                                </div>
                                        
                            ))
                        }
                    </div>
                    <div className="bg-white w-full  h-1 mx-auto  rounded-xl mt-8"></div>
                    <div className="flex gap-5 p-5">
                        <div>
                            <i class="fa-brands fa-youtube text-white hover:text-pink-600"></i>
                        </div>
                        <div>
                            <i class="fa-brands fa-facebook text-white  hover:text-pink-600"></i>
                        </div>
                        <div>
                            <i class="fa-brands fa-instagram text-white  hover:text-pink-600"></i>
                        </div>
                        <div>
                            <i class="fa-brands fa-twitter text-white  hover:text-pink-600"></i>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="text-white">Copyright © 2024 Travel Blogger | Powered by Outdoor Adventure</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Footer;