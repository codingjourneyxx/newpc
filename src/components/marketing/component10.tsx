"use client";

import { Check, Heart, Share07, Phone, Copy01, Building07, CreditCard01, MessageCircle01 } from "@untitledui/icons";
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
            <path d="M20 2C20 2 8 12 8 22C8 28 12 34 20 34C28 34 32 28 32 22C32 12 20 2 20 2Z" fill="#059669" />
            <rect x="6" y="32" width="28" height="6" fill="#059669" />
            <rect x="16" y="26" width="8" height="12" rx="4" fill="#ffffff" />
            <path d="M18 6C18 6 22 9 22 14C22 19 18 22 18 22C21 22 26 18 26 12C26 6 21 2 18 2C18 2 18 4 18 6Z" fill="#fbbf24" />
            <path d="M30 4L30.5 5.5L32 6L30.5 6.5L30 8L29.5 6.5L28 6L29.5 5.5L30 4Z" fill="#fbbf24" />
        </svg>
    </div>
);

/** Committee Members */
const CommitteeAvatars = () => (
    <div className="flex -space-x-2">
        <Avatar size="sm" initials="NH" className="ring-2 ring-white bg-emerald-600" />
        <Avatar size="sm" initials="AK" className="ring-2 ring-white bg-emerald-500" />
        <Avatar size="sm" initials="MH" className="ring-2 ring-white bg-emerald-600" />
    </div>
);

/** Info Row Component */
const InfoRow = ({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) => (
    <div className="flex items-center justify-between py-2 border-b border-emerald-100 last:border-0">
        <span className="text-xs text-secondary">{label}</span>
        <span className={cx("text-xs font-medium", highlight ? "text-emerald-600" : "text-primary")}>{value}</span>
    </div>
);

export const Component10 = ({ className }: Component10Props) => {
    return (
        <section className={cx("w-full", className)}>
            <div className="mx-auto max-w-7xl border-l border-r border-secondary px-4 py-12 sm:px-6 sm:py-16 md:py-24 lg:px-8">
                {/* Illustration */}
                <MosqueIllustration />

                {/* Shared Headline - English & Hindi */}
                <div className="mt-6 sm:mt-8">
                    <h2 className="text-center font-serif text-2xl font-normal italic tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl">
                        Be part of this <span className="text-emerald-600">blessed journey</span>
                    </h2>
                    <h2 className="mt-2 text-center font-serif text-xl font-normal italic tracking-tight text-emerald-700 sm:text-2xl md:text-3xl">
                        इस मुबारक सफर का हिस्सा बनें
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-secondary sm:mt-6 sm:text-base">
                        Your contribution, no matter how small, will help build a place of worship and learning for our community.
                    </p>

                    <p className="mx-auto mt-4 max-w-xl text-center text-sm font-semibold text-emerald-600 sm:text-base">
                        "May Allah reward you with goodness" - Jazakallahu Khairan
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="mt-10 grid gap-8 sm:mt-12 lg:grid-cols-2">
                    {/* Left Column - English */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/20 via-transparent to-teal-200/20" />
                        <div className="relative rounded-xl bg-white/80 backdrop-blur-sm p-5 sm:p-6">
                            {/* Language Badge */}
                            <div className="flex items-center justify-between mb-5">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                                    <span className="size-2 rounded-full bg-emerald-500" />
                                    English
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-medium text-amber-700">
                                    <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
                                    Under Construction
                                </span>
                            </div>

                            {/* Project Header */}
                            <div className="flex items-start gap-4 pb-5 border-b border-emerald-100">
                                <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg">
                                    <Building07 className="size-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-primary">Al-Hamd Masjid wa Madrasa</h3>
                                    <p className="text-sm text-secondary mt-0.5">Sahab Ganj, Basti, UP - 272182</p>
                                </div>
                            </div>

                            {/* Location Details */}
                            <div className="py-4 border-b border-emerald-100">
                                <InfoRow label="Village" value="Sahab Ganj" />
                                <InfoRow label="P.O." value="Walter Ganj" />
                                <InfoRow label="District" value="Basti, Uttar Pradesh" />
                                <InfoRow label="PIN Code" value="272182" highlight />
                            </div>

                            {/* Donation Methods */}
                            <div className="py-4 space-y-3">
                                <h4 className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                                    <Heart className="size-4" />
                                    Ways to Donate
                                </h4>

                                {/* Bank Transfer */}
                                <div className="rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 p-4 border border-emerald-100">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <CreditCard01 className="size-4 text-emerald-600" />
                                            <span className="text-xs font-semibold text-emerald-700">Bank Transfer (SBI)</span>
                                        </div>
                                        <button
                                            onClick={() => navigator.clipboard.writeText("10580754654")}
                                            className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-600 hover:bg-emerald-200 transition"
                                        >
                                            <Copy01 className="size-3" />
                                            Copy
                                        </button>
                                    </div>
                                    <p className="text-xs text-secondary">Account: Al-Hamd Masjid wa Madrasa</p>
                                    <p className="text-base font-bold text-primary mt-1">10580754654</p>
                                </div>

                                {/* UPI */}
                                <div className="rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 p-4 border border-purple-100">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-semibold text-purple-700">G-Pay / UPI</span>
                                    </div>
                                    <p className="text-base font-bold text-primary">9022726250</p>
                                    <p className="text-[10px] text-secondary mt-1">UPI: thealhamdtechnologies-1@oksbi</p>
                                </div>

                                {/* Contact */}
                                <div className="rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 p-4 border border-blue-100">
                                    <div className="flex items-center gap-2 mb-2">
                                        <MessageCircle01 className="size-4 text-blue-600" />
                                        <span className="text-xs font-semibold text-blue-700">Contact In-Charge</span>
                                    </div>
                                    <p className="text-sm font-semibold text-primary">Nibboo Hassan Khan</p>
                                    <a href="tel:+919022726250" className="inline-flex items-center gap-1.5 mt-1 text-xs font-medium text-blue-600 hover:text-blue-700">
                                        <Phone className="size-3" />
                                        +91 9022726250
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Column - Hindi */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-50 via-white to-emerald-50 p-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-200/20 via-transparent to-emerald-200/20" />
                        <div className="relative rounded-xl bg-white/80 backdrop-blur-sm p-5 sm:p-6">
                            {/* Language Badge */}
                            <div className="flex items-center justify-between mb-5">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">
                                    <span className="size-2 rounded-full bg-teal-500" />
                                    हिंदी
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-medium text-amber-700">
                                    <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
                                    निर्माणाधीन
                                </span>
                            </div>

                            {/* Project Header */}
                            <div className="flex items-start gap-4 pb-5 border-b border-teal-100">
                                <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 shadow-lg">
                                    <Building07 className="size-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-primary">अल-हम्द मस्जिद व मदरसा</h3>
                                    <p className="text-sm text-secondary mt-0.5">साहब गंज, बस्ती, उ.प्र. - 272182</p>
                                </div>
                            </div>

                            {/* Location Details */}
                            <div className="py-4 border-b border-teal-100">
                                <InfoRow label="ग्राम" value="साहब गंज" />
                                <InfoRow label="पो." value="वाल्टर गंज" />
                                <InfoRow label="ज़िला" value="बस्ती, उत्तर प्रदेश" />
                                <InfoRow label="पिन कोड" value="272182" highlight />
                            </div>

                            {/* Donation Methods */}
                            <div className="py-4 space-y-3">
                                <h4 className="flex items-center gap-2 text-sm font-semibold text-teal-700">
                                    <Heart className="size-4" />
                                    दान के तरीके
                                </h4>

                                {/* Bank Transfer */}
                                <div className="rounded-xl bg-gradient-to-r from-teal-50 to-emerald-50 p-4 border border-teal-100">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <CreditCard01 className="size-4 text-teal-600" />
                                            <span className="text-xs font-semibold text-teal-700">बैंक ट्रांसफर (SBI)</span>
                                        </div>
                                        <button
                                            onClick={() => navigator.clipboard.writeText("10580754654")}
                                            className="flex items-center gap-1 rounded-full bg-teal-100 px-2 py-0.5 text-[10px] font-medium text-teal-600 hover:bg-teal-200 transition"
                                        >
                                            <Copy01 className="size-3" />
                                            कॉपी
                                        </button>
                                    </div>
                                    <p className="text-xs text-secondary">खाता: अल-हम्द मस्जिद व मदरसा</p>
                                    <p className="text-base font-bold text-primary mt-1">10580754654</p>
                                </div>

                                {/* UPI */}
                                <div className="rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 p-4 border border-purple-100">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-semibold text-purple-700">जी-पे / यूपीआई</span>
                                    </div>
                                    <p className="text-base font-bold text-primary">9022726250</p>
                                    <p className="text-[10px] text-secondary mt-1">UPI: thealhamdtechnologies-1@oksbi</p>
                                </div>

                                {/* Contact */}
                                <div className="rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 p-4 border border-blue-100">
                                    <div className="flex items-center gap-2 mb-2">
                                        <MessageCircle01 className="size-4 text-blue-600" />
                                        <span className="text-xs font-semibold text-blue-700">ज़िम्मेदार से संपर्क</span>
                                    </div>
                                    <p className="text-sm font-semibold text-primary">निब्बू हसन खान</p>
                                    <a href="tel:+919022726250" className="inline-flex items-center gap-1.5 mt-1 text-xs font-medium text-blue-600 hover:text-blue-700">
                                        <Phone className="size-3" />
                                        +91 9022726250
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Component10;
