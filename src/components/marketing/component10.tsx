"use client";

import { Check } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Avatar } from "@/components/base/avatar/avatar";
import { cx } from "@/utils/cx";

interface Component10Props {
    className?: string;
}

/** Stack Illustration */
const StackIllustration = () => (
    <div className="relative mx-auto h-32 w-48">
        {/* Stack of papers/documents */}
        <div className="absolute bottom-0 left-1/2 h-20 w-32 -translate-x-1/2 rounded-lg border-2 border-dashed border-green-light-300 bg-green-light-50" />
        <div className="absolute bottom-2 left-1/2 h-20 w-32 -translate-x-1/2 rounded-lg border-2 border-dashed border-green-light-300 bg-green-light-50" />
        <div className="absolute bottom-4 left-1/2 h-20 w-32 -translate-x-1/2 rounded-lg border-2 border-dashed border-green-light-300 bg-green-light-50">
            {/* Lines */}
            <div className="mt-4 space-y-2 px-4">
                <div className="h-2 w-full rounded bg-green-light-200" />
                <div className="h-2 w-3/4 rounded bg-green-light-200" />
                <div className="h-2 w-1/2 rounded bg-green-light-200" />
            </div>
        </div>
        {/* Arrow */}
        <div className="absolute -right-4 top-0">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-green-light-400">
                <path d="M8 24L24 8M24 8H12M24 8V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    </div>
);

/** Feature Check Item */
const FeatureItem = ({ children }: { children: string }) => (
    <div className="flex items-center gap-3">
        <div className="flex size-5 items-center justify-center rounded-full bg-green-light-500">
            <Check className="size-3 text-white" />
        </div>
        <span className="text-secondary">{children}</span>
    </div>
);

/** Dashboard Preview */
const DashboardPreview = () => (
    <div className="overflow-hidden rounded-xl border border-secondary bg-primary shadow-xl">
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 border-b border-secondary bg-secondary px-4 py-2">
            <div className="size-3 rounded-full bg-error-400" />
            <div className="size-3 rounded-full bg-warning-400" />
            <div className="size-3 rounded-full bg-success-400" />
        </div>
        {/* Dashboard Content */}
        <div className="p-4">
            {/* Sidebar + Content */}
            <div className="flex gap-4">
                {/* Sidebar */}
                <div className="w-12 space-y-2">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-green-light-500">
                        <span className="text-xs text-white">H</span>
                    </div>
                    <div className="h-4 w-full rounded bg-tertiary" />
                    <div className="h-4 w-full rounded bg-tertiary" />
                </div>
                {/* Main Content */}
                <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-primary">Home</span>
                        <div className="h-4 w-20 rounded bg-tertiary" />
                    </div>
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2">
                        <div className="rounded-lg bg-secondary p-3">
                            <p className="text-xs text-tertiary">Trends</p>
                            <p className="text-lg font-semibold text-success-500">+27%</p>
                        </div>
                        <div className="rounded-lg bg-secondary p-3">
                            <p className="text-xs text-tertiary">Time spent</p>
                            <p className="text-lg font-semibold text-error-500">-31%</p>
                        </div>
                        <div className="rounded-lg bg-secondary p-3">
                            <p className="text-xs text-tertiary">Overnight</p>
                            <p className="text-lg font-semibold text-success-500">+14%</p>
                        </div>
                    </div>
                    {/* Incidents */}
                    <div className="space-y-2">
                        <p className="text-xs font-medium text-tertiary">Active incidents</p>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="rounded bg-error-50 p-2 text-xs text-error-700">Triage</div>
                            <div className="rounded bg-warning-50 p-2 text-xs text-warning-700">Investigating</div>
                            <div className="rounded bg-success-50 p-2 text-xs text-success-700">Fixing</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

/** Team Avatars */
const TeamAvatars = () => (
    <div className="flex -space-x-2">
        <Avatar size="md" initials="JD" className="ring-2 ring-white" />
        <Avatar size="md" initials="AS" className="ring-2 ring-white" />
        <Avatar size="md" initials="MK" className="ring-2 ring-white" />
        <Avatar size="md" initials="RW" className="ring-2 ring-white" />
    </div>
);

export const Component10 = ({ className }: Component10Props) => {
    const features = [
        "All-in-one incident management",
        "Our unmatched speed of deployment",
        "Why we're loved by users and easily adopted",
        "How we work for the whole organization",
    ];

    return (
        <section className={cx("w-full", className)}>
            <div className="mx-auto max-w-7xl border-l border-r border-secondary px-4 py-16 sm:px-6 md:py-24 lg:px-8">
                {/* Illustration */}
                <StackIllustration />

                {/* Headline */}
                <h2 className="mt-8 text-center font-serif text-3xl font-normal italic tracking-tight text-primary md:text-4xl lg:text-5xl">
                    So good, you'll break
                    <br />
                    things on purpose
                </h2>

                {/* Description */}
                <p className="mx-auto mt-6 max-w-xl text-center text-lg text-secondary">
                    Ready for modern incident management? Book a call
                    with one of our experts today.
                </p>

                {/* Content Area */}
                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                    {/* Left - Dashboard Preview */}
                    <DashboardPreview />

                    {/* Right - Features & CTA */}
                    <div className="flex flex-col justify-center rounded-2xl border border-secondary bg-secondary/30 p-8">
                        <h3 className="text-lg font-semibold text-primary">
                            We'd love to talk to you about
                        </h3>

                        <div className="mt-6 space-y-4">
                            {features.map((feature, index) => (
                                <FeatureItem key={index}>{feature}</FeatureItem>
                            ))}
                        </div>

                        <div className="mt-8 flex items-center gap-4">
                            <Button
                                href="#"
                                size="lg"
                                className="rounded-full bg-green-light-500 hover:bg-green-light-600"
                            >
                                Get a demo
                            </Button>
                            <TeamAvatars />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Component10;
