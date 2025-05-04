import { FaArrowCircleRight , FaArrowCircleLeft  } from "react-icons/fa";
import { useState } from "react";


export function CarouselGame({ slides }) {
    const [current, setCurrent] = useState(0);

    const previousSlide = () => {
        setCurrent((current - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setCurrent((current + 1) % slides.length);
    };

    return (
        <div className="overflow-hidden relative w-full">
            <div
            className="flex transition ease-out duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
            >
            {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 flex flex-col items-center">
                <img src={slide.image} className="w-full h-[400px] object-contain" />
                <p className="text-white text-4xl text-bold mt-2">{slide.text}</p>
                </div>
            ))}
            </div>
    
            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-5">
            <button onClick={previousSlide}>
                <FaArrowCircleLeft size={30} />
            </button>
            <button onClick={nextSlide}>
                <FaArrowCircleRight size={30} />
            </button>
            </div>
        </div>
    );
}