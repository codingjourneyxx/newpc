"use client";

import { ArrowRight, ArrowLeft, ChevronDown, Link01, Copy01, Download01, Trash01, ShieldTick, CheckVerified01, Receipt, ArrowUpRight } from "@untitledui/icons";
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
                "min-h-screen lg:min-h-0 lg:h-[750px]",
                className
            )}
        >
            <div className="mx-auto h-full max-w-7xl">
                <div className="grid h-full grid-cols-1 items-stretch lg:grid-cols-2">
                    {/* Left Column - Text Content */}
                    <div className="relative flex flex-col justify-center px-4 py-12 pt-20 sm:px-6 md:py-16 md:pt-24 lg:py-0 lg:pt-24 lg:px-8">
                        {/* Dot Pattern Background */}
                        <div
                            className="pointer-events-none absolute inset-0 opacity-[0.15]"
                            style={{
                                backgroundImage: 'radial-gradient(circle, #059669 1px, transparent 1px)',
                                backgroundSize: '20px 20px'
                            }}
                        />
                        {/* Headline */}
                        <h1 className="font-serif text-3xl font-normal italic tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl">
                            {headline ?? defaultHeadline}
                        </h1>

                        {/* Description */}
                        <div className="mt-6 space-y-3">
                            <p className="text-lg leading-relaxed text-secondary md:text-xl">
                                An appeal is made to all <span className="font-semibold text-primary">Islamic brothers</span> for a contribution of{" "}
                                <span className="font-bold text-emerald-600">₹1 rupee</span> for the construction of this{" "}
                                <span className="font-semibold italic text-emerald-700">mosque and madrasa</span> in our village.
                            </p>
                        
                            <p className="text-lg font-medium  text-emerald-600 md:text-xl">
                                "May Allah reward you with goodness"
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                            <Button
                                href={primaryCtaHref}
                                size="xl"
                                iconTrailing={<ArrowUpRight data-icon className="!text-white" />}
                                className="rounded-lg bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-700 hover:via-emerald-600 hover:to-teal-600"
                            >
                                {primaryCtaText}
                            </Button>
                            <Button
                                href={secondaryCtaHref}
                                color="secondary"
                                size="xl"
                                iconTrailing={ArrowUpRight}
                                className="rounded-lg"
                            >
                                {secondaryCtaText}
                            </Button>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5">
                                <ShieldTick className="size-4 text-emerald-600" />
                                <span className="text-xs font-medium text-emerald-700">100% Secure</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5">
                                <Receipt className="size-4 text-emerald-600" />
                                <span className="text-xs font-medium text-emerald-700">Tax Deductible</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5">
                                <CheckVerified01 className="size-4 text-emerald-600" />
                                <span className="text-xs font-medium text-emerald-700">Verified Project</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - QR Code Share UI */}
                    <div
                        className="flex min-h-[400px] w-full items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-12 sm:p-6 md:p-8 lg:h-full lg:min-h-0 lg:py-8"
                        style={{ backgroundImage: "url('/rightcolbg.jpg')" }}
                    >
                        <div className="flex w-full max-w-sm flex-col gap-4 sm:max-w-md">
                            {/* QR Code Card */}
                            <div className="rounded-xs border border-secondary bg-primary p-4 shadow-2xl sm:p-6">
                                {/* Header */}
                                <div className="flex items-center">
                                    <h3 className="flex-1 text-center text-base font-semibold text-primary sm:text-lg">Share via QR code</h3>
                                </div>

                                {/* Description */}
                                <p className="mt-2 text-center text-xs text-tertiary sm:text-sm">
                                    Scan this QR code to donate directly to our Masjid & Madrasa project.
                                </p>

                                {/* QR Code Container */}
                                <div className="mt-4 flex justify-center sm:mt-6">
                                    <div className="rounded-xl border-2 border-dashed border-gray-200">
                                        <div className="rounded-lg border-2 border-emerald-600 p-1.5 sm:p-2">
                                            <img
                                                src="/qr-code.jpeg"
                                                alt="Scan to donate via UPI"
                                                className="h-60 w-full object-contain sm:size-48 md:size-60"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Link Input */}
                                <div className="mt-4 flex items-center gap-2 rounded-lg border border-secondary bg-primary px-2 py-2 sm:mt-6 sm:px-3 sm:py-2.5">
                                    <Link01 className="size-4 flex-shrink-0 text-fg-quaternary sm:size-5" />
                                    <span className="flex-1 truncate text-xs text-secondary sm:text-sm">thealhamdtechnologies-1@oksbi</span>
                                    <button className="flex size-7 flex-shrink-0 items-center justify-center rounded-md text-fg-quaternary transition duration-100 ease-linear hover:bg-primary_hover hover:text-fg-secondary sm:size-8">
                                        <Copy01 className="size-3.5 sm:size-4" />
                                    </button>
                                </div>

                                {/* Download Options */}
                                <div className="mt-2 space-y-2 sm:mt-3">
                                    <a
                                        href="/qr-code.jpeg"
                                        download="masjid-madrasa-qr.jpeg"
                                        className="flex items-center gap-2 rounded-lg border border-secondary bg-primary px-2 py-2 transition duration-100 ease-linear hover:bg-primary_hover sm:gap-3 sm:px-3 sm:py-2.5"
                                    >
                                        <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50 sm:size-10">
                                            <img src="/pnglogo.svg" alt="Logo" className="size-5 sm:size-6" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-xs font-medium text-primary sm:text-sm">Download QR Code</p>
                                            <p className="truncate text-[10px] text-tertiary sm:text-xs">High quality image</p>
                                        </div>
                                        <div className="flex size-7 flex-shrink-0 items-center justify-center rounded-md text-fg-quaternary sm:size-8">
                                            <Download01 className="size-3.5 sm:size-4" />
                                        </div>
                                    </a>

                                    <button
                                        onClick={() => navigator.clipboard.writeText("thealhamdtechnologies-1@oksbi")}
                                        className="flex w-full items-center gap-2 rounded-lg border border-secondary bg-primary px-2 py-2 transition duration-100 ease-linear hover:bg-primary_hover sm:gap-3 sm:px-3 sm:py-2.5"
                                    >
                                        <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50 sm:size-10">
                                            <img src="/upi-logo.png" alt="UPI" className="size-5 sm:size-6" />
                                        </div>
                                        <div className="min-w-0 flex-1 text-left">
                                            <p className="truncate text-xs font-medium text-primary sm:text-sm">Copy UPI ID</p>
                                            <p className="truncate text-[10px] text-tertiary sm:text-xs">thealhamdtechnologies-1@oksbi</p>
                                        </div>
                                        <div className="flex size-7 flex-shrink-0 items-center justify-center rounded-md text-fg-quaternary sm:size-8">
                                            <Copy01 className="size-3.5 sm:size-4" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

interface HeroSectionWrapperProps {
    /** Announcement banner text */
    announcementText?: string;
    /** Announcement banner href */
    announcementHref?: string;
    /** Custom class name */
    className?: string;
}

export const HeroSectionWrapper = ({
    announcementText = "Join our community appeal for Masjid & Madrasa",
    announcementHref = "#donate",
    className,
}: HeroSectionWrapperProps) => {
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

export default HeroSectionWrapper;
