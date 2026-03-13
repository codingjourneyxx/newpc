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
    <div className="overflow-hidden rounded-xl border border-emerald-200 bg-emerald-50 shadow-xl">
        {/* Header */}
        <div className="flex items-center gap-2 border-b border-emerald-200 bg-emerald-100 px-4 py-3">
            <Heart className="size-5 text-emerald-600" />
            <span className="font-semibold text-emerald-700">Ways to Donate</span>
        </div>
        {/* Content */}
        <div className="p-6 space-y-4">
            {/* Bank Details */}
            <div className="rounded-lg bg-white p-4 border border-emerald-200">
                <p className="text-sm font-semibold text-emerald-700">Bank Transfer</p>
                <p className="text-xs text-secondary mt-1">Account Name: Masjid & Madrasa Fund</p>
                <p className="text-xs text-secondary">Account No: XXXX-XXXX-XXXX</p>
                <p className="text-xs text-secondary">IFSC: XXXXXXX</p>
            </div>
            {/* UPI */}
            <div className="rounded-lg bg-white p-4 border border-emerald-200">
                <p className="text-sm font-semibold text-emerald-700">UPI Payment</p>
                <p className="text-xs text-secondary mt-1">UPI ID: masjid@upi</p>
            </div>
            {/* Contact */}
            <div className="rounded-lg bg-white p-4 border border-emerald-200">
                <p className="text-sm font-semibold text-emerald-700">Cash Donation</p>
                <p className="text-xs text-secondary mt-1">Contact Committee: +91 XXXXX XXXXX</p>
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
            <div className="mx-auto max-w-7xl border-l border-r border-secondary px-4 py-16 sm:px-6 md:py-24 lg:px-8">
                {/* Illustration */}
                <MosqueIllustration />

                {/* Headline */}
                <h2 className="mt-8 text-center font-serif text-3xl font-normal italic tracking-tight text-primary md:text-4xl lg:text-5xl">
                    Be part of this
                    <br />
                    <span className="text-emerald-600">blessed journey</span>
                </h2>

                {/* Description */}
                <p className="mx-auto mt-6 max-w-xl text-center text-lg text-secondary">
                    Your contribution, no matter how small, will help build
                    a place of worship and learning for our community.
                </p>

                {/* Islamic Blessing */}
                <p className="mx-auto mt-4 max-w-xl text-center text-md text-emerald-600 font-medium italic">
                    "May Allah reward you with goodness" - Jazakallahu Khairan
                </p>

                {/* Content Area */}
                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                    {/* Left - Donation Info */}
                    <DonationInfoCard />

                    {/* Right - Features & CTA */}
                    <div className="flex flex-col justify-center rounded-2xl border border-emerald-200 bg-emerald-50/50 p-8">
                        <h3 className="text-lg font-semibold text-primary">
                            Why donate to this cause?
                        </h3>

                        <div className="mt-6 space-y-4">
                            {features.map((feature, index) => (
                                <FeatureItem key={index}>{feature}</FeatureItem>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <Button
                                href="#donate"
                                size="lg"
                                className="rounded-full bg-emerald-600 hover:bg-emerald-700"
                            >
                                Donate Now
                            </Button>
                            <Button
                                href="#share"
                                size="lg"
                                color="secondary"
                                iconLeading={Share07}
                                className="rounded-full"
                            >
                                Share With Others
                            </Button>
                        </div>

                        <div className="mt-6 flex items-center gap-3">
                            <CommitteeAvatars />
                            <span className="text-sm text-secondary">Village Committee Members</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Component10;
