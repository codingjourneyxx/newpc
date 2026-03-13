"use client";

import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/app/components/header";
import { cx } from "@/utils/cx";

interface AnnouncementBannerProps {
    /** Banner text content */
    text: string;
    /** Optional link href */
    href?: string;
    /** Custom class name */
    className?: string;
}

const AnnouncementBanner = ({
    text,
    href = "#",
    className,
}: AnnouncementBannerProps) => (
    <div className={cx("flex w-full justify-center px-4 pt-4", className)}>
        <a
            href={href}
            className={cx(
                "inline-flex items-center gap-2 rounded-full border border-secondary px-4 py-2 text-sm font-medium text-secondary transition duration-100 ease-linear",
                "hover:border-primary hover:bg-primary_hover hover:text-primary"
            )}
        >
            <span>{text}</span>
            <ArrowRight className="size-4" />
        </a>
    </div>
);

/** Incident.io style flame logo with green-light colors */
const IncidentLogo = () => (
    <a href="/" className="flex items-center gap-1.5">
        {/* Flame icon */}
        <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16 4C16 4 10 10 10 16C10 19.31 12.69 22 16 22C19.31 22 22 19.31 22 16C22 10 16 4 16 4Z"
                fill="rgb(102 198 28)"
            />
            <path
                d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22 4 16 4C10 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                fill="rgb(102 198 28)"
                fillOpacity="0.25"
            />
            <path
                d="M16 24C19.3137 24 22 21.3137 22 18C22 14.6863 19 12 16 12C13 12 10 14.6863 10 18C10 21.3137 12.6863 24 16 24Z"
                fill="rgb(102 198 28)"
            />
        </svg>
        {/* Logo text */}
        <span className="text-xl font-semibold tracking-tight text-primary">
            incident<span className="font-light">.io</span>
        </span>
    </a>
);

interface HeroSectionProps {
    /** Main headline - supports React nodes for styling */
    headline?: React.ReactNode;
    /** Supporting description text */
    description?: string;
    /** Primary CTA button text */
    primaryCtaText?: string;
    /** Primary CTA button href */
    primaryCtaHref?: string;
    /** Secondary CTA button text */
    secondaryCtaText?: string;
    /** Secondary CTA button href */
    secondaryCtaHref?: string;
    /** Custom class name */
    className?: string;
}

const HeroSection = ({
    headline,
    description = "An appeal is made to all Islamic brothers for a contribution of 1 rupee for the construction of this mosque and madrasa in our village. Please also seek help from your friends and relatives. May Allah reward you with goodness.",
    primaryCtaText = "Donate Now",
    primaryCtaHref = "#donate",
    secondaryCtaText = "Learn More",
    secondaryCtaHref = "#about",
    className,
}: HeroSectionProps) => {
    const defaultHeadline = (
        <>
            Build Our Masjid
            <br />
            & Madrasa Together
        </>
    );

    return (
        <section
            className={cx(
                "px-4 py-16 md:py-24 lg:py-32",
                className
            )}
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column - Text Content */}
                    <div className="flex flex-col justify-center">
                        {/* Headline */}
                        <h1 className="font-serif text-4xl font-normal italic tracking-tight text-primary md:text-5xl lg:text-6xl">
                            {headline ?? defaultHeadline}
                        </h1>

                        {/* Description */}
                        <p className="mt-6 text-lg text-secondary md:text-xl">
                            {description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                            <Button
                                href={primaryCtaHref}
                                size="lg"
                                className="rounded-full bg-emerald-600 hover:bg-emerald-700 data-[loading]:bg-emerald-700"
                            >
                                {primaryCtaText}
                            </Button>
                            <Button
                                href={secondaryCtaHref}
                                color="secondary"
                                size="lg"
                                className="rounded-full"
                            >
                                {secondaryCtaText}
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Image (Full Height) */}
                    <div className="aspect-square w-full overflow-hidden rounded-2xl bg-tertiary lg:aspect-auto lg:h-full lg:min-h-[400px]">
                        <div className="flex h-full items-center justify-center text-quaternary">
                            Masjid Image
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

interface Component1Props {
    /** Announcement banner text */
    announcementText?: string;
    /** Announcement banner href */
    announcementHref?: string;
    /** Custom class name */
    className?: string;
}

export const Component1 = ({
    announcementText = "Join our community appeal for Masjid & Madrasa",
    announcementHref = "#donate",
    className,
}: Component1Props) => {
    return (
        <div className={cx("min-h-screen bg-primary", className)}>
            {/* Header */}
            <Header />

            {/* Hero Section - 50/50 Grid */}
            <div className="mx-auto max-w-7xl border-l border-r border-secondary">
                <HeroSection />
            </div>
        </div>
    );
};

export default Component1;
