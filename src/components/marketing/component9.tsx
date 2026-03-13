"use client";

import { Star01, ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

interface Component9Props {
    className?: string;
}

/** G2 Logo */
const G2Logo = () => (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="14" fill="#FF492C" />
        <path d="M10.5 11.5H14.5V14H11.5C11.5 14 11.5 16 14 16C16.5 16 17 14 17 14L19 15.5C19 15.5 17.5 18.5 14 18.5C10.5 18.5 9 16 9 14C9 12 10.5 9.5 14 9.5C17.5 9.5 19 12 19 12L17 13.5C17 13.5 16.5 12 14 12C11.5 12 11.5 13 11.5 13V11.5H10.5Z" fill="white" />
    </svg>
);

/** Star Rating Component */
const StarRating = ({ rating = 5 }: { rating?: number }) => (
    <div className="flex gap-0.5">
        {[...Array(rating)].map((_, i) => (
            <Star01 key={i} className="size-4 fill-orange-400 text-orange-400" />
        ))}
    </div>
);

/** Company Logo Placeholder */
const CompanyLogo = ({ name }: { name: string }) => (
    <div className="flex h-16 items-center justify-center rounded-xl border border-secondary px-6 transition duration-100 ease-linear hover:border-green-light-300 hover:shadow-sm">
        <span className="text-lg font-semibold text-tertiary">{name}</span>
    </div>
);

/** Case Study Card */
const CaseStudyCard = () => (
    <div className="overflow-hidden rounded-2xl border border-secondary bg-primary shadow-lg">
        {/* Image */}
        <div className="aspect-video bg-cyan-200">
            <div className="flex h-full items-center justify-center">
                <span className="text-sm text-cyan-600">Airplane wing image</span>
            </div>
        </div>
        {/* Content */}
        <div className="p-6">
            <h3 className="text-lg font-semibold text-primary">
                How incident.io helped Skyscanner regain confidence in its incident response processes
            </h3>
            <Button
                href="#"
                color="link-color"
                size="sm"
                iconTrailing={ArrowRight}
                className="mt-4 text-green-light-600 hover:text-green-light-700"
            >
                See how Skyscanner uses incident.io
            </Button>
        </div>
    </div>
);

/** G2 Badge */
const G2Badge = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <div className="flex flex-col items-center">
        <div className="relative">
            <div className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-orange-500">
                <span className="text-[8px] font-bold text-white">G2</span>
            </div>
            <div className="flex h-20 w-16 flex-col items-center justify-center rounded-lg bg-orange-100">
                <span className="text-[10px] font-medium text-orange-600">FALL 2025</span>
                <span className="mt-1 text-center text-xs font-bold leading-tight text-orange-700">{title}</span>
                {subtitle && (
                    <span className="text-[8px] text-orange-500">{subtitle}</span>
                )}
            </div>
        </div>
    </div>
);

export const Component9 = ({ className }: Component9Props) => {
    const companies = [
        { name: "NETFLIX" },
        { name: "Etsy" },
        { name: "Skyscanner" },
        { name: "Vanta" },
        { name: "Intercom" },
        { name: "WorkOS" },
    ];

    const badges = [
        { title: "Momentum Leader", subtitle: "" },
        { title: "Users Most Likely To Recommend", subtitle: "MID-MARKET" },
        { title: "Best Support", subtitle: "ENTERPRISE" },
        { title: "High Performer", subtitle: "EMEA" },
        { title: "Best Est. ROI", subtitle: "ENTERPRISE" },
    ];

    return (
        <section className={cx("w-full", className)}>
            <div className="mx-auto max-w-7xl border-l border-r border-secondary px-4 py-16 sm:px-6 md:py-24 lg:px-8">
                {/* Top Section */}
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Left Content */}
                    <div>
                        {/* G2 Rating */}
                        <div className="flex items-center gap-2">
                            <G2Logo />
                            <StarRating rating={5} />
                        </div>

                        {/* Headline */}
                        <h2 className="mt-6 font-serif text-3xl font-normal italic tracking-tight text-primary md:text-4xl">
                            Here's how customers get
                            <br />
                            the most out of incident.io
                        </h2>

                        {/* CTA Button */}
                        <div className="mt-8">
                            <Button
                                href="#"
                                color="secondary"
                                size="lg"
                                className="rounded-full"
                            >
                                Read all customer stories
                            </Button>
                        </div>

                        {/* Company Logos Grid */}
                        <div className="mt-12 grid grid-cols-3 gap-3">
                            {companies.map((company, index) => (
                                <CompanyLogo key={index} name={company.name} />
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Case Study Card */}
                    <div className="flex items-center justify-center">
                        <CaseStudyCard />
                    </div>
                </div>

                {/* G2 Badges */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
                    {badges.map((badge, index) => (
                        <G2Badge key={index} title={badge.title} subtitle={badge.subtitle} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Component9;
