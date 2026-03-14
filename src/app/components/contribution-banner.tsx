"use client";

import { cx } from "@/utils/cx";
import { Building07, BookOpen01, Users01, Heart, Star01 } from "@untitledui/icons";
import type { FC } from "react";

interface FeatureCardProps {
    icon: FC<{ className?: string }>;
    title: string;
    description: string;
    index: number;
}

const FeatureCard = ({ icon: Icon, title, description }: Omit<FeatureCardProps, "index">) => (
    <div className="group rounded-lg bg-white/10 backdrop-blur-md border border-white/20 p-3 transition-all duration-300 hover:bg-white/20 sm:rounded-xl sm:p-4">
        <div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-400 shadow-lg shadow-emerald-500/20 sm:size-12">
            <Icon className="size-5 text-white sm:size-6" />
        </div>
        <h3 className="mt-3 text-sm font-semibold text-white sm:text-base">{title}</h3>
        <p className="mt-1 text-xs text-white/70 line-clamp-2">{description}</p>
    </div>
);

interface ContributionBannerProps {
    className?: string;
}

export const ContributionBanner = ({ className }: ContributionBannerProps) => {
    const features = [
        {
            icon: Building07,
            title: "Masjid",
            description: "A beautiful mosque for daily prayers and Friday gatherings",
        },
        {
            icon: BookOpen01,
            title: "Madrasa",
            description: "Islamic education center for children and adults",
        },
        {
            icon: Users01,
            title: "Community Hall",
            description: "Space for weddings, events and community gatherings",
        },
        {
            icon: Heart,
            title: "Welfare Programs",
            description: "Support for orphans, widows and families in need",
        },
        {
            icon: Star01,
            title: "Quran Classes",
            description: "Daily Quran recitation and memorization programs",
        },
        {
            icon: Building07,
            title: "Wudu Area",
            description: "Clean ablution facilities for men and women",
        },
        {
            icon: BookOpen01,
            title: "Library",
            description: "Islamic books and educational resources",
        },
        {
            icon: Users01,
            title: "Guest Rooms",
            description: "Accommodation for travelers and visitors",
        },
    ];

    return (
        <div className={cx("w-full relative overflow-hidden h-[600px] sm:h-[800px]", className)}>
            {/* Background with image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/rightcolbg.jpg')" }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 via-emerald-900/30 to-emerald-900/70" />

            {/* Decorative elements */}
            <div className="absolute left-10 top-20 hidden size-72 rounded-full bg-emerald-500/10 blur-3xl lg:block" />
            <div className="absolute right-10 bottom-20 hidden size-96 rounded-full bg-teal-500/10 blur-3xl lg:block" />

            <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center border-l border-r border-white/10 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto w-full max-w-5xl">
                    {/* Badge */}
                    <div className="mb-4 flex justify-center sm:mb-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm sm:px-4 sm:py-2">
                            <Star01 className="size-3.5 text-emerald-400 sm:size-4" />
                            <span className="text-xs font-medium text-white/90 sm:text-sm">Sadaqah Jariyah - Ongoing Charity</span>
                        </div>
                    </div>

                    {/* Headline */}
                    <h2 className="text-center font-serif text-2xl font-normal italic tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                        Every <span className="not-italic font-medium bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">contribution</span> matters
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base md:text-lg">
                        Your <span className="font-semibold text-emerald-300">₹1 Rupee</span> contribution will help build a place of worship and education for generations to come.
                    </p>

                    {/* Feature Cards - 4 columns on desktop */}
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 lg:grid-cols-4 lg:gap-4">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContributionBanner;
