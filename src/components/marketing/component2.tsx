"use client";

import { Star01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

interface Component2Props {
    className?: string;
}

/** G2 Logo */
const G2Logo = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="14" fill="#FF492C" />
        <path d="M10.5 11.5H14.5V14H11.5C11.5 14 11.5 16 14 16C16.5 16 17 14 17 14L19 15.5C19 15.5 17.5 18.5 14 18.5C10.5 18.5 9 16 9 14C9 12 10.5 9.5 14 9.5C17.5 9.5 19 12 19 12L17 13.5C17 13.5 16.5 12 14 12C11.5 12 11.5 13 11.5 13V11.5H10.5Z" fill="white" />
    </svg>
);

/** Star Rating Component */
const StarRating = ({ rating = 5 }: { rating?: number }) => (
    <div className="flex gap-0.5">
        {[...Array(rating)].map((_, i) => (
            <Star01 key={i} className="size-5 fill-orange-400 text-orange-400" />
        ))}
    </div>
);

export const Component2 = ({ className }: Component2Props) => {
    const companyLogos = [
        { name: "Company 1" },
        { name: "Company 2" },
        { name: "Company 3" },
        { name: "Company 4" },
        { name: "Company 5" },
    ];

    return (
        <section className={cx("w-full", className)}>
            <div className="mx-auto flex max-w-7xl flex-col gap-12 border-l border-r border-secondary px-4 py-16 sm:px-6 md:py-24 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
                {/* Left Content */}
                <div className="flex flex-1 flex-col">
                    {/* G2 Rating */}
                    <div className="flex items-center gap-2">
                        <G2Logo />
                        <StarRating rating={5} />
                    </div>

                    {/* Headline */}
                    <h2 className="mt-6 font-serif text-3xl font-normal italic tracking-tight text-primary md:text-4xl lg:text-5xl">
                        We're the leading incident
                        <br />
                        management platform
                    </h2>

                    {/* CTA Button */}
                    <div className="mt-8">
                        <Button
                            href="#"
                            color="secondary"
                            size="lg"
                            className="rounded-full"
                        >
                            Read G2 reviews
                        </Button>
                    </div>

                    {/* Company Logos */}
                    <div className="mt-12 flex flex-wrap gap-4">
                        {companyLogos.map((company, index) => (
                            <div
                                key={index}
                                className="flex h-20 w-24 items-center justify-center rounded-lg bg-tertiary"
                            >
                                <span className="text-xs text-quaternary">{company.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content - Image Placeholder */}
                <div className="flex flex-1 items-center justify-center">
                    <div className="aspect-[4/3] w-full max-w-lg rounded-2xl bg-tertiary" />
                </div>
            </div>
        </section>
    );
};

export default Component2;
