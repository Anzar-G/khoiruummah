import * as React from "react"
import { motion, PanInfo } from "framer-motion"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Utility function inline to avoid import issues if path alias is not set
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface Testimonial {
    id: number | string
    name: string
    avatar: string
    description: string
}

interface TestimonialCarouselProps
    extends React.HTMLAttributes<HTMLDivElement> {
    testimonials: Testimonial[]
    showArrows?: boolean
    showDots?: boolean
}

const TestimonialCarousel = React.forwardRef<
    HTMLDivElement,
    TestimonialCarouselProps
>(
    (
        { className, testimonials, showArrows = true, showDots = true, ...props },
        ref,
    ) => {
        const [currentIndex, setCurrentIndex] = React.useState(0)
        const [exitX, setExitX] = React.useState<number>(0)

        const handleDragEnd = (
            event: MouseEvent | TouchEvent | PointerEvent,
            info: PanInfo,
        ) => {
            if (Math.abs(info.offset.x) > 100) {
                setExitX(info.offset.x)
                setTimeout(() => {
                    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
                    setExitX(0)
                }, 200)
            }
        }

        return (
            <div
                ref={ref}
                className={cn(
                    "h-72 w-full flex items-center justify-center",
                    className
                )}
                {...props}
            >
                <div className="relative w-full max-w-sm h-64 px-4 md:px-0">
                    {testimonials.map((testimonial, index) => {
                        const isCurrentCard = index === currentIndex
                        const isPrevCard =
                            index === (currentIndex + 1) % testimonials.length
                        const isNextCard =
                            index === (currentIndex + 2) % testimonials.length

                        if (!isCurrentCard && !isPrevCard && !isNextCard) return null

                        return (
                            <motion.div
                                key={testimonial.id}
                                className={cn(
                                    "absolute left-0 right-0 mx-auto w-full h-full rounded-2xl cursor-grab active:cursor-grabbing",
                                    "bg-white shadow-xl border border-slate-100",
                                    "dark:bg-card dark:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-1px_-1px_3px_rgba(255,255,255,0.1)]",
                                )}
                                style={{
                                    zIndex: isCurrentCard ? 3 : isPrevCard ? 2 : 1,
                                }}
                                drag={isCurrentCard ? "x" : false}
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.7}
                                onDragEnd={isCurrentCard ? handleDragEnd : undefined}
                                initial={{
                                    scale: 0.95,
                                    opacity: 0,
                                    y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                                    rotate: isCurrentCard ? 0 : isPrevCard ? -2 : -4,
                                }}
                                animate={{
                                    scale: isCurrentCard ? 1 : 0.95,
                                    opacity: isCurrentCard ? 1 : isPrevCard ? 0.6 : 0.3,
                                    x: isCurrentCard ? exitX : 0,
                                    y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                                    rotate: isCurrentCard ? exitX / 20 : isPrevCard ? -2 : -4,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                }}
                            >
                                {showArrows && isCurrentCard && (
                                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 pointer-events-none">
                                        <span
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                // Logic for prev could be added here if needed, but carousel is forward-only in this design
                                            }}
                                            className="text-4xl select-none cursor-pointer text-gray-300 hover:text-brand-purple pointer-events-auto opacity-0"
                                        >
                                            &larr;
                                        </span>
                                        <span
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setExitX(-200); // Simulate swipe left
                                                setTimeout(() => {
                                                    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
                                                    setExitX(0);
                                                }, 200);
                                            }}
                                            className="text-4xl select-none cursor-pointer text-brand-green/50 hover:text-brand-green pointer-events-auto"
                                        >
                                            &rarr;
                                        </span>
                                    </div>
                                )}

                                <div className="p-6 flex flex-col items-center gap-4 h-full justify-center text-center">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-brand-purple/20"
                                    />
                                    <div>
                                        <h3 className="text-lg font-bold text-brand-purple dark:text-foreground">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-xs font-medium text-brand-green">
                                            Wali Santri
                                        </p>
                                    </div>
                                    <p className="text-sm italic text-slate-600 dark:text-muted-foreground line-clamp-4">
                                        "{testimonial.description}"
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                    {showDots && (
                        <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2">
                            {testimonials.map((_, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "w-2 h-2 rounded-full transition-colors duration-300",
                                        index === currentIndex
                                            ? "bg-brand-purple w-6"
                                            : "bg-slate-300",
                                    )}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        )
    },
)
TestimonialCarousel.displayName = "TestimonialCarousel"

export { TestimonialCarousel, type Testimonial }
