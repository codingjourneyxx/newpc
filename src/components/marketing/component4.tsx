"use client";

import { Home02, BookOpen01, Users01, Heart, Star01, Building07, GraduationHat01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import type { FC } from "react";

interface FeatureCardProps {
    icon: FC<{ className?: string }>;
    title: string;
    description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
    <div className="flex flex-col rounded-2xl border border-secondary bg-primary p-6 transition duration-100 ease-linear hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-md">
        <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-100">
            <Icon className="size-5 text-emerald-600" />
        </div>
        <h3 className="mt-16 text-lg font-semibold text-primary">{title}</h3>
        <p className="mt-1 text-sm text-tertiary">{description}</p>
    </div>
);

interface TabButtonProps {
    icon: FC<{ className?: string }>;
    label: string;
    isActive?: boolean;
    isHighlighted?: boolean;
}

const TabButton = ({ icon: Icon, label, isActive, isHighlighted }: TabButtonProps) => (
    <button
        className={cx(
            "flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition duration-100 ease-linear",
            isHighlighted
                ? "bg-emerald-600 text-white shadow-lg"
                : isActive
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-secondary text-secondary hover:bg-tertiary"
        )}
    >
        <Icon className="size-4" />
        <span>{label}</span>
    </button>
);

interface Component4Props {
    className?: string;
}

export const Component4 = ({ className }: Component4Props) => {
    const features = [
        {
            icon: Home02,
            title: "Masjid",
            description: "A place for daily prayers and Jummah congregation",
        },
        {
            icon: BookOpen01,
            title: "Madrasa",
            description: "Islamic education for children and adults",
        },
        {
            icon: Users01,
            title: "Community Hall",
            description: "Space for gatherings and community events",
        },
        {
            icon: Heart,
            title: "Welfare Center",
            description: "Support for the needy in our village",
        },
    ];

    const tabs = [
        { icon: Star01, label: "5 Daily Prayers", isActive: false },
        { icon: BookOpen01, label: "Quran Classes", isActive: false },
        { icon: GraduationHat01, label: "Islamic Studies", isHighlighted: true },
        { icon: Users01, label: "Community Events", isActive: false },
        { icon: Heart, label: "Charity Work", isActive: false },
    ];

    return (
        <section className={cx("w-full", className)}>
            <div className="mx-auto max-w-7xl border-l border-r border-secondary px-4 py-16 sm:px-6 md:py-24 lg:px-8">
                {/* Floating Icons */}
                <div className="relative mx-auto mb-8 flex h-24 w-64 items-center justify-center">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-emerald-100 shadow-sm">
                        <BookOpen01 className="size-5 text-emerald-500" />
                    </div>
                    <div className="absolute left-12 top-4 flex size-10 items-center justify-center rounded-lg bg-emerald-100 shadow-sm">
                        <Heart className="size-5 text-emerald-500" />
                    </div>
                    <div className="absolute right-12 top-4 flex size-10 items-center justify-center rounded-lg bg-emerald-100 shadow-sm">
                        <Users01 className="size-5 text-emerald-500" />
                    </div>
                    <div className="absolute right-0 top-0 flex size-10 items-center justify-center rounded-lg bg-emerald-100 shadow-sm">
                        <Star01 className="size-5 text-emerald-500" />
                    </div>
                    <div className="absolute bottom-0 left-1/2 flex size-12 -translate-x-1/2 items-center justify-center rounded-xl bg-emerald-600 shadow-lg">
                        <Home02 className="size-6 text-white" />
                    </div>
                </div>

                {/* Headline */}
                <h2 className="text-center font-serif text-3xl font-normal italic tracking-tight text-primary md:text-4xl lg:text-5xl">
                    Building a <span className="not-italic text-emerald-600">center of faith</span>
                    <br />
                    <span className="not-italic">and learning</span> for our village
                </h2>

                {/* Description */}
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-secondary">
                    Our Masjid and Madrasa will serve as a spiritual hub for
                    prayers, education, and community welfare activities
                    for generations to come.
                </p>

                {/* Feature Cards */}
                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>

                {/* Bottom Tabs */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
                    {tabs.map((tab, index) => (
                        <TabButton
                            key={index}
                            icon={tab.icon}
                            label={tab.label}
                            isActive={tab.isActive}
                            isHighlighted={tab.isHighlighted}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Component4;
