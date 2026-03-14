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
    <div className="group flex flex-col border border-secondary bg-primary p-4 transition duration-200 ease-out hover:border-emerald-600 hover:bg-emerald-600 hover:shadow-lg sm:p-6">
        <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-100 transition duration-200 ease-out group-hover:bg-white/20 sm:size-10">
            <Icon className="size-4 text-emerald-600 transition duration-200 ease-out group-hover:text-white sm:size-5" />
        </div>
        <h3 className="mt-6 text-base font-semibold text-primary transition duration-200 ease-out group-hover:text-white sm:text-lg">{title}</h3>
        <p className="mt-1 text-xs text-tertiary transition duration-200 ease-out group-hover:text-white/80 sm:text-sm">{description}</p>
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
            "flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium transition duration-100 ease-linear sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm",
            isHighlighted
                ? "bg-emerald-600 text-white shadow-lg"
                : isActive
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-secondary text-secondary hover:bg-tertiary"
        )}
    >
        <Icon className="size-3.5 sm:size-4" />
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
                {/* Headline */}
                <h2 className="text-center font-serif text-2xl font-normal italic tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl">
                    Building a <span className="not-italic text-emerald-600">center of faith</span>
                    <br />
                    <span className="not-italic">and learning</span> for our village
                </h2>

                {/* Description */}
                <p className="mx-auto mt-4 max-w-2xl text-center text-base text-secondary sm:mt-6 sm:text-lg">
                    Our Masjid and Madrasa will serve as a spiritual hub for
                    prayers, education, and community welfare activities
                    for generations to come.
                </p>

                {/* Feature Cards */}
                <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
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
                <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-12 sm:gap-3">
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
