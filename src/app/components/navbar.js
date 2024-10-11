"use client";
import { useState } from "react";
import Link from "next/link";
import Menu from "../datasets/data";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <>
            <div className="container-fluid bg-gray-800">
                <div className="p-6">
                    <nav className="flex items-center justify-between">
                        <div className="text-white lg:ml-16">
                            <h1 className="text-2xl font-bold">OUTDOOR</h1>
                            <h1 className="text-md">ADVENTURE</h1>
                        </div>
                        <div className="lg:mr-12">
                            <ul className={`lg:flex md:flex lg:items-center gap-6 ${menuOpen ? 'top-16 opacity-100' : 'top-[-400px] opacity-0'} lg:opacity-100 lg:top-0 transition-all duration-300`}>
                                {
                                    Menu.map((el, idx) => (
                                        <li key={idx} className="gap-4 text-slate-700 font-medium hover:text-orange-600">
                                            <Link href={el.link}>
                                                <span className='text-lg text-white hover:text-pink-600'>{el.title}</span>
                                            </Link>
                                        </li>
                                        
                                    ))
                                }
                                <li>
                                    <button className="bg-pink-600 rounded-md lg:h-[35px] h-[20px]">
                                        <Link href='/action'>
                                            <span className="lg:p-3 p-2 text-white font-bold">TAKE ACTION</span>
                                        </Link>
                                    </button> 
                                </li>
                            </ul>
                        </div>
                        <div className="lg:hidden">
                            <button onClick={toggleMenu} className="text-3xl text-orange-500">
                                <i className={menuOpen ? "fa-solid fa-times text-white" : "fa-solid fa-bars text-white"}></i>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
