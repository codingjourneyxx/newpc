"use client";

import { Heart, ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

interface Component9Props {
    className?: string;
}

/** Crescent Icon */
const CrescentIcon = () => (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="14" fill="#059669" />
        <path d="M12 6C12 6 16 9 16 14C16 19 12 22 12 22C15 22 20 18 20 14C20 8 15 4 12 4C12 4 12 5 12 6Z" fill="#fbbf24" />
    </svg>
);

/** Donor Count Display */
const DonorCount = ({ count = 1250 }: { count?: number }) => (
    <div className="flex items-center gap-2">
        <Heart className="size-5 fill-emerald-500 text-emerald-500" />
        <span className="text-lg font-semibold text-emerald-700">{count.toLocaleString()}+ Donors</span>
    </div>
);

/** Village Name Card */
const VillageCard = ({ name }: { name: string }) => (
    <div className="flex h-16 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 px-6 transition duration-100 ease-linear hover:border-emerald-400 hover:shadow-sm">
        <span className="text-md font-medium text-emerald-700">{name}</span>
    </div>
);

/** Testimonial Card */
const TestimonialCard = () => (
    <div className="overflow-hidden rounded-2xl border border-secondary bg-primary shadow-lg">
        {/* Image */}
        <div className="aspect-video bg-emerald-100">
            <div className="flex h-full flex-col items-center justify-center gap-2">
                <svg width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4C20 4 10 12 10 20C10 24 12 28 20 28C28 28 30 24 30 20C30 12 20 4 20 4Z" fill="#059669" />
                    <rect x="8" y="26" width="24" height="10" fill="#059669" />
                    <rect x="16" y="28" width="8" height="8" rx="4" fill="#ffffff" />
                    <path d="M18 8C18 8 21 10 21 14C21 18 18 20 18 20C20 20 24 17 24 12C24 7 20 4 18 4C18 4 18 6 18 8Z" fill="#fbbf24" />
                </svg>
                <span className="text-sm text-emerald-600">Construction Progress</span>
            </div>
        </div>
        {/* Content */}
        <div className="p-6">
            <h3 className="text-lg font-semibold text-primary">
                Alhamdulillah! Foundation work has begun with the blessings of our generous donors
            </h3>
            <Button
                href="#gallery"
                color="link-color"
                size="sm"
                iconTrailing={ArrowRight}
                className="mt-4 text-emerald-600 hover:text-emerald-700"
            >
                View Construction Progress
            </Button>
        </div>
    </div>
);

/** Blessing Badge */
const BlessingBadge = ({ title, arabic }: { title: string; arabic?: string }) => (
    <div className="flex flex-col items-center">
        <div className="flex h-20 w-24 flex-col items-center justify-center rounded-lg bg-emerald-100 border border-emerald-200">
            {arabic && <span className="text-lg font-arabic text-emerald-700">{arabic}</span>}
            <span className="mt-1 text-center text-xs font-medium leading-tight text-emerald-600">{title}</span>
        </div>
    </div>
);

export const Component9 = ({ className }: Component9Props) => {
    const supportingVillages = [
        { name: "Our Village" },
        { name: "Nearby Town" },
        { name: "City Supporters" },
        { name: "Overseas Donors" },
        { name: "Local Businesses" },
        { name: "Youth Groups" },
    ];

    const blessings = [
        { title: "Sadaqah Jariyah", arabic: "صدقة جارية" },
        { title: "Barakah", arabic: "بركة" },
        { title: "Tawakkul", arabic: "توكل" },
        { title: "Ihsan", arabic: "إحسان" },
        { title: "Ummah Unity", arabic: "أمة" },
    ];

    return (
        <section className={cx("w-full", className)}>
            <div className="mx-auto max-w-7xl border-l border-r border-secondary px-4 py-16 sm:px-6 md:py-24 lg:px-8">
                {/* Top Section */}
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Left Content */}
                    <div>
                        {/* Donor Count */}
                        <div className="flex items-center gap-3">
                            <CrescentIcon />
                            <DonorCount count={1250} />
                        </div>

                        {/* Headline */}
                        <h2 className="mt-6 font-serif text-3xl font-normal italic tracking-tight text-primary md:text-4xl">
                            Our generous donors from
                            <br />
                            near and far
                        </h2>

                        {/* CTA Button */}
                        <div className="mt-8">
                            <Button
                                href="#donate"
                                size="lg"
                                className="rounded-full bg-emerald-600 hover:bg-emerald-700"
                            >
                                Join Our Donors
                            </Button>
                        </div>

                        {/* Supporting Groups Grid */}
                        <div className="mt-12 grid grid-cols-3 gap-3">
                            {supportingVillages.map((village, index) => (
                                <VillageCard key={index} name={village.name} />
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Testimonial Card */}
                    <div className="flex items-center justify-center">
                        <TestimonialCard />
                    </div>
                </div>

                {/* Blessing Badges */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
                    {blessings.map((blessing, index) => (
                        <BlessingBadge key={index} title={blessing.title} arabic={blessing.arabic} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Component9;
