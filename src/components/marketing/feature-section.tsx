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
}

const Testimonial = ({ quote, author, role, badge }: TestimonialProps) => (
    <div className="flex flex-col rounded-2xl bg-primary-solid p-6 text-white">
        {badge && (
            <div className="mb-4 flex items-center gap-2">
                <span className="size-2 rounded-full bg-green-light-400" />
                <span className="text-sm font-medium text-green-light-300">{badge}</span>
            </div>
        )}
        <blockquote className="flex-1 text-sm leading-relaxed text-gray-200">
            "{quote}"
        </blockquote>
        <div className="mt-6">
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-gray-400">{role}</p>
        </div>
    </div>
);

interface FeatureSectionProps {
    badge?: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref?: string;
    testimonial?: TestimonialProps;
    tabs?: TabItem[];
    className?: string;
    children?: ReactNode;
}

export const FeatureSection = ({
    badge,
    title,
    description,
    ctaText,
    ctaHref = "#",
    testimonial,
    tabs,
    className,
}: FeatureSectionProps) => {
    return (
        <section className={cx("w-full", className)}>
            <div className="mx-auto max-w-7xl border-l border-r border-secondary px-4 py-16 sm:px-6 md:py-24 lg:px-8">
                {/* Header */}
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                    {/* Left - Title & Description */}
                    <div className="max-w-xl">
                        <h2 className="font-serif text-3xl font-normal tracking-tight text-primary md:text-4xl">
                            {title}
                        </h2>
                        <p className="mt-4 text-lg text-secondary">
                            {description}
                        </p>
                        <Button
                            href={ctaHref}
                            color="link-color"
                            size="md"
                            iconTrailing={ArrowRight}
                            className="mt-4 text-green-light-600 hover:text-green-light-700"
                        >
                            {ctaText}
                        </Button>
                    </div>

                    {/* Right - Badge */}
                    {badge && (
                        <div className="flex items-center gap-2 rounded-full border border-secondary px-3 py-1.5">
                            <span className="size-2 rounded-full bg-green-light-500" />
                            <span className="text-sm font-medium text-primary">{badge}</span>
                        </div>
                    )}
                </div>

                {/* Content Area */}
                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                    {/* Main Image Placeholder */}
                    <div className="aspect-[4/3] rounded-2xl bg-tertiary lg:col-span-1" />

                    {/* Secondary Image Placeholder */}
                    <div className="aspect-[4/3] rounded-2xl bg-tertiary lg:col-span-1" />

                    {/* Testimonial */}
                    {testimonial && (
                        <Testimonial
                            quote={testimonial.quote}
                            author={testimonial.author}
                            role={testimonial.role}
                            badge={testimonial.badge}
                        />
                    )}
                </div>

                {/* Tabs */}
                {tabs && (
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={cx(
                                    "flex items-center gap-2 text-sm font-medium transition duration-100 ease-linear",
                                    tab.isActive
                                        ? "text-green-light-600"
                                        : "text-tertiary hover:text-secondary"
                                )}
                            >
                                <tab.icon className="size-4" />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                        {/* Pagination dots */}
                        <div className="ml-auto flex gap-1.5">
                            <span className="size-2 rounded-full bg-green-light-500" />
                            <span className="size-2 rounded-full bg-gray-200" />
                            <span className="size-2 rounded-full bg-gray-200" />
                            <span className="size-2 rounded-full bg-gray-200" />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FeatureSection;
