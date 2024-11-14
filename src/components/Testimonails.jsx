import { useState } from 'react';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jpg';
import SectionHeader from './SectionHeader';

const testimonials = [
    {
        id: 1,
        text: "The woodwork delivered by Halchemy Interior was meticulously designed and executed, perfectly reflecting our vision and enhancing our space's overall aesthetic.",
        name: "phani sumanth kommoju",
        image: profile1,
        rating: 5,
    },
    {
        id: 2,
        text: "Beautiful and high-quality craftsmanship! Halchemy Interior exceeded our expectations in every way possible.",
        name: "Raja Rajeswari Challa",
        image: profile2,
        rating: 5,
    },
];

const TestimonialSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = testimonials.length;

    const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

    return (
        <div className="flex flex-col items-center justify-center p-4 w-[90vw] m-auto">
            <SectionHeader mainHeading="What Our Client Say" subHeading="About Us" />
            <div className="w-full flex justify-between items-center bg-white rounded-lg p-6 text-center">
                {/* Previous Arrow */}
                <button onClick={prevSlide} >
                    <FaArrowLeft className="ml-2 text-lg sm:text-xl text-gray-500" />
                    {/* Show image on larger screens */}

                </button>

                {/* Testimonial Content */}
                <div className="px-6 py-6 testimonical-card w-[90%] sm:w-[60%]">
                    <div className="flex justify-center mb-2">
                        {[...Array(testimonials[current].rating)].map((_, index) => (
                            <FaStar key={index} className="text-yellow-500" />
                        ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">"{testimonials[current].text}"</p>
                    <h3 className="font-semibold text-gray-900">{testimonials[current].name}</h3>
                </div>

                {/* Next Arrow */}
                <button onClick={nextSlide} >
                    {/* Show image on larger screens */}

                    <FaArrowRight className="ml-2 text-lg sm:text-xl text-gray-500" />
                </button>
            </div>
        </div>
    );
};

export default TestimonialSlider;