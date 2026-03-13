"use client";

import { Check, Heart, Share07, Phone } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Avatar } from "@/components/base/avatar/avatar";
import { cx } from "@/utils/cx";

interface Component10Props {
    className?: string;
}

/** Mosque Illustration */
const MosqueIllustration = () => (
    <div className="relative mx-auto h-32 w-48 flex items-center justify-center">
        <svg width="120" height="100" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Mosque Dome */}
            <path d="M20 2C20 2 8 12 8 22C8 28 12 34 20 34C28 34 32 28 32 22C32 12 20 2 20 2Z" fill="#059669" />
            {/* Mosque Base */}
            <rect x="6" y="32" width="28" height="6" fill="#059669" />
            {/* Door */}
            <rect x="16" y="26" width="8" height="12" rx="4" fill="#ffffff" />
            {/* Crescent Moon */}
            <path d="M18 6C18 6 22 9 22 14C22 19 18 22 18 22C21 22 26 18 26 12C26 6 21 2 18 2C18 2 18 4 18 6Z" fill="#fbbf24" />
            {/* Star */}
            <path d="M30 4L30.5 5.5L32 6L30.5 6.5L30 8L29.5 6.5L28 6L29.5 5.5L30 4Z" fill="#fbbf24" />
        </svg>
    </div>
);

/** Feature Check Item */
const FeatureItem = ({ children }: { children: string }) => (
    <div className="flex items-center gap-3">
        <div className="flex size-5 items-center justify-center rounded-full bg-emerald-600">
            <Check className="size-3 text-white" />
        </div>
        <span className="text-secondary">{children}</span>
    </div>
);

/** Donation Info Card */
const DonationInfoCard = () => (
    <div className="overflow-hidden rounded-lg border border-emerald-200 bg-emerald-50 shadow-xl sm:rounded-xl">
        {/* Header */}
        <div className="flex items-center gap-2 border-b border-emerald-200 bg-emerald-100 px-3 py-2.5 sm:px-4 sm:py-3">
            <Heart className="size-4 text-emerald-600 sm:size-5" />
            <span className="text-sm font-semibold text-emerald-700 sm:text-base">Ways to Donate</span>
        </div>
        {/* Content */}
        <div className="p-4 space-y-3 sm:p-6 sm:space-y-4">
            {/* Bank Details */}
            <div className="rounded-lg bg-white p-3 border border-emerald-200 sm:p-4">
                <p className="text-xs font-semibold text-emerald-700 sm:text-sm">Bank Transfer</p>
                <p className="text-[10px] text-secondary mt-1 sm:text-xs">Account Name: Masjid & Madrasa Fund</p>
                <p className="text-[10px] text-secondary sm:text-xs">Account No: XXXX-XXXX-XXXX</p>
                <p className="text-[10px] text-secondary sm:text-xs">IFSC: XXXXXXX</p>
            </div>
            {/* UPI */}
            <div className="rounded-lg bg-white p-3 border border-emerald-200 sm:p-4">
                <p className="text-xs font-semibold text-emerald-700 sm:text-sm">UPI Payment</p>
                <p className="text-[10px] text-secondary mt-1 sm:text-xs">UPI ID: masjid@upi</p>
            </div>
            {/* Contact */}
            <div className="rounded-lg bg-white p-3 border border-emerald-200 sm:p-4">
                <p className="text-xs font-semibold text-emerald-700 sm:text-sm">Cash Donation</p>
                <p className="text-[10px] text-secondary mt-1 sm:text-xs">Contact Committee: +91 XXXXX XXXXX</p>
            </div>
        </div>
    </div>
);

/** Committee Members */
const CommitteeAvatars = () => (
    <div className="flex -space-x-2">
        <Avatar size="md" initials="IM" className="ring-2 ring-white bg-emerald-600" />
        <Avatar size="md" initials="AK" className="ring-2 ring-white bg-emerald-500" />
        <Avatar size="md" initials="MH" className="ring-2 ring-white bg-emerald-600" />
        <Avatar size="md" initials="FB" className="ring-2 ring-white bg-emerald-500" />
    </div>
);

export const Component10 = ({ className }: Component10Props) => {
    const features = [
        "Every contribution is Sadaqah Jariyah",
        "100% funds go to construction",
        "Regular progress updates provided",
        "Your name inscribed as donor (optional)",
    ];

    return (
        <section className={cx("w-full", className)}>
            <div className="mx-auto max-w-7xl border-l border-r border-secondary px-4 py-12 sm:px-6 sm:py-16 md:py-24 lg:px-8">
                {/* Illustration */}
                <MosqueIllustration />

                {/* Headline */}
                <h2 className="mt-6 text-center font-serif text-2xl font-normal italic tracking-tight text-primary sm:mt-8 sm:text-3xl md:text-4xl lg:text-5xl">
                    Be part of this
                    <br />
                    <span className="text-emerald-600">blessed journey</span>
                </h2>

                {/* Description */}
                <p className="mx-auto mt-4 max-w-xl text-center text-base text-secondary sm:mt-6 sm:text-lg">
                    Your contribution, no matter how small, will help build
                    a place of worship and learning for our community.
                </p>

                {/* Islamic Blessing */}
                <p className="mx-auto mt-3 max-w-xl text-center text-sm text-emerald-600 font-medium italic sm:mt-4 sm:text-base">
                    "May Allah reward you with goodness" - Jazakallahu Khairan
                </p>

                {/* Content Area */}
                <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-8 lg:grid-cols-2">
                    {/* Left - Donation Info */}
                    <DonationInfoCard />

                    {/* Right - Features & CTA */}
                    <div className="flex flex-col justify-center rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 sm:rounded-2xl sm:p-8">
                        <h3 className="text-base font-semibold text-primary sm:text-lg">
                            Why donate to this cause?
                        </h3>

                        <div className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
                            {features.map((feature, index) => (
                                <FeatureItem key={index}>{feature}</FeatureItem>
                            ))}
                        </div>

                        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
                            <Button
                                href="#donate"
                                size="lg"
                                className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 sm:w-auto"
                            >
                                Donate Now
                            </Button>
                            <Button
                                href="#share"
                                size="lg"
                                color="secondary"
                                iconLeading={Share07}
                                className="w-full rounded-full sm:w-auto"
                            >
                                Share With Others
                            </Button>
                        </div>

                        <div className="mt-4 flex items-center gap-3 sm:mt-6">
                            <CommitteeAvatars />
                            <span className="text-xs text-secondary sm:text-sm">Village Committee Members</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Component10;
