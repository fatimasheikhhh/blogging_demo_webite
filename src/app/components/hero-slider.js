"use client";
import { useState, useEffect } from 'react';
import Link from "next/link";

const Slider = () => {
    const sentences = [
        "Wonderful Event",
        "Fantastic Tour",
        "Remarkable Journey",
        "Life is what happens when you're busy making other plans.",
        "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "Success is not how high you have climbed, but how you make a positive difference to the world.",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us."
    ];

    const [typedSentence, setTypedSentence] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const typeSentence = (sentence) => {
        setTypedSentence('');
        let index = 0;
        const interval = setInterval(() => {
            if (index < sentence.length) {
                setTypedSentence((prev) => prev + sentence[index]);
                index++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
                }, 2000);
            }
        }, 100);
    };
    useEffect(() => {
        typeSentence(sentences[currentIndex]); 
    }, [currentIndex]);
    useEffect(() => {
        typeSentence(sentences[currentIndex]);
    }, []);
    return (
        <div className='relative w-full h-screen overflow-hidden'>
            <img 
                src='https://travel-blog-is-here.vercel.app/images/hero_Image.jpg' 
                alt="hero slider" 
                className="absolute top-0 left-0 w-full h-full object-cover z-0" 
            />
            <div className="absolute bottom-10 right-10 left-10 z-10">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-center text-white text-3xl">Explore the Colorful World</h1>
                    <div className="bg-pink-600 w-40 h-2 mx-auto my-4 rounded-xl"></div>
                    <h1 className="text-center text-white text-4xl font-bold">{typedSentence}</h1>
                    <button className="bg-pink-600 rounded-lg lg:h-[40px] h-[30px] mt-2">
                        <Link href='/more'>
                            <span className="lg:p-3 p-3 text-white font-bold text-2xl mt-4">Learn More</span>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Slider;
