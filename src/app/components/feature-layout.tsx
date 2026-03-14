"use client";

import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import type { FC, ReactNode } from "react";

interface TabItem {
    icon: FC<{ className?: string }>;
    label: string;
    isActive?: boolean;
}

interface TestimonialProps {
    quote: string;
    author: string;
    role: string;
    badge?: string;
    companyLogo?: string;
}

const Testimonial = ({ quote, author, role, badge }: TestimonialProps) => (
    <aside className="relative hidden overflow-hidden rounded-2xl bg-gray-900 p-6 text-white lg:flex lg:flex-col">
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/60" />

        <div className="relative z-10 flex h-full flex-col gap-4">
            {/* Company Logo Placeholder */}
            {badge && (
                <div className="flex h-6 items-center">
                    <span className="text-sm font-semibold text-white/80">{badge}</span>
                </div>
            )}

            {/* Quote */}
            <blockquote className="flex-1 font-serif text-base italic leading-relaxed text-white/90">
                "{quote}"
            </blockquote>

            {/* Author */}
            <div className="text-sm">
                <p className="font-semibold">{author}</p>
                <p className="text-white/70">{role}</p>
            </div>
        </div>
    </aside>
);

interface FeatureLayoutProps {
    badge?: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref?: string;
    testimonial?: TestimonialProps;
    tabs?: TabItem[];
    className?: string;
    children?: ReactNode;
    image?: string;
    testimonialImage?: string;
}

export const FeatureLayout = ({
    badge,
    title,
    description,
    ctaText,
    ctaHref = "#",
    testimonial,
    tabs,
    className,
    image,
    testimonialImage,
}: FeatureLayoutProps) => {
    return (
        <section className={cx("w-full", className)}>
            <div className="mx-auto max-w-7xl border-l border-r border-secondary px-4 py-12 sm:px-6 sm:py-16 md:py-24 lg:px-8">
                {/* Header */}
                <div className="flex flex-col gap-4 sm:gap-8 lg:flex-row lg:items-start lg:justify-between">
                    {/* Left - Title & Description */}
                    <div className="max-w-2xl">
                        <h2 className="font-serif text-2xl font-normal tracking-tight text-primary sm:text-3xl md:text-4xl">
                            {title}
                        </h2>
                        <p className="mt-3 text-base text-secondary sm:mt-4 sm:text-lg">
                            {description}
                        </p>
                        <Button
                            href={ctaHref}
                            color="link-color"
                            size="md"
                            iconTrailing={ArrowRight}
                            className="mt-4 text-emerald-600 hover:text-emerald-700"
                        >
                            {ctaText}
                        </Button>
                    </div>

                    {/* Right - Badge */}
                    {badge && (
                        <div className="flex items-center gap-2 rounded-full border border-secondary px-3 py-1.5">
                            <span className="size-2 rounded-full bg-emerald-500" />
                            <span className="text-sm font-medium text-primary">{badge}</span>
                        </div>
                    )}
                </div>

                {/* Content Area - 2/3 + 1/3 layout */}
                <div className="mt-6 flex flex-col gap-4 sm:mt-10 md:gap-6 lg:flex-row">
                    {/* Left - Image Carousel Area (2/3) */}
                    <div className="flex w-full flex-col gap-4 md:gap-6 lg:max-w-[66%]">
                        {/* Image Placeholder - Carousel would go here */}
                        <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-tertiary sm:aspect-[350/300] sm:rounded-2xl">
                            {image ? (
                                <img src={image} alt="" className="h-full w-full object-cover" />
                            ) : (
                                <div className="flex h-full items-center justify-center text-quaternary">
                                    Image Placeholder
                                </div>
                            )}
                        </div>

                    </div>

                    {/* Right - Testimonial with Background Image (1/3) */}
                    {testimonial && (
                        <aside className="relative hidden overflow-hidden rounded-2xl lg:block lg:w-[34%]">
                            {/* Background Image */}
                            {testimonialImage ? (
                                <img
                                    src={testimonialImage}
                                    alt=""
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-tertiary">
                                    <div className="flex h-full items-center justify-center text-quaternary">
                                        Image
                                    </div>
                                </div>
                            )}
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
                            {/* Content */}
                            <div className="relative z-10 flex h-full min-h-[400px] flex-col justify-end p-6 text-white">
                                {/* Company Logo / Badge */}
                                {testimonial.badge && (
                                    <div className="mb-4 flex h-6 items-center">
                                        <span className="text-sm font-semibold text-white/80">{testimonial.badge}</span>
                                    </div>
                                )}
                                {/* Quote */}
                                <blockquote className="font-serif text-base italic leading-relaxed text-white/90">
                                    "{testimonial.quote}"
                                </blockquote>
                                {/* Author */}
                                <div className="mt-4 text-sm">
                                    <p className="font-semibold">{testimonial.author}</p>
                                    <p className="text-white/70">{testimonial.role}</p>
                                </div>
                            </div>
                        </aside>
                    )}
                </div>

                {/* Mobile Testimonial */}
                {testimonial && (
                    <div className="mt-4 sm:mt-6 lg:hidden">
                        <div className="rounded-xl bg-gray-900 p-4 text-white sm:rounded-2xl sm:p-6">
                            <blockquote className="font-serif text-sm italic leading-relaxed text-white/90 sm:text-base">
                                "{testimonial.quote}"
                            </blockquote>
                            <div className="mt-3 text-xs sm:mt-4 sm:text-sm">
                                <p className="font-semibold">{testimonial.author}</p>
                                <p className="text-white/70">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FeatureLayout;
