"use client";

import { ArrowRight, ArrowLeft, ChevronDown, Link01, Copy01, Download01, Trash01, ShieldTick, CheckVerified01, Receipt } from "@untitledui/icons";
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
                "h-[750px]",
                className
            )}
        >
            <div className="mx-auto h-full max-w-7xl">
                <div className="grid h-full grid-cols-1 items-stretch gap-12 lg:grid-cols-2 lg:gap-0">
                    {/* Left Column - Text Content */}
                    <div className="relative flex flex-col justify-center pt-16 md:pt-20 lg:pt-24 pl-4 md:pl-6 lg:pl-8">
                        {/* Dot Pattern Background */}
                        <div
                            className="pointer-events-none absolute inset-0 opacity-[0.15]"
                            style={{
                                backgroundImage: 'radial-gradient(circle, #059669 1px, transparent 1px)',
                                backgroundSize: '20px 20px'
                            }}
                        />
                        {/* Headline */}
                        <h1 className="font-serif text-4xl font-normal italic tracking-tight text-primary md:text-5xl lg:text-6xl">
                            {headline ?? defaultHeadline}
                        </h1>

                        {/* Description */}
                        <p className="mt-6 text-lg text-secondary md:text-md">
                            {description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                            <Button
                                href={primaryCtaHref}
                                size="xl"
                                className="rounded-lg bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-700 hover:via-emerald-600 hover:to-teal-600"
                            >
                                {primaryCtaText}
                            </Button>
                            <Button
                                href={secondaryCtaHref}
                                color="secondary"
                                size="xl"
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
                    <div className="flex h-full w-full items-center justify-center bg-gray-100 p-8">
                        <div className="flex w-full max-w-md flex-col gap-4">
                            {/* QR Code Card */}
                            <div className="rounded-2xl border border-secondary bg-primary p-6 shadow-lg">
                                {/* Header */}
                                <div className="flex items-center">
                                    <h3 className="flex-1 text-center text-lg font-semibold text-primary">Share via QR code</h3>
                                </div>

                                {/* Description */}
                                <p className="mt-2 text-center text-sm text-tertiary">
                                    Scan this QR code to donate directly to our Masjid & Madrasa project.
                                </p>

                                {/* QR Code Container */}
                                <div className="mt-6 flex justify-center">
                                    <div className="rounded-xl border-2 border-dashed border-gray-200 ">
                                        <div className="rounded-lg border-2 border-emerald-600 p-2">
                                            <img
                                                src="/qr-code.jpeg"
                                                alt="Scan to donate via UPI"
                                                className="size-60 object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Link Input */}
                                <div className="mt-6 flex items-center gap-2 rounded-lg border border-secondary bg-primary px-3 py-2.5">
                                    <Link01 className="size-5 text-fg-quaternary" />
                                    <span className="flex-1 text-sm text-secondary">thealhamdtechnologies-1@oksbi</span>
                                    <button className="flex size-8 items-center justify-center rounded-md text-fg-quaternary transition duration-100 ease-linear hover:bg-primary_hover hover:text-fg-secondary">
                                        <Copy01 className="size-4" />
                                    </button>
                                </div>

                                {/* Download Options */}
                                <div className="mt-3 space-y-2">
                                    <a
                                        href="/qr-code.jpeg"
                                        download="masjid-madrasa-qr.jpeg"
                                        className="flex items-center gap-3 rounded-lg border border-secondary bg-primary px-3 py-2.5 transition duration-100 ease-linear hover:bg-primary_hover"
                                    >
                                        <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-50">
                                            <span className="text-xs font-bold text-emerald-600">JPG</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-primary">Download QR Code</p>
                                            <p className="text-xs text-tertiary">High quality image</p>
                                        </div>
                                        <div className="flex size-8 items-center justify-center rounded-md text-fg-quaternary">
                                            <Download01 className="size-4" />
                                        </div>
                                    </a>

                                    <button
                                        onClick={() => navigator.clipboard.writeText("thealhamdtechnologies-1@oksbi")}
                                        className="flex w-full items-center gap-3 rounded-lg border border-secondary bg-primary px-3 py-2.5 transition duration-100 ease-linear hover:bg-primary_hover"
                                    >
                                        <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-50">
                                            <span className="text-xs font-bold text-emerald-600">UPI</span>
                                        </div>
                                        <div className="flex-1 text-left">
                                            <p className="text-sm font-medium text-primary">Copy UPI ID</p>
                                            <p className="text-xs text-tertiary">thealhamdtechnologies-1@oksbi</p>
                                        </div>
                                        <div className="flex size-8 items-center justify-center rounded-md text-fg-quaternary">
                                            <Copy01 className="size-4" />
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
