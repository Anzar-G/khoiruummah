import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
    id: number;
    quote: string;
    name: string;
    username: string;
    avatar: string;
}

// Using dummy data for now, or we can pass it as props like the other carousel
// For consistency with the other carousel, I'll allow passing props but default to these if not provided
// actually, let's just use the props pattern to keep it clean and dynamic
interface TestimonialSliderProps {
    testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
    { id: 1, quote: "Impressed by the professionalism and attention to detail.", name: "Guy Hawkins", username: "@guyhawkins", avatar: "https://ui-avatars.com/api/?name=Guy+Hawkins&background=random" },
    { id: 2, quote: "A seamless experience from start to finish. Highly recommend!", name: "Karla Lynn", username: "@karlalynn8", avatar: "https://ui-avatars.com/api/?name=Karla+Lynn&background=random" },
    { id: 3, quote: "Reliable and trustworthy. Made my life so much easier!", name: "Jane Cooper", username: "@janecooper", avatar: "https://ui-avatars.com/api/?name=Jane+Cooper&background=random" },
    { id: 4, quote: "The level of service exceeded my expectations. Will definitely come back.", name: "Robert Chen", username: "@robertchen", avatar: "https://ui-avatars.com/api/?name=Robert+Chen&background=random" },
    { id: 5, quote: "An innovative approach that truly solved my problems.", name: "Sarah Miller", username: "@sarahmiller", avatar: "https://ui-avatars.com/api/?name=Sarah+Miller&background=random" },
];

const getVisibleCount = (width: number): number => {
    if (width >= 1280) return 3;
    if (width >= 768) return 2;
    return 1;
};

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials = defaultTestimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [direction, setDirection] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => {
            const newWidth = window.innerWidth;
            setWindowWidth(newWidth);

            const oldVisibleCount = getVisibleCount(windowWidth);
            const newVisibleCount = getVisibleCount(newWidth);

            if (oldVisibleCount !== newVisibleCount) {
                const maxIndexForNewWidth = testimonials.length - newVisibleCount;
                if (currentIndex > maxIndexForNewWidth) {
                    setCurrentIndex(Math.max(0, maxIndexForNewWidth));
                }
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [windowWidth, currentIndex, testimonials.length]);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const startAutoPlay = () => {
            autoPlayRef.current = setInterval(() => {
                const visibleCount = getVisibleCount(windowWidth);
                const maxIndex = testimonials.length - visibleCount;

                if (currentIndex >= maxIndex) {
                    setDirection(-1);
                    setCurrentIndex((prev) => prev - 1);
                } else if (currentIndex <= 0) {
                    setDirection(1);
                    setCurrentIndex((prev) => prev + 1);
                } else {
                    setCurrentIndex((prev) => prev + direction);
                }
            }, 4000);
        };

        startAutoPlay();

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [isAutoPlaying, currentIndex, windowWidth, direction, testimonials.length]);

    const visibleCount = getVisibleCount(windowWidth);
    const maxIndex = Math.max(0, testimonials.length - visibleCount);
    const canGoNext = currentIndex < maxIndex;
    const canGoPrev = currentIndex > 0;

    const goNext = () => {
        if (canGoNext) {
            setDirection(1);
            setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
            pauseAutoPlay();
        }
    };

    const goPrev = () => {
        if (canGoPrev) {
            setDirection(-1);
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
            pauseAutoPlay();
        }
    };

    const pauseAutoPlay = () => {
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 8000);
    };

    const handleDragEnd = (_: any, info: any) => {
        const { offset } = info;
        const swipeThreshold = 30;

        if (offset.x < -swipeThreshold && canGoNext) {
            goNext();
        } else if (offset.x > swipeThreshold && canGoPrev) {
            goPrev();
        }
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        pauseAutoPlay();
    };

    return (
        <div className="w-full px-4 py-8 sm:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden rounded-xl">
            <div className="max-w-6xl mx-auto">
                <div className="relative" ref={containerRef}>
                    <div className="flex justify-center sm:justify-end sm:absolute sm:-top-16 right-0 space-x-2 mb-4 sm:mb-0">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={goPrev}
                            disabled={!canGoPrev}
                            className={`p-2 rounded-full ${canGoPrev
                                ? 'bg-white shadow-md hover:bg-gray-50 text-brand-purple'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                } transition-all duration-300`}
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={goNext}
                            disabled={!canGoNext}
                            className={`p-2 rounded-full ${canGoNext
                                ? 'bg-white shadow-md hover:bg-gray-50 text-brand-purple'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                } transition-all duration-300`}
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
                        </motion.button>
                    </div>

                    <div className="overflow-hidden relative px-2 sm:px-0">
                        <motion.div
                            className="flex"
                            animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
                            transition={{
                                type: 'spring',
                                stiffness: 70,
                                damping: 20
                            }}
                        >
                            {testimonials.map((testimonial) => (
                                <motion.div
                                    key={testimonial.id}
                                    className={`flex-shrink-0 w-full ${visibleCount === 3 ? 'md:w-1/3' :
                                        visibleCount === 2 ? 'md:w-1/2' : 'w-full'
                                        } p-2`}
                                    initial={{ opacity: 0.5, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.2}
                                    onDragEnd={handleDragEnd}
                                    whileHover={{ y: -5 }}
                                    whileTap={{ scale: 0.98, cursor: 'grabbing' }}
                                    style={{ cursor: 'grab' }}
                                >
                                    <motion.div
                                        className="relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full bg-white border border-gray-100 shadow-lg shadow-brand-purple/5"
                                        whileHover={{
                                            boxShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.1), 0 4px 6px -2px rgba(79, 70, 229, 0.05)"
                                        }}
                                    >
                                        <div className="absolute -top-4 -left-4 opacity-10">
                                            <Quote size={windowWidth < 640 ? 40 : 60} className="text-brand-purple" />
                                        </div>

                                        <div className="relative z-10 h-full flex flex-col">
                                            <p className="text-sm sm:text-base text-gray-700 font-medium mb-4 sm:mb-6 leading-relaxed">
                                                &ldquo;{testimonial.quote}&rdquo;
                                            </p>

                                            <div className="mt-auto pt-3 sm:pt-4 border-t border-gray-100">
                                                <div className="flex items-center">
                                                    <div className="relative flex-shrink-0">
                                                        <img
                                                            width={48}
                                                            height={48}
                                                            src={testimonial.avatar}
                                                            alt={testimonial.name}
                                                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white shadow-sm"
                                                        />
                                                        <motion.div
                                                            className="absolute inset-0 rounded-full bg-brand-purple/20"
                                                            animate={{
                                                                scale: [1, 1.2, 1],
                                                                opacity: [0, 0.3, 0]
                                                            }}
                                                            transition={{
                                                                duration: 2,
                                                                repeat: Infinity,
                                                                repeatDelay: 1
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="ml-3">
                                                        <h4 className="font-bold text-sm sm:text-base text-gray-900">{testimonial.name}</h4>
                                                        <p className="text-gray-600 text-xs sm:text-sm">{testimonial.username}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="flex justify-center mt-6 sm:mt-8">
                        {Array.from({ length: Math.max(0, testimonials.length - visibleCount + 1) }, (_: any, index: any) => (
                            <motion.button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className="relative mx-1 focus:outline-none"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={`Go to testimonial ${index + 1}`}
                            >
                                <motion.div
                                    className={`w-2 h-2 rounded-full ${index === currentIndex
                                        ? 'bg-brand-purple'
                                        : 'bg-gray-300'
                                        }`}
                                    animate={{
                                        scale: index === currentIndex ? [1, 1.2, 1] : 1
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: index === currentIndex ? Infinity : 0,
                                        repeatDelay: 1
                                    }}
                                />
                                {index === currentIndex && (
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-brand-purple/30"
                                        animate={{
                                            scale: [1, 1.8],
                                            opacity: [1, 0]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                        }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;
