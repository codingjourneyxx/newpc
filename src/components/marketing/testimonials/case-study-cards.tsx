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
    avatar?: string;
    author?: string;
    role?: string;
};

const defaultCaseStudies: CaseStudy[] = [
    {
        id: "layers",
        name: "Layers",
        logo: "https://www.untitledui.com/logos/logotype/white/layers.svg",
        quote: "Untitled has saved us thousands of hours of work. We're able to spin up projects faster.",
        href: "#",
        bgColor: "bg-error-600",
        avatar: "https://www.untitledui.com/images/avatars/olivia-rhye",
        author: "Olivia Rhye",
        role: "Product Designer",
    },
    {
        id: "sisyphus",
        name: "Sisyphus",
        logo: "https://www.untitledui.com/logos/logotype/white/sisyphus.svg",
        quote: "We've been using Untitled to kick start every new project and can't work without it.",
        href: "#",
        bgColor: "bg-error-700",
        avatar: "https://www.untitledui.com/images/avatars/phoenix-baker",
        author: "Phoenix Baker",
        role: "Engineering Lead",
    },
    {
        id: "capsule",
        name: "Capsule",
        logo: "https://www.untitledui.com/logos/logotype/white/capsule.svg",
        quote: "Love the simplicity of the service and the prompt customer support.",
        href: "#",
        bgColor: "bg-error-500",
        avatar: "https://www.untitledui.com/images/avatars/lana-steiner",
        author: "Lana Steiner",
        role: "VP of Sales",
    },
    {
        id: "catalog",
        name: "Catalog",
        logo: "https://www.untitledui.com/logos/logotype/white/catalog.svg",
        quote: "Untitled has saved us thousands of hours of work. We're able to spin up projects faster.",
        href: "#",
        bgColor: "bg-error-800",
        avatar: "https://www.untitledui.com/images/avatars/demi-wilkinson",
        author: "Demi Wilkinson",
        role: "Product Manager",
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
    title = "We've helped hundreds of global companies",
    description = "Case studies from some of our amazing customers who are building faster.",
    caseStudies = defaultCaseStudies,
    primaryButtonText = "Create account",
    primaryButtonHref = "#",
    secondaryButtonText = "Our customers",
    secondaryButtonHref = "#",
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

    // Navigation button handlers
    const scrollPrev = useCallback(() => {
        if (!carouselRef.current) return;
        carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }, []);

    const scrollNext = useCallback(() => {
        if (!carouselRef.current) return;
        carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }, []);

    return (
        <div data-drag-constraint="true">
            <section className={cx("overflow-hidden bg-primary py-16 md:py-24", className)}>
                <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
                    {/* Header */}
                    <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-0">
                        <div className="flex max-w-3xl flex-col gap-4 md:gap-5">
                            <h2 className="text-display-sm font-semibold text-primary md:text-display-md">
                                {title}
                            </h2>
                            <p className="text-lg text-tertiary md:text-xl">{description}</p>
                        </div>
                        <div className="flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-start">
                            <Button color="secondary" size="lg" href={secondaryButtonHref}>
                                {secondaryButtonText}
                            </Button>
                            <Button color="primary" size="lg" href={primaryButtonHref}>
                                {primaryButtonText}
                            </Button>
                        </div>
                    </div>

                    {/* Carousel */}
                    <div className="relative mt-12 md:mt-16" role="region" aria-roledescription="carousel">
                        <div className="h-full w-full">
                            <div
                                ref={carouselRef}
                                className="flex max-h-full gap-6 overflow-x-auto pr-4 scrollbar-hide md:gap-8 md:pr-8"
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
                                            "min-w-0 grow-0 basis-full relative flex h-118 max-w-76 shrink-0 cursor-grab items-end p-6 md:h-126 md:w-full md:max-w-sm md:p-5",
                                            caseStudy.bgColor,
                                            isDragging && "cursor-grabbing"
                                        )}
                                    >
                                        <img
                                            src={caseStudy.logo}
                                            alt={caseStudy.name}
                                            className="absolute top-6 left-6 h-10 object-contain md:top-8 md:left-8 md:h-12"
                                            draggable={false}
                                        />
                                        <div className="flex cursor-auto flex-col bg-white/30 px-4 py-5 ring-1 ring-white/30 backdrop-blur-md ring-inset md:p-5 md:px-6 md:py-8">
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
                                            <a
                                                href={caseStudy.href}
                                                className="group mt-6 inline-flex items-center gap-1.5 text-md font-semibold text-white transition duration-100 ease-linear hover:opacity-80"
                                                onClick={(e) => isDragging && e.preventDefault()}
                                            >
                                                <span className="underline decoration-transparent underline-offset-2 transition duration-100 ease-linear group-hover:decoration-current">
                                                    Read case study
                                                </span>
                                                <ArrowUpRightIcon className="size-5 text-white" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="mt-8 flex gap-4 md:gap-8">
                            <button
                                onClick={scrollPrev}
                                aria-label="Previous slide"
                                className="group flex size-12 cursor-pointer items-center justify-center rounded-full bg-primary ring-1 ring-secondary backdrop-blur transition duration-100 ease-linear ring-inset hover:bg-secondary md:size-14"
                            >
                                <ArrowLeftIcon className="size-5 text-fg-quaternary transition duration-100 ease-linear group-hover:text-fg-quaternary_hover md:size-6" />
                            </button>
                            <button
                                onClick={scrollNext}
                                aria-label="Next slide"
                                className="group flex size-12 cursor-pointer items-center justify-center rounded-full bg-primary ring-1 ring-secondary backdrop-blur transition duration-100 ease-linear ring-inset hover:bg-secondary md:size-14"
                            >
                                <ArrowRightIcon className="size-5 text-fg-quaternary transition duration-100 ease-linear group-hover:text-fg-quaternary_hover md:size-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudyCards;
