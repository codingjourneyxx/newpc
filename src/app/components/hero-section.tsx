"use client";

import { Link01, Copy01, Download01, ShieldTick, CheckVerified01, Receipt, ArrowUpRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/app/components/header";
import { cx } from "@/utils/cx";

// Hoisted static JSX elements
const dotPatternStyle = {
    backgroundImage: 'radial-gradient(circle, #059669 1px, transparent 1px)',
    backgroundSize: '20px 20px'
};

const trustBadges = [
    { icon: ShieldTick, label: "100% Secure" },
    { icon: Receipt, label: "Tax Deductible" },
    { icon: CheckVerified01, label: "Verified Project" },
] as const;

const UPI_ID = "thealhamdtechnologies-1@oksbi";

export const HeroSectionWrapper = ({ className }: { className?: string }) => (
    <div className={cx("min-h-screen bg-primary", className)}>
        <Header />
        <div className="mx-auto max-w-7xl border-l border-r border-secondary">
            <section className="min-h-screen lg:min-h-0 lg:h-[750px]">
                <div className="mx-auto h-full max-w-7xl">
                    <div className="grid h-full grid-cols-1 items-stretch lg:grid-cols-2">
                        {/* Left Column */}
                        <div className="relative flex flex-col justify-center px-4 py-12 pt-20 sm:px-6 md:py-16 md:pt-24 lg:py-0 lg:pt-24 lg:px-8">
                            <div className="pointer-events-none absolute inset-0 opacity-[0.15]" style={dotPatternStyle} />

                            <h1 className="font-serif text-3xl font-normal italic tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl">
                                Build Our Masjid<br />& Madrasa Together
                            </h1>

                            <div className="mt-6 space-y-3">
                                <p className="text-lg leading-relaxed text-secondary md:text-xl">
                                    An appeal is made to all <span className="font-semibold text-primary">Islamic brothers</span> for a contribution of{" "}
                                    <span className="font-bold text-emerald-600">₹1 rupee</span> for the construction of this{" "}
                                    <span className="font-semibold italic text-emerald-700">mosque and madrasa</span> in our village.
                                </p>
                                <p className="text-lg font-medium text-emerald-600 md:text-xl">"May Allah reward you with goodness"</p>
                            </div>

                            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                                <Button href="#donate" size="xl" iconTrailing={<ArrowUpRight data-icon className="!text-white" />} className="rounded-lg bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-700 hover:via-emerald-600 hover:to-teal-600">
                                    Donate Now
                                </Button>
                                <Button href="#about" color="secondary" size="xl" iconTrailing={ArrowUpRight} className="rounded-lg">
                                    Learn More
                                </Button>
                            </div>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                {trustBadges.map(({ icon: Icon, label }) => (
                                    <div key={label} className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5">
                                        <Icon className="size-4 text-emerald-600" />
                                        <span className="text-xs font-medium text-emerald-700">{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - QR Code */}
                        <div className="flex min-h-[400px] w-full items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-12 sm:p-6 md:p-8 lg:h-full lg:min-h-0 lg:py-8" style={{ backgroundImage: "url('/rightcolbg.jpg')" }}>
                            <div className="flex w-full max-w-sm flex-col gap-4 sm:max-w-md">
                                <div className="rounded-xs border border-secondary bg-primary p-4 shadow-2xl sm:p-6">
                                    <h3 className="text-center text-base font-semibold text-primary sm:text-lg">Share via QR code</h3>
                                    <p className="mt-2 text-center text-xs text-tertiary sm:text-sm">Scan this QR code to donate directly to our Masjid & Madrasa project.</p>

                                    <div className="mt-4 flex justify-center sm:mt-6">
                                        <div className="rounded-xl border-2 border-dashed border-gray-200">
                                            <div className="rounded-lg border-2 border-emerald-600 p-1.5 sm:p-2">
                                                <img src="/qr-code.jpeg" alt="Scan to donate via UPI" className="h-60 w-full object-contain sm:size-48 md:size-60" loading="lazy" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center gap-2 rounded-lg border border-secondary bg-primary px-2 py-2 sm:mt-6 sm:px-3 sm:py-2.5">
                                        <Link01 className="size-4 flex-shrink-0 text-fg-quaternary sm:size-5" />
                                        <span className="flex-1 truncate text-xs text-secondary sm:text-sm">{UPI_ID}</span>
                                        <button onClick={() => navigator.clipboard.writeText(UPI_ID)} className="flex size-7 flex-shrink-0 items-center justify-center rounded-md text-fg-quaternary transition duration-100 ease-linear hover:bg-primary_hover hover:text-fg-secondary sm:size-8">
                                            <Copy01 className="size-3.5 sm:size-4" />
                                        </button>
                                    </div>

                                    <div className="mt-2 space-y-2 sm:mt-3">
                                        <a href="/qr-code.jpeg" download="masjid-madrasa-qr.jpeg" className="flex items-center gap-2 rounded-lg border border-secondary bg-primary px-2 py-2 transition duration-100 ease-linear hover:bg-primary_hover sm:gap-3 sm:px-3 sm:py-2.5">
                                            <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50 sm:size-10">
                                                <img src="/pnglogo.svg" alt="" className="size-5 sm:size-6" />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="truncate text-xs font-medium text-primary sm:text-sm">Download QR Code</p>
                                                <p className="truncate text-[10px] text-tertiary sm:text-xs">High quality image</p>
                                            </div>
                                            <Download01 className="size-3.5 text-fg-quaternary sm:size-4" />
                                        </a>

                                        <button onClick={() => navigator.clipboard.writeText(UPI_ID)} className="flex w-full items-center gap-2 rounded-lg border border-secondary bg-primary px-2 py-2 transition duration-100 ease-linear hover:bg-primary_hover sm:gap-3 sm:px-3 sm:py-2.5">
                                            <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50 sm:size-10">
                                                <img src="/upi-logo.png" alt="" className="size-5 sm:size-6" />
                                            </div>
                                            <div className="min-w-0 flex-1 text-left">
                                                <p className="truncate text-xs font-medium text-primary sm:text-sm">Copy UPI ID</p>
                                                <p className="truncate text-[10px] text-tertiary sm:text-xs">{UPI_ID}</p>
                                            </div>
                                            <Copy01 className="size-3.5 text-fg-quaternary sm:size-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
);

export default HeroSectionWrapper;
