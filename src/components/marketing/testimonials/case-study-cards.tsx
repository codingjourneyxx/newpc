"use client";

import { useRef, useState, useCallback } from "react";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

type CaseStudy = {
    id: string;
    name: string;
    logo: string;
    quote: string;
    href: string;
    bgColor: string;
    bgImage?: string;
    avatar?: string;
    author?: string;
    role?: string;
};

const defaultCaseStudies: CaseStudy[] = [
    {
        id: "donor-1",
        name: "Donor",
        logo: "",
        quote: "Contributing to this masjid project has been a blessing. Every brick laid is a step towards Jannah.",
        href: "#",
        bgColor: "bg-emerald-600",
        bgImage: "https://images.unsplash.com/photo-1585129777188-94600bc7b4b3?w=800&q=80",
        avatar: "https://www.untitledui.com/images/avatars/olivia-rhye",
        author: "Ahmed Khan",
        role: "Community Member",
    },
    {
        id: "donor-3",
        name: "Donor",
        logo: "",
        quote: "A place of worship for our village was long needed. Alhamdulillah, this dream is becoming reality.",
        href: "#",
        bgColor: "bg-teal-600",
        bgImage: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&q=80",
        avatar: "https://www.untitledui.com/images/avatars/lana-steiner",
        author: "Mohammad Iqbal",
        role: "Village Elder",
    },
    {
        id: "donor-4",
        name: "Donor",
        logo: "",
        quote: "Even a small donation counts. Together we are building something that will benefit our community.",
        href: "#",
        bgColor: "bg-emerald-800",
        bgImage: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80",
        avatar: "https://www.untitledui.com/images/avatars/demi-wilkinson",
        author: "Zainab Khatoon",
        role: "Local Supporter",
    },
];

// Arrow Up Right Icon
const ArrowUpRightIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        data-icon="true"
        className={className}
    >
        <path d="M7 17 17 7m0 0H7m10 0v10" />
    </svg>
);

// Arrow Left Icon
const ArrowLeftIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={className}
    >
        <path d="M19 12H5m0 0 7 7m-7-7 7-7" />
    </svg>
);

// Arrow Right Icon
const ArrowRightIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={className}
    >
        <path d="M5 12h14m0 0-7-7m7 7-7 7" />
    </svg>
);

interface CaseStudyCardsProps {
    title?: string;
    description?: string;
    caseStudies?: CaseStudy[];
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    className?: string;
}

export const CaseStudyCards = ({
    title = "Community Voices",
    description = "Hear from our supporters who are helping build this blessed project.",
    caseStudies = defaultCaseStudies,
    primaryButtonText = "Donate Now",
    primaryButtonHref = "#donate",
    secondaryButtonText = "Learn More",
    secondaryButtonHref = "#about",
    className,
}: CaseStudyCardsProps) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Mouse drag handlers
    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        if (!carouselRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
        carouselRef.current.style.cursor = "grabbing";
    }, []);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent) => {
            if (!isDragging || !carouselRef.current) return;
            e.preventDefault();
            const x = e.pageX - carouselRef.current.offsetLeft;
            const walk = (x - startX) * 1.5;
            carouselRef.current.scrollLeft = scrollLeft - walk;
        },
        [isDragging, startX, scrollLeft]
    );

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
        if (carouselRef.current) {
            carouselRef.current.style.cursor = "grab";
        }
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsDragging(false);
        if (carouselRef.current) {
            carouselRef.current.style.cursor = "grab";
        }
    }, []);

    // Touch handlers for mobile
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        if (!carouselRef.current) return;
        setIsDragging(true);
        setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    }, []);

    const handleTouchMove = useCallback(
        (e: React.TouchEvent) => {
            if (!isDragging || !carouselRef.current) return;
            const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
            const walk = (x - startX) * 1.5;
            carouselRef.current.scrollLeft = scrollLeft - walk;
        },
        [isDragging, startX, scrollLeft]
    );

    const handleTouchEnd = useCallback(() => {
        setIsDragging(false);
    }, []);

    // Navigation button handlers - scroll by card width + gap
    const scrollPrev = useCallback(() => {
        if (!carouselRef.current) return;
        const container = carouselRef.current;
        const cards = container.querySelectorAll('[role="group"]');
        if (cards.length === 0) return;

        const cardWidth = (cards[0] as HTMLElement).offsetWidth;
        const gap = window.innerWidth >= 768 ? 32 : 24;
        const scrollAmount = cardWidth + gap;

        container.scrollTo({
            left: Math.max(0, container.scrollLeft - scrollAmount),
            behavior: "smooth"
        });
    }, []);

    const scrollNext = useCallback(() => {
        if (!carouselRef.current) return;
        const container = carouselRef.current;
        const cards = container.querySelectorAll('[role="group"]');
        if (cards.length === 0) return;

        const cardWidth = (cards[0] as HTMLElement).offsetWidth;
        const gap = window.innerWidth >= 768 ? 32 : 24;
        const scrollAmount = cardWidth + gap;
        const maxScroll = container.scrollWidth - container.clientWidth;

        container.scrollTo({
            left: Math.min(maxScroll, container.scrollLeft + scrollAmount),
            behavior: "smooth"
        });
    }, []);

    return (
        <div data-drag-constraint="true">
            <section className={cx("overflow-hidden bg-primary py-16 md:py-24", className)}>
                <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
                    {/* Header */}
                    <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end lg:gap-12">
                        <div className="max-w-2xl">
                            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
                                {title}
                            </p>
                            <h2 className="mt-4 font-serif text-3xl font-normal italic tracking-tight text-primary sm:text-4xl md:text-5xl">
                                What our{" "}
                                <span className="relative inline-block text-emerald-600">
                                    supporters say
                                
                                </span>
                            </h2>
                            <p className="mt-6 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg">
                                {description}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3 w-full sm:w-auto sm:min-w-80">
                            <Button color="secondary" size="lg" href={secondaryButtonHref} className="w-full justify-center">
                                {secondaryButtonText}
                            </Button>
                            <Button
                                size="lg"
                                href={primaryButtonHref}
                                className="w-full justify-center rounded-lg bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-700 hover:via-emerald-600 hover:to-teal-600"
                            >
                                {primaryButtonText}
                            </Button>
                        </div>
                    </div>

                    {/* Carousel */}
                    <div className="relative mt-12 md:mt-16" role="region" aria-roledescription="carousel">
                        <div className="h-full w-full">
                            <div
                                ref={carouselRef}
                                className="flex max-h-full gap-6 overflow-x-auto pr-4 md:gap-8 md:pr-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                                style={{ cursor: "grab" }}
                                onMouseDown={handleMouseDown}
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseLeave}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                {caseStudies.map((caseStudy) => (
                                    <div
                                        key={caseStudy.id}
                                        role="group"
                                        aria-roledescription="slide"
                                        className={cx(
                                            "min-w-0 grow-0 basis-full relative flex h-118 max-w-76 shrink-0 cursor-grab items-end p-6 md:h-126 md:w-full md:max-w-sm md:p-5 overflow-hidden",
                                            caseStudy.bgColor,
                                            isDragging && "cursor-grabbing"
                                        )}
                                    >
                                        {/* Background Image */}
                                        {caseStudy.bgImage && (
                                            <img
                                                src={caseStudy.bgImage}
                                                alt=""
                                                className="absolute inset-0 h-full w-full object-cover"
                                                draggable={false}
                                            />
                                        )}
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                                        {caseStudy.logo && (
                                            <img
                                                src={caseStudy.logo}
                                                alt={caseStudy.name}
                                                className="absolute top-6 left-6 h-10 object-contain md:top-8 md:left-8 md:h-12 z-10"
                                                draggable={false}
                                            />
                                        )}
                                        <div className="relative z-10 flex cursor-auto flex-col bg-white/20 px-4 py-5 ring-1 ring-white/20 backdrop-blur-md ring-inset md:p-5 md:px-6 md:py-8">
                                            {/* Avatar and Author */}
                                            {caseStudy.avatar && (
                                                <div className="flex items-center gap-3 mb-4">
                                                    <img
                                                        src={caseStudy.avatar}
                                                        alt={caseStudy.author || ""}
                                                        className="size-12 rounded-full object-cover ring-2 ring-white/30"
                                                        draggable={false}
                                                    />
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-semibold text-white">
                                                            {caseStudy.author}
                                                        </span>
                                                        <span className="text-sm text-white/80">
                                                            {caseStudy.role}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                            <q className="text-lg font-medium text-balance text-white">
                                                {caseStudy.quote}
                                            </q>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="mt-8 flex items-center gap-3">
                            <button
                                onClick={scrollPrev}
                                aria-label="Previous slide"
                                className="group flex size-11 cursor-pointer items-center justify-center rounded-full bg-emerald-50 border border-emerald-200 transition duration-200 ease-out hover:bg-emerald-100 hover:border-emerald-300 active:scale-95 md:size-12"
                            >
                                <ArrowLeftIcon className="size-5 text-emerald-600 transition duration-200 ease-out group-hover:text-emerald-700" />
                            </button>
                            <button
                                onClick={scrollNext}
                                aria-label="Next slide"
                                className="group flex size-11 cursor-pointer items-center justify-center rounded-full bg-emerald-600 border border-emerald-600 transition duration-200 ease-out hover:bg-emerald-700 hover:border-emerald-700 active:scale-95 md:size-12"
                            >
                                <ArrowRightIcon className="size-5 text-white transition duration-200 ease-out" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudyCards;
