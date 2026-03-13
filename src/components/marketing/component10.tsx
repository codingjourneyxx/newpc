"use client";

import { Check, Heart, Share07, Phone, Copy01, Building07, MarkerPin01 } from "@untitledui/icons";
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

/** Feature Check Item */
const FeatureItem = ({ children }: { children: string }) => (
    <div className="flex items-center gap-2">
        <div className="flex size-4 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600">
            <Check className="size-2.5 text-white" />
        </div>
        <span className="text-xs text-secondary sm:text-sm">{children}</span>
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
                <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2 lg:gap-8">
                    {/* Left Column - English */}
                    <div className="space-y-4">
                        {/* Project Info - English */}
                        <div className="rounded-xl border border-emerald-200 bg-white p-4 shadow-lg sm:p-5">
                            <div className="flex items-center gap-2 mb-3">
                                <Building07 className="size-5 text-emerald-600" />
                                <span className="text-sm font-semibold text-emerald-700 sm:text-base">Project Details</span>
                                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-700">
                                    <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
                                    Under Construction
                                </span>
                            </div>
                            <h4 className="text-base font-semibold text-primary sm:text-lg">Al-Hamd Masjid wa Madrasa</h4>
                            <div className="mt-2 space-y-1 text-xs text-secondary sm:text-sm">
                                <p>Village: Sahab Ganj</p>
                                <p>P.O.: Walter Ganj</p>
                                <p>District: Basti, Uttar Pradesh</p>
                                <p className="font-medium text-emerald-600">PIN: 272182</p>
                            </div>
                        </div>

                        {/* Donation Info - English */}
                        <div className="overflow-hidden rounded-xl border border-emerald-200 bg-emerald-50 shadow-lg">
                            <div className="flex items-center gap-2 border-b border-emerald-200 bg-emerald-100 px-4 py-3">
                                <Heart className="size-5 text-emerald-600" />
                                <span className="text-sm font-semibold text-emerald-700 sm:text-base">Ways to Donate</span>
                            </div>
                            <div className="p-4 space-y-3">
                                <div className="rounded-lg bg-white p-3 border border-emerald-200">
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs font-semibold text-emerald-700 sm:text-sm">Bank Transfer (SBI)</p>
                                        <button
                                            onClick={() => navigator.clipboard.writeText("10580754654")}
                                            className="flex items-center gap-1 text-[10px] text-emerald-600 hover:text-emerald-700"
                                        >
                                            <Copy01 className="size-3" />
                                            Copy
                                        </button>
                                    </div>
                                    <p className="text-[10px] text-secondary mt-1.5 sm:text-xs">Account: Al-Hamd Masjid wa Madrasa</p>
                                    <p className="text-xs font-medium text-primary mt-0.5 sm:text-sm">A/C No: 10580754654</p>
                                </div>
                                <div className="rounded-lg bg-white p-3 border border-emerald-200">
                                    <p className="text-xs font-semibold text-emerald-700 sm:text-sm">G-Pay / UPI</p>
                                    <p className="text-xs font-medium text-primary mt-1.5 sm:text-sm">9022726250</p>
                                    <p className="text-[10px] text-secondary mt-0.5">UPI: thealhamdtechnologies-1@oksbi</p>
                                </div>
                                <div className="rounded-lg bg-white p-3 border border-emerald-200">
                                    <p className="text-xs font-semibold text-emerald-700 sm:text-sm">Contact In-Charge</p>
                                    <p className="text-xs font-medium text-primary mt-1.5 sm:text-sm">Nibboo Hassan Khan</p>
                                    <a href="tel:+919022726250" className="flex items-center gap-1 text-[10px] text-emerald-600 mt-0.5 hover:text-emerald-700">
                                        <Phone className="size-3" />
                                        +91 9022726250
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CTA - English */}
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Button href="#donate" size="lg" className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 sm:w-auto">
                                Donate Now
                            </Button>
                            <Button href="#share" size="lg" color="secondary" iconLeading={Share07} className="w-full rounded-full sm:w-auto">
                                Share
                            </Button>
                        </div>
                        <div className="flex items-center gap-3">
                            <CommitteeAvatars />
                            <span className="text-xs text-secondary">Sahab Ganj Committee</span>
                        </div>
                    </div>

                    {/* Right Column - Hindi */}
                    <div className="space-y-4">
                        {/* Project Info - Hindi */}
                        <div className="rounded-xl border border-emerald-200 bg-white p-4 shadow-lg sm:p-5">
                            <div className="flex items-center gap-2 mb-3">
                                <Building07 className="size-5 text-emerald-600" />
                                <span className="text-sm font-semibold text-emerald-700 sm:text-base">परियोजना विवरण</span>
                                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-700">
                                    <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
                                    निर्माणाधीन
                                </span>
                            </div>
                            <h4 className="text-base font-semibold text-primary sm:text-lg">अल-हम्द मस्जिद व मदरसा</h4>
                            <div className="mt-2 space-y-1 text-xs text-secondary sm:text-sm">
                                <p>ग्राम: साहब गंज</p>
                                <p>पो.: वाल्टर गंज</p>
                                <p>ज़िला: बस्ती, उत्तर प्रदेश</p>
                                <p className="font-medium text-emerald-600">पिन: 272182</p>
                            </div>
                        </div>

                        {/* Donation Info - Hindi */}
                        <div className="overflow-hidden rounded-xl border border-emerald-200 bg-emerald-50 shadow-lg">
                            <div className="flex items-center gap-2 border-b border-emerald-200 bg-emerald-100 px-4 py-3">
                                <Heart className="size-5 text-emerald-600" />
                                <span className="text-sm font-semibold text-emerald-700 sm:text-base">दान के तरीके</span>
                            </div>
                            <div className="p-4 space-y-3">
                                <div className="rounded-lg bg-white p-3 border border-emerald-200">
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs font-semibold text-emerald-700 sm:text-sm">बैंक ट्रांसफर (SBI)</p>
                                        <button
                                            onClick={() => navigator.clipboard.writeText("10580754654")}
                                            className="flex items-center gap-1 text-[10px] text-emerald-600 hover:text-emerald-700"
                                        >
                                            <Copy01 className="size-3" />
                                            कॉपी
                                        </button>
                                    </div>
                                    <p className="text-[10px] text-secondary mt-1.5 sm:text-xs">खाता: अल-हम्द मस्जिद व मदरसा</p>
                                    <p className="text-xs font-medium text-primary mt-0.5 sm:text-sm">खाता नं: 10580754654</p>
                                </div>
                                <div className="rounded-lg bg-white p-3 border border-emerald-200">
                                    <p className="text-xs font-semibold text-emerald-700 sm:text-sm">जी-पे / यूपीआई</p>
                                    <p className="text-xs font-medium text-primary mt-1.5 sm:text-sm">9022726250</p>
                                    <p className="text-[10px] text-secondary mt-0.5">UPI: thealhamdtechnologies-1@oksbi</p>
                                </div>
                                <div className="rounded-lg bg-white p-3 border border-emerald-200">
                                    <p className="text-xs font-semibold text-emerald-700 sm:text-sm">ज़िम्मेदार से संपर्क</p>
                                    <p className="text-xs font-medium text-primary mt-1.5 sm:text-sm">निब्बू हसन खान</p>
                                    <a href="tel:+919022726250" className="flex items-center gap-1 text-[10px] text-emerald-600 mt-0.5 hover:text-emerald-700">
                                        <Phone className="size-3" />
                                        +91 9022726250
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CTA - Hindi */}
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Button href="#donate" size="lg" className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 sm:w-auto">
                                अभी दान करें
                            </Button>
                            <Button href="#share" size="lg" color="secondary" iconLeading={Share07} className="w-full rounded-full sm:w-auto">
                                शेयर करें
                            </Button>
                        </div>
                        <div className="flex items-center gap-3">
                            <CommitteeAvatars />
                            <span className="text-xs text-secondary">साहब गंज समिति</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Component10;
