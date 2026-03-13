"use client";

import { Phone, Zap, Stars02, BarChart07, BookOpen02, GitBranch01, BarChartSquare02, Settings01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import type { FC } from "react";

interface FeatureCardProps {
    icon: FC<{ className?: string }>;
    title: string;
    description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
    <div className="flex flex-col rounded-2xl border border-secondary bg-primary p-6 transition duration-100 ease-linear hover:border-green-light-300 hover:bg-green-light-50 hover:shadow-md">
        <div className="flex size-10 items-center justify-center rounded-lg bg-green-light-100">
            <Icon className="size-5 text-green-light-600" />
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
                ? "bg-green-light-500 text-white shadow-lg"
                : isActive
                    ? "bg-green-light-100 text-green-light-700"
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
            icon: Phone,
            title: "On-call",
            description: "Get the right people in the room",
        },
        {
            icon: Zap,
            title: "Response",
            description: "Run your incident end-to-end",
        },
        {
            icon: Stars02,
            title: "AI SRE",
            description: "Resolve incidents in record time",
        },
        {
            icon: BarChart07,
            title: "Status Pages",
            description: "Keep customers in the loop",
        },
    ];

    const tabs = [
        { icon: BookOpen02, label: "Catalog", isActive: false },
        { icon: GitBranch01, label: "Workflows", isActive: false },
        { icon: Stars02, label: "AI", isHighlighted: true },
        { icon: BarChartSquare02, label: "Insights", isActive: false },
        { icon: Settings01, label: "Integrations", isActive: false },
    ];

    return (
        <section className={cx("w-full", className)}>
            <div className="mx-auto max-w-7xl border-l border-r border-secondary px-4 py-16 sm:px-6 md:py-24 lg:px-8">
                {/* Floating Icons */}
                <div className="relative mx-auto mb-8 flex h-24 w-64 items-center justify-center">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-green-light-100 shadow-sm">
                        <BookOpen02 className="size-5 text-green-light-500" />
                    </div>
                    <div className="absolute left-12 top-4 flex size-10 items-center justify-center rounded-lg bg-green-light-100 shadow-sm">
                        <BarChart07 className="size-5 text-green-light-500" />
                    </div>
                    <div className="absolute right-12 top-4 flex size-10 items-center justify-center rounded-lg bg-green-light-100 shadow-sm">
                        <Settings01 className="size-5 text-green-light-500" />
                    </div>
                    <div className="absolute right-0 top-0 flex size-10 items-center justify-center rounded-lg bg-green-light-100 shadow-sm">
                        <GitBranch01 className="size-5 text-green-light-500" />
                    </div>
                    <div className="absolute bottom-0 left-1/2 flex size-12 -translate-x-1/2 items-center justify-center rounded-xl bg-green-light-500 shadow-lg">
                        <Zap className="size-6 text-white" />
                    </div>
                </div>

                {/* Headline */}
                <h2 className="text-center font-serif text-3xl font-normal italic tracking-tight text-primary md:text-4xl lg:text-5xl">
                    Meet the <span className="not-italic">incident command</span>
                    <br />
                    <span className="not-italic">center</span> for fast-moving teams
                </h2>

                {/* Description */}
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-secondary">
                    From alert to resolution, give your team everything they
                    need to respond quickly, reduce downtime, and keep
                    customers in the loop.
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
