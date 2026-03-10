"use client";

import type { FC, ReactNode } from "react";
import {
    ArrowRight,
    MessageChatSquare,
    Zap,
    CursorClick02,
    FaceHappy,
    Command,
    MessageHeartSquare,
} from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

export interface PrincipleItem {
    /** Icon component to display */
    icon: FC<{ className?: string }> | ReactNode;
    /** Principle title */
    title: string;
    /** Principle description */
    description: string;
    /** Link URL for "Learn more" */
    href?: string;
}

export interface PrinciplesSectionProps {
    /** Section tagline (small text above title) */
    tagline?: string;
    /** Section title */
    title: string;
    /** Section description */
    description?: string;
    /** Array of principles to display */
    items: PrincipleItem[];
    /** Link text for each item */
    linkText?: string;
    /** Additional class names */
    className?: string;
}

interface PrincipleCardProps {
    item: PrincipleItem;
    linkText: string;
}

const PrincipleCard = ({ item, linkText }: PrincipleCardProps) => {
    return (
        <li className="border-b border-r border-error-200 p-6 md:p-8">
            <div className="flex flex-col gap-4">
                {/* Featured Icon - responsive sizes */}
                <FeaturedIcon
                    icon={item.icon}
                    color="error"
                    theme="light"
                    size="lg"
                    className="hidden md:inline-flex rounded-none!"
                />
                <FeaturedIcon
                    icon={item.icon}
                    color="error"
                    theme="light"
                    size="md"
                    className="inline-flex md:hidden rounded-none!"
                />

                {/* Content */}
                <div>
                    <h3 className="text-lg font-semibold text-primary">
                        {item.title}
                    </h3>
                    <p className="mt-1 text-md text-tertiary">
                        {item.description}
                    </p>
                </div>

                {/* Link */}
                {item.href && (
                    <Button
                        href={item.href}
                        color="link-destructive"
                        iconTrailing={ArrowRight}
                        className="justify-start p-0!"
                    >
                        {linkText}
                    </Button>
                )}
            </div>
        </li>
    );
};

export const PrinciplesSection = ({
    tagline,
    title,
    description,
    items,
    linkText = "Learn more",
    className,
}: PrinciplesSectionProps) => {
    return (
        <section className={cx("bg-primary py-16 md:py-24", className)}>
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                {/* Header */}
                <div className="flex w-full max-w-3xl flex-col">
                    {tagline && (
                        <span className="text-sm font-semibold text-error-600 md:text-md">
                            {tagline}
                        </span>
                    )}
                    <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
                        {title}
                    </h2>
                    {description && (
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            {description}
                        </p>
                    )}
                </div>

                {/* Grid */}
                <div className="mt-12 md:mt-16">
                    <ul className="grid w-full grid-cols-1 border-t border-l border-error-200 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map((item, index) => (
                            <PrincipleCard
                                key={index}
                                item={item}
                                linkText={linkText}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

/** Default principles data */
export const defaultPrinciples: PrincipleItem[] = [
    {
        icon: MessageChatSquare,
        title: "Care about our team",
        description:
            "Understand what matters to our employees. Give them what they need to do their best work.",
        href: "#",
    },
    {
        icon: Zap,
        title: "Be excellent to each other",
        description:
            "No games. No bullshit. We rely on our peers to improve. Be open, honest and kind.",
        href: "#",
    },
    {
        icon: CursorClick02,
        title: "Pride in what we do",
        description:
            "Value quality and integrity in everything we do. At all times. No exceptions.",
        href: "#",
    },
    {
        icon: FaceHappy,
        title: "Don't #!&$ the customer",
        description:
            "Understand customers' stated and unstated needs. Make them wildly successful.",
        href: "#",
    },
    {
        icon: Command,
        title: "Do the impossible",
        description:
            'Be energized by difficult problems. Revel in unknowns. Ask "Why?", but always question"',
        href: "#",
    },
    {
        icon: MessageHeartSquare,
        title: "Sweat the small stuff",
        description:
            "We believe the best products come from the best attention to detail. Sweat the small stuff.",
        href: "#",
    },
];
